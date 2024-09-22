import React, { useState } from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import colors from '../lib/colors';
const MagicText = ({ children, initialNumberOfLines = 3, trimLength = 50, onHashtagPress, onExpand, onCollapse, ellipsisPosition = 'end', style }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded((prev) => {
            if (!prev && onExpand) {
                onExpand();
            }
            else if (prev && onCollapse) {
                onCollapse();
            }
            return !prev;
        });
    };
    const trimExcessiveLineBreaks = (text) => {
        // Split the text into lines
        const lines = text.split('\n');
        // Reduce multiple consecutive empty lines to a single empty line
        const reducedLines = lines.reduce((acc, line) => {
            if (line.trim() !== '' || (acc.length > 0 && acc[acc.length - 1] !== '')) {
                acc.push(line);
            }
            return acc;
        }, []);
        // Join the lines back together
        return reducedLines.join('\n');
    };
    const trimText = (text) => {
        // Trim the text and remove excessive line breaks
        text = trimExcessiveLineBreaks(text.trim());
        if (text.length <= trimLength)
            return text;
        if (ellipsisPosition === 'end') {
            return text.slice(0, trimLength) + '...';
        }
        else {
            const halfLength = Math.floor(trimLength / 2);
            return text.slice(0, halfLength) + '...' + text.slice(-halfLength);
        }
    };
    const renderText = () => {
        const text = isExpanded ? trimExcessiveLineBreaks(children.trim()) : trimText(children);
        const lines = text.split('\n');
        return (<Text style={style}>
                {lines.map((line, lineIndex) => {
                const parts = line.split(/(\s+|#\w+)/);
                return (<React.Fragment key={lineIndex}>
                            {parts.map((part, partIndex) => {
                        const trimmedPart = part.trim();
                        if (trimmedPart === '') {
                            // Preserve a single space for non-empty whitespace parts
                            return part.length > 0 ? ' ' : null;
                        }
                        if (trimmedPart.startsWith('#')) {
                            return (<Text key={`${lineIndex}-${partIndex}`} style={[
                                    style,
                                    styles.hashtag,
                                    { color: styles.hashtag.color, padding: 0, margin: 0 }
                                ]} onPress={() => onHashtagPress && onHashtagPress(trimmedPart)}>
                                            {trimmedPart}
                                        </Text>);
                        }
                        return trimmedPart;
                    }).filter(Boolean)}
                            {lineIndex < lines.length - 1 ? '\n' : null}
                        </React.Fragment>);
            })}
            </Text>);
    };
    return (<View>
            <Text numberOfLines={isExpanded ? undefined : initialNumberOfLines} ellipsizeMode="tail">
                {renderText()}
            </Text>
            {children.trim().length > trimLength && (<Pressable onPress={toggleExpand}>
                    <Text style={styles.seeMore}>
                        {isExpanded ? 'See less' : 'See more'}
                    </Text>
                </Pressable>)}
        </View>);
};
const styles = StyleSheet.create({
    hashtag: {
        color: colors.primary,
        fontWeight: 'bold'
    },
    seeMore: {
        color: 'gray',
        marginTop: 5,
    },
});
export default MagicText;
//# sourceMappingURL=MagicText.js.map