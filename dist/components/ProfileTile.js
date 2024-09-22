var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Shimmer from './Shimmer';
const ProfileTile = (_a) => {
    var { isLoading, rounded = false, rightImage = false } = _a, props = __rest(_a, ["isLoading", "rounded", "rightImage"]);
    if (isLoading) {
        return (<View style={styles.container}>
                {!rightImage && (<Shimmer style={[
                    styles.image,
                    (rounded && styles.roundedImage),
                    styles.imageLeft
                ]}/>)}
                <View style={[styles.details, rightImage ? styles.detailsRight : styles.detailsLeft]}>
                    <Shimmer style={styles.shimmerPrimaryInfo}/>
                    <Shimmer style={styles.shimmerSecondaryInfo}/>
                    <Shimmer style={styles.shimmerAddon}/>
                </View>
                {rightImage && (<Shimmer style={[
                    styles.image,
                    (rounded && styles.roundedImage),
                    styles.imageRight
                ]}/>)}
            </View>);
    }
    const { imageSrc, primaryInfo, secondaryInfo, addOnElement, actionElement, onClick } = props;
    const imageElement = (<Image style={[
            styles.image,
            rounded && styles.roundedImage,
            rightImage ? styles.imageRight : styles.imageLeft
        ]} source={typeof imageSrc === 'string' ? { uri: imageSrc } : imageSrc}/>);
    const detailsElement = (<View style={[styles.details, rightImage ? styles.detailsRight : styles.detailsLeft]}>
            <Text style={styles.primaryInfo} ellipsizeMode='tail' numberOfLines={1}>{primaryInfo}</Text>
            {secondaryInfo && <Text style={styles.secondaryInfo} ellipsizeMode='tail' numberOfLines={1}>{secondaryInfo}</Text>}
            {addOnElement}
        </View>);
    const actionContainerElement = actionElement && (<View style={[styles.actionContainer, rightImage ? styles.actionLeft : styles.actionRight]}>
            {actionElement}
        </View>);
    const content = (<>
            {rightImage ? actionContainerElement : imageElement}
            {detailsElement}
            {rightImage ? imageElement : actionContainerElement}
        </>);
    if (onClick) {
        return (<Pressable style={styles.container} onPress={onClick}>
                {content}
            </Pressable>);
    }
    return <View style={styles.container}>{content}</View>;
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        overflow: "hidden",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    imageLeft: {
        marginRight: 10,
    },
    imageRight: {
        marginLeft: 10,
    },
    roundedImage: {
        borderRadius: 30,
    },
    details: {
        flex: 1,
    },
    detailsLeft: {
        marginRight: 10,
    },
    detailsRight: {
        marginLeft: 10,
    },
    primaryInfo: {
        fontWeight: "bold",
        fontSize: 15
    },
    secondaryInfo: {
        fontSize: 10,
        color: '#666'
    },
    actionContainer: {
        justifyContent: 'center',
    },
    actionLeft: {
        marginRight: 'auto',
    },
    actionRight: {
        marginLeft: 'auto',
    },
    shimmerPrimaryInfo: {
        width: 120,
        height: 15,
        marginBottom: 5,
    },
    shimmerSecondaryInfo: {
        width: 150,
        height: 10,
        marginBottom: 5,
    },
    shimmerAddon: {
        width: 70,
        height: 20,
    },
});
export default ProfileTile;
//# sourceMappingURL=ProfileTile.js.map