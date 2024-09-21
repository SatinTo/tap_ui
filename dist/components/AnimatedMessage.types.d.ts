import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
export interface AnimatedMessageProps {
    children: ReactNode;
    visible?: boolean;
}
export interface ChildProps {
    style?: StyleProp<TextStyle>;
}
