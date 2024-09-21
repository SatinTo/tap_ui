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
//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Shimmer from './Shimmer';
const ProfileTile = (_a) => {
    var { isLoading } = _a, props = __rest(_a, ["isLoading"]);
    if (isLoading) {
        return (<View style={merchantStyles.merchantInformation}>
                <Shimmer style={merchantStyles.merchantImage}/>
                <View style={merchantStyles.merchantDetails}>
                    <Shimmer style={merchantStyles.shimmerMerchantName}/>
                    <Shimmer style={merchantStyles.shimmerMerchantAddress}/>
                    <Shimmer style={merchantStyles.shimmerPreOrder}/>
                </View>
                <View style={{ marginLeft: "auto" }}>
                    <Shimmer style={merchantStyles.shimmerPreOrder}/>
                </View>
            </View>);
    }
    const { imageSrc, primaryInfo, secondaryInfo, addOnElement, actionElement } = props;
    return (<View style={merchantStyles.merchantInformation}>
            <View>
            <Image style={merchantStyles.merchantImage} source={typeof imageSrc === 'string' ? { uri: imageSrc } : imageSrc}/>
            </View>
            <View style={merchantStyles.merchantDetails}>
                <Text style={merchantStyles.merchantName} ellipsizeMode='tail' numberOfLines={1}>{primaryInfo}</Text>
                <Text style={merchantStyles.merchantAddress} ellipsizeMode='tail' numberOfLines={1}>{secondaryInfo}</Text>
                {addOnElement}
            </View>
            <View style={{ marginLeft: "auto" }}>
                {actionElement}
            </View>
        </View>);
};
export const merchantStyles = StyleSheet.create({
    merchantName: {
        fontWeight: "bold",
        fontSize: 15
    },
    merchantInformation: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingHorizontal: 15,
        overflow: "hidden",
    },
    merchantDetails: {
        marginLeft: 10,
    },
    merchantImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    merchantAddress: {
        fontSize: 10,
        color: '#666'
    },
    shimmerMerchantName: {
        width: 120,
        height: 15,
        marginLeft: 10,
        marginTop: 15,
    },
    shimmerMerchantAddress: {
        width: 150,
        height: 10,
        marginLeft: 10,
        marginTop: 5,
    },
    shimmerPreOrder: {
        width: 70,
        height: 20,
        marginLeft: 10,
        marginTop: 5,
    },
});
//make this component available to the app
export default ProfileTile;
//# sourceMappingURL=ProfileTile.js.map