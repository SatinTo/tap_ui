import { ImageSourcePropType } from 'react-native';
export interface BaseProfileTileProps {
    primaryInfo: string;
    imageSrc: string | ImageSourcePropType;
    secondaryInfo?: string;
    addOnElement?: React.ReactNode;
    actionElement?: React.ReactNode;
}
interface LoadingProfileTileProps {
    isLoading: true;
}
type LoadedProfileTileProps = BaseProfileTileProps & {
    isLoading?: false;
};
export type ProfileTileProps = LoadingProfileTileProps | LoadedProfileTileProps;
export {};
