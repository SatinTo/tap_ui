type AnyFunction = (...args: any[]) => any;

export function debounce<F extends AnyFunction>(func: F, wait: number): (...args: Parameters<F>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    
    return function(this: ThisParameterType<F>, ...args: Parameters<F>): void {
        const context = this;
        
        const later = () => {
            timeout = null;
            func.apply(context, args);
        };
        
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        
        timeout = setTimeout(later, wait);
    };
}