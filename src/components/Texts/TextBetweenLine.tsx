import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export interface TextBetweenLineProps {
    children ?: String | undefined
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        justifyContent: 'center'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#000',
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
})
 
const TextBetweenLine: React.FC<TextBetweenLineProps> = ({children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>{children}</Text>
            <View style={styles.line} />
        </View>
    );
}
 
export default TextBetweenLine;