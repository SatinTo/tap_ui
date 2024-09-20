export interface BaseLikeButtonProps {
    id: number | string;
    likesCount: number;
    disabled?: boolean;
    onLikeChange?: (id: number | string, isLiked: boolean) => Promise<number|null> | number | null;
    active?: boolean;
    enableDebounce?: boolean;
}

// Props for when the button is loading
interface LoadingLikeButtonProps {
    isLoading: true;
}

// Props for when the button is not loading
type LoadedLikeButtonProps = BaseLikeButtonProps & {
    isLoading?: false;
};

export type LikeButtonProps = LoadingLikeButtonProps | LoadedLikeButtonProps;