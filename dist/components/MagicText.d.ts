import React from 'react';
import { TextStyle, StyleProp } from 'react-native';
interface MagicTextProps {
    children: string;
    initialNumberOfLines?: number;
    trimLength?: number;
    onHashtagPress?: (hashtag: string) => void;
    onExpand?: () => void;
    onCollapse?: () => void;
    ellipsisPosition?: 'end' | 'middle';
    style?: StyleProp<TextStyle>;
}
declare const MagicText: React.FC<MagicTextProps>;
export default MagicText;
