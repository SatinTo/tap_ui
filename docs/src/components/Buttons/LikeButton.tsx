import React, { useCallback, useEffect, useState } from 'react';
import { Text, Pressable, Animated, StyleSheet, View } from 'react-native';
import { HeartIcon as OutlineHeartIcon } from 'react-native-heroicons/outline';
import { HeartIcon as SolidHeartIcon } from 'react-native-heroicons/solid';
import colors from '../../lib/colors';
import optimizeNumber from '../../lib/optimizeNumber';
import { debounce } from '../../lib/debounce';
import Shimmer from '../Shimmer';
import { BaseLikeButtonProps, LikeButtonProps } from './LikeButton.types';

const LikeButton: React.FC<LikeButtonProps> = ({ 
    isLoading = false,
    ...props
}) => {
    const {
        id,
        likesCount,
        active,
        onLikeChange,
        disabled,
        enableDebounce,
    } = props as BaseLikeButtonProps;
    const [isLiked, setIsLiked] = useState(active);
    const [likesTotal, setLikesCount] = useState(likesCount);
    const animatedScale = useState(new Animated.Value(1))[0];
    const [pendingLikeChange, setPendingLikeChange] = useState(null);

    const handleLikeChange = useCallback((newIsLiked: boolean) => {
        if (onLikeChange && typeof onLikeChange === 'function') {
            Promise.resolve(onLikeChange(id, newIsLiked))
                .then((result) => {
                    if (result === null) {
                        // Revert the changes if result is null
                        setIsLiked(!newIsLiked);
                        setLikesCount(likesCount);
                    } else {
                        setLikesCount(result);
                    }
                    setPendingLikeChange(null);
                })
                .catch((error) => {
                    console.error('Error in onLikeChange:', error);
                    // Revert the changes on error
                    setIsLiked(active);
                    setLikesCount(likesCount);
                    setPendingLikeChange(null);
                });
        }
    }, [id, likesCount, onLikeChange, active]);

    const debouncedOnLikeChange = useCallback(
        debounce(handleLikeChange, 1000),
        [handleLikeChange]
    );

    useEffect(() => {
        if (pendingLikeChange !== null) {
            if (enableDebounce) {
                debouncedOnLikeChange(pendingLikeChange);
            } else {
                handleLikeChange(pendingLikeChange);
            }
        }
    }, [pendingLikeChange, debouncedOnLikeChange, handleLikeChange, enableDebounce]);

    const handlePress = () => {
        if (disabled) return;

        const newIsLiked = !isLiked;
        const initialLikeCount = likesTotal + (newIsLiked ? 1 : -1);

        setIsLiked(newIsLiked);
        setLikesCount(initialLikeCount);
        setPendingLikeChange(newIsLiked as any);

        Animated.sequence([
            Animated.timing(animatedScale, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(animatedScale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };

    if (isLoading) {
        return (
            <View style={styles.row}>
                <Shimmer style={styles.iconShimmer} />
                <Shimmer style={styles.textShimmer} />
            </View>
        );
    }

    return (
        <Pressable onPress={handlePress} style={styles.row} disabled={disabled}>
            <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
                {isLiked ? (
                    <SolidHeartIcon color={colors.primary} />
                ) : (
                    <OutlineHeartIcon color={colors.grey} />
                )}
            </Animated.View>
            <Text style={styles.text}>
                {optimizeNumber(likesTotal)} Likes
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 5,
        color: colors.grey,
    },
    iconShimmer: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    textShimmer: {
        width: 60,
        height: 16,
        marginLeft: 5,
        borderRadius: 4,
    }
});

export default LikeButton;