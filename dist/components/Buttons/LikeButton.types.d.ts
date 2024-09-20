export interface BaseLikeButtonProps {
    id: number | string;
    likesCount: number;
    disabled?: boolean;
    onLikeChange?: (id: number | string, isLiked: boolean) => Promise<number | null> | number | null;
    active?: boolean;
    enableDebounce?: boolean;
}
interface LoadingLikeButtonProps {
    isLoading: true;
}
type LoadedLikeButtonProps = BaseLikeButtonProps & {
    isLoading?: false;
};
export type LikeButtonProps = LoadingLikeButtonProps | LoadedLikeButtonProps;
export {};
