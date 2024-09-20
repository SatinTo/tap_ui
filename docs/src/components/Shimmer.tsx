import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import colors from '../lib/colors';
import ShimmerProps from './Shimmer.types';

const Shimmer: React.FC<ShimmerProps> = ({ style }) => {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        const animate = () => {
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 500,
                    useNativeDriver: true,
                })
            ]).start(() => animate());
        };

        animate();

        return () => opacity.stopAnimation();
    }, [opacity]);

    return (
        <Animated.View
            style={[
                styles.shimmer,
                style,
                { opacity }
            ]}
        />
    );
};

const styles = StyleSheet.create({
    shimmer: {
        backgroundColor: colors.grey,
        overflow: 'hidden',
    },
});

export default Shimmer;