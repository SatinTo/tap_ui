import { GestureResponderEvent, ViewStyle } from "react-native";
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'link';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'solid' | 'outline' | 'link';
export interface ButtonProps {
    palette?: ButtonColor;
    size?: ButtonSize;
    variant?: ButtonVariant;
    rounded?: boolean;
    active?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    onPress?: (event: GestureResponderEvent) => void;
    onLongPress?: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
}
export {};
