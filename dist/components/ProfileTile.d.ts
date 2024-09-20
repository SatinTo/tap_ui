import React from 'react';
import { ProfileTileProps } from './ProfileTile.types';
declare const ProfileTile: ({ imageUrl, primaryInfo, secondaryInfo, addOnElement, actionElement, isLoading }: ProfileTileProps) => React.JSX.Element;
export declare const merchantStyles: {
    merchantName: {
        fontWeight: "bold";
        fontSize: number;
    };
    merchantInformation: {
        flexDirection: "row";
        alignItems: "center";
        paddingTop: number;
        paddingHorizontal: number;
        overflow: "hidden";
    };
    merchantDetails: {
        marginLeft: number;
    };
    merchantImage: {
        width: number;
        height: number;
        borderRadius: number;
    };
    merchantAddress: {
        fontSize: number;
        color: string;
    };
    shimmerMerchantName: {
        width: number;
        height: number;
        marginLeft: number;
        marginTop: number;
    };
    shimmerMerchantAddress: {
        width: number;
        height: number;
        marginLeft: number;
        marginTop: number;
    };
    shimmerPreOrder: {
        width: number;
        height: number;
        marginLeft: number;
        marginTop: number;
    };
};
export default ProfileTile;
