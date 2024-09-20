import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const TextBetweenLine = ({ children }) => {
    return (<View style={styles.container}>
            <View style={styles.line}/>
            <Text style={styles.text}>{children}</Text>
            <View style={styles.line}/>
        </View>);
};
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
});
export default TextBetweenLine;
//# sourceMappingURL=TextBetweenLine.js.map