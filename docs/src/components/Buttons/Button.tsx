import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, Platform, TextStyle, TextProps, PressableStateCallbackType, View } from 'react-native';
import colors from '../../lib/colors';
import { ButtonProps, ButtonColor } from './Button.types';

const colorMap: Record<ButtonColor, string> = {
    primary: colors.primary,
    secondary: colors.grey,
    success: colors.success,
    danger: colors.danger,
    warning: colors.warning,
    info: colors.info,
    link: colors.primary,
};

export default function Button({
    children,
    onPress,
    onLongPress,
    palette = 'primary',
    size = 'medium',
    variant = 'solid',
    rounded = false,
    active = false,
    disabled = false,
    style,
}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const buttonColor = colorMap[palette];
    const isWeb = Platform.OS === 'web';

    const buttonStyle: ViewStyle = {
        ...styles.button,
        ...(styles[size] as object),
        ...(variant === 'solid' && palette !== 'link'
            ? { backgroundColor: buttonColor }
            : variant === 'outline' && palette !== 'link'
            ? { borderColor: buttonColor, borderWidth: 1 }
            : {}),
        ...(rounded ? styles.rounded : {}),
        ...(active ? styles.active : {}),
        ...(disabled ? styles.disabled : {}),
        ...(style || {}),
    };

    const hoverStyle: ViewStyle = isWeb && isHovered && variant !== 'link'
        ? {
            backgroundColor: variant === 'solid' 
                ? `${buttonColor}dd`  // Slightly transparent
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
                const key = `buttonKey-${index}-${Date.now()}`;

                if (React.isValidElement<any>(child)) {
                    if (child.type === Text || (child.props && 'style' in child.props)) {
                        return React.cloneElement(child, {
                            key: child.key ?? key,
                            style: StyleSheet.compose(child.props.style, {color: getTextColor()})
                        });
                    }
                    return React.cloneElement(child, { key: child.key ?? key });
                }
                return <Text key={key} style={{ color: getTextColor() }}>{String(child)}</Text>;
            });
        }
        return children;
    };

    const pressableStyle = ({ pressed }: PressableStateCallbackType): ViewStyle => ({
        ...buttonStyle,
        ...(pressed ? styles.pressed : {}),
        ...hoverStyle,
    });

    const webProps = isWeb ? {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
    } : {};

    return (
        <Pressable
            style={pressableStyle}
            disabled={disabled}
            onPress={onPress}
            onLongPress={onLongPress}
            {...webProps}
        >
            <View style={styles.contentContainer}>
                {renderChildren()}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        ...(Platform.OS === 'web' ? { cursor: 'pointer' as 'pointer' } : {}),
    },
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
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    medium: {
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    large: {
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
});