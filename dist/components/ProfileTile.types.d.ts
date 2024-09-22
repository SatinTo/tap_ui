import { ImageSourcePropType } from 'react-native';
export interface BaseProfileTileProps {
    primaryInfo: string;
    imageSrc: string | ImageSourcePropType;
    secondaryInfo?: string;
    addOnElement?: React.ReactNode;
    actionElement?: React.ReactNode;
    rightImage?: boolean;
    onClick?: () => void;
}
interface LoadingProfileTileProps {
    isLoading: true;
    rounded?: boolean;
}
export type LoadedProfileTileProps = BaseProfileTileProps & {
    isLoading?: false;
    rounded?: boolean;
};
export type ProfileTileProps = LoadingProfileTileProps | LoadedProfileTileProps;
export {};
