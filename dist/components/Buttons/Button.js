import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, Platform, View } from 'react-native';
import colors from '../../lib/colors';
const colorMap = {
    primary: colors.primary,
    secondary: colors.grey,
    success: colors.success,
    danger: colors.danger,
    warning: colors.warning,
    info: colors.info,
    link: colors.primary,
};
export default function Button({ children, onPress, onLongPress, palette = 'primary', size = 'medium', variant = 'solid', rounded = false, active = false, disabled = false, style, }) {
    const [isHovered, setIsHovered] = useState(false);
    const buttonColor = colorMap[palette];
    const isWeb = Platform.OS === 'web';
    const buttonStyle = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.button), styles[size]), (variant === 'solid' && palette !== 'link'
        ? { backgroundColor: buttonColor }
        : variant === 'outline' && palette !== 'link'
            ? { borderColor: buttonColor, borderWidth: 1 }
            : {})), (rounded ? styles.rounded : {})), (active ? styles.active : {})), (disabled ? styles.disabled : {})), (style || {}));
    const hoverStyle = isWeb && isHovered && variant !== 'link'
        ? {
            backgroundColor: variant === 'solid'
                ? `${buttonColor}dd` // Slightly transparent
                : buttonColor,
        }
        : {};
    const getTextColor = () => {
        if (variant === 'link' || variant === 'outline') {
            return buttonColor;
        }
        return 'white';
    };
    const renderChildren = () => {
        if (typeof children === 'string') {
            return <Text style={{ color: getTextColor() }}>{children}</Text>;
        }
        if (Array.isArray(children)) {
            return children.map((child, index) => {
                var _a, _b;
                const key = `buttonKey-${index}-${Date.now()}`;
                if (React.isValidElement(child)) {
                    if (child.type === Text || (child.props && 'style' in child.props)) {
                        return React.cloneElement(child, {
                            key: (_a = child.key) !== null && _a !== void 0 ? _a : key,
                            style: StyleSheet.compose(child.props.style, { color: getTextColor() })
                        });
                    }
                    return React.cloneElement(child, { key: (_b = child.key) !== null && _b !== void 0 ? _b : key });
                }
                return <Text key={key} style={{ color: getTextColor() }}>{String(child)}</Text>;
            });
        }
        return children;
    };
    const pressableStyle = ({ pressed }) => (Object.assign(Object.assign(Object.assign({}, buttonStyle), (pressed ? styles.pressed : {})), hoverStyle));
    const webProps = isWeb ? {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
    } : {};
    return (<Pressable style={pressableStyle} disabled={disabled} onPress={onPress} onLongPress={onLongPress} {...webProps}>
            <View style={styles.contentContainer}>
                {renderChildren()}
            </View>
        </Pressable>);
}
const styles = StyleSheet.create({
    button: Object.assign({ borderRadius: 4, alignItems: 'center', justifyContent: 'center' }, (Platform.OS === 'web' ? { cursor: 'pointer' } : {})),
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rounded: {
        borderRadius: 25,
    },
    active: {
        opacity: 0.8,
    },
    disabled: {
        opacity: 0.5,
    },
    pressed: {
        opacity: 0.8,
    },
    small: {
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    medium: {
        fontSize: 14,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    large: {
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
});
//# sourceMappingURL=Button.js.map