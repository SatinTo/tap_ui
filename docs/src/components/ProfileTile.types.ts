export interface BaseProfileTileProps {
    primaryInfo: string;
    imageUrl: string;
    secondaryInfo?: string;
    addOnElement?: React.ReactNode;
    actionElement?: React.ReactNode;
}

interface LoadingProfileTileProps {
    isLoading: true;
}

type LoadedProfileTileProps = BaseProfileTileProps & {
    isLoading?: false
};

export type ProfileTileProps = LoadingProfileTileProps | LoadedProfileTileProps;