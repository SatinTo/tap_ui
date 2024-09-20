type AnyFunction = (...args: any[]) => any;
export declare function debounce<F extends AnyFunction>(func: F, wait: number): (...args: Parameters<F>) => void;
export {};
