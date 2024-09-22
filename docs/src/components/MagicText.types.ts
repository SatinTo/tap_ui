import { StyleProp, TextStyle } from "react-native";

export interface MagicTextProps {
    children: string;
    initialNumberOfLines?: number;
    trimLength?: number;
    onHashtagPress?: (hashtag: string) => void;
    onExpand?: () => void;
    onCollapse?: () => void;
    ellipsisPosition?: 'end' | 'middle';
    style?: StyleProp<TextStyle>;
}
