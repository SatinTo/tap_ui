export function debounce(func, wait) {
    let timeout = null;
    return function (...args) {
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
//# sourceMappingURL=debounce.js.map