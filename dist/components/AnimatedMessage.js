import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, Animated, View } from 'react-native';
import colors from '../lib/colors';
const AnimatedMessage = ({ children, visible = true }) => {
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
        }
        else {
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
    if (!visible)
        return null;
    const renderChildren = () => {
        if (typeof children === 'string') {
            return <Text style={styles.text}>{children}</Text>;
        }
        if (Array.isArray(children)) {
            return children.map((child, index) => {
                var _a, _b;
                if (React.isValidElement(child)) {
                    if (child.type === Text || (child.props && 'style' in child.props)) {
                        return React.cloneElement(child, {
                            key: (_a = child.key) !== null && _a !== void 0 ? _a : index,
                            style: StyleSheet.compose(child.props.style, styles.text)
                        });
                    }
                    return React.cloneElement(child, { key: (_b = child.key) !== null && _b !== void 0 ? _b : index });
                }
                return <Text key={index} style={styles.text}>{String(child)}</Text>;
            });
        }
        return children;
    };
    return (<Animated.View style={[
            styles.container,
            {
                opacity: opacityAnim,
                transform: [
                    { scale: scaleAnim },
                    { rotate: rotate },
                ],
            },
        ]}>
            <View style={styles.row}>
                {renderChildren()}
            </View>
        </Animated.View>);
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
//# sourceMappingURL=AnimatedMessage.js.map