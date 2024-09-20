import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import colors from '../lib/colors';
import { NoticeProps } from './Notice.types';

const Notice: React.FC<NoticeProps> = ({children, title, types="default"}) => {
    let color = colors.primary; // AKA text color
    let backgroundColor = colors.primary_background;
    let borderColor = colors.primary_border;


    if (types === "alert") {
        color = colors.danger;
        backgroundColor = colors.danger_background;
        borderColor = colors.danger_border;
    }

    if (types === "info") {
        color = colors.info;
        backgroundColor = colors.info_background;
        borderColor = colors.info_border;
    }

    if (types === "warning") {
        color = colors.warning;
        backgroundColor = colors.warning_background;
        borderColor = colors.warning_border;
    }

    if (types === "success") {
        color = colors.success;
        backgroundColor = colors.success_background;
        borderColor = colors.success_border;
    }

    return (
        <View style={[styles.container, {borderColor, backgroundColor}]}>
            {
                title && <Text style={[styles.title, {color}]}>{title}</Text>
            }
            <Text style={[styles.message, {color}]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderLeftWidth: 3, 
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    message: {
        lineHeight: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 15, 
        marginBottom: 5
    }
})

export default Notice;
export type { NoticeProps };