//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import Shimmer from './Shimmer';
import { BaseProfileTileProps, ProfileTileProps } from './ProfileTile.types';

const ProfileTile: React.FC<ProfileTileProps> = ({
    isLoading,
    ...props
}) => {
    if (isLoading) {
        return (
            <View style={merchantStyles.merchantInformation}>
                <Shimmer style={merchantStyles.merchantImage} />
                <View style={merchantStyles.merchantDetails}>
                    <Shimmer style={merchantStyles.shimmerMerchantName} />
                    <Shimmer style={merchantStyles.shimmerMerchantAddress} />
                    <Shimmer style={merchantStyles.shimmerPreOrder} />
                </View>
                <View style={{ marginLeft: "auto" }}>
                    <Shimmer style={merchantStyles.shimmerPreOrder} />
                </View>
            </View>
        )
    }

    const {
        imageSrc,
        primaryInfo,
        secondaryInfo,
        addOnElement,
        actionElement
    } = props as BaseProfileTileProps;

    return (
        <View style={merchantStyles.merchantInformation}>
            <View>
            <Image 
                style={merchantStyles.merchantImage} 
                source={typeof imageSrc === 'string' ? { uri: imageSrc } : imageSrc as ImageSourcePropType} 
            />
            </View>
            <View style={merchantStyles.merchantDetails}>
                <Text style={merchantStyles.merchantName} ellipsizeMode='tail' numberOfLines={1}>{primaryInfo}</Text>
                <Text style={merchantStyles.merchantAddress} ellipsizeMode='tail' numberOfLines={1}>{secondaryInfo}</Text>
                {addOnElement}
            </View>
            <View style={{ marginLeft: "auto" }}>
                {actionElement}
            </View>
        </View>
    );
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
