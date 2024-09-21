import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, Animated, View } from 'react-native';
import colors from '../lib/colors';
import { AnimatedMessageProps, ChildProps } from './AnimatedMessage.types';

const AnimatedMessage: React.FC<AnimatedMessageProps> = ({ children, visible = true }) => {
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.spring(scaleAnim, {
                    toValue: 1,
                    useNativeDriver: true,
                    bounciness: 8,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.spring(rotateAnim, {
                    toValue: 1,
                    useNativeDriver: true,
                    bounciness: 8,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.spring(scaleAnim, {
                    toValue: 1.2,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.spring(rotateAnim, {
                    toValue: 2,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible]);

    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['-10deg', '0deg', '10deg'],
    });

    if (!visible) return null;

    const renderChildren = () => {
        if (typeof children === 'string') {
            return <Text style={styles.text}>{children}</Text>;
        }
        if (Array.isArray(children)) {
            return children.map((child, index) => {
                if (React.isValidElement<ChildProps>(child)) {
                    if (child.type === Text || (child.props && 'style' in child.props)) {
                        return React.cloneElement(child, {
                            key: child.key ?? index,
                            style: StyleSheet.compose(child.props.style, styles.text)
                        });
                    }
                    return React.cloneElement(child, { key: child.key ?? index });
                }
                return <Text key={index} style={styles.text}>{String(child)}</Text>;
            });
        }
        return children;
    };

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    opacity: opacityAnim,
                    transform: [
                        { scale: scaleAnim },
                        { rotate: rotate },
                    ],
                },
            ]}
        >
            <View style={styles.row}>
                {renderChildren()}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: colors.primary,
        fontSize: 15,
    }
});

export default AnimatedMessage;