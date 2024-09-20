export interface LikeButtonProps {
    id: number | string;
    likesCount: number;
    disabled?: boolean;
    onLikeChange?: (id: number | string, isLiked: boolean) => Promise<number|null> | number | null;
    active?: boolean;
    enableDebounce?: boolean;
    isLoading?: boolean;
}