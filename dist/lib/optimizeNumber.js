function optimizeNumber(num) {
    if (num >= 1e12) {
        if (num >= 1e14) {
            return '99.99t';
        }
        return (num / 1e12).toFixed(2).replace(/\.00$/, '') + 't';
    }
    else if (num >= 1e9) {
        return (num / 1e9).toFixed(2).replace(/\.00$/, '') + 'b';
    }
    else if (num >= 1e6) {
        return (num / 1e6).toFixed(2).replace(/\.00$/, '') + 'm';
    }
    else if (num >= 1e3) {
        return (num / 1e3).toFixed(2).replace(/\.00$/, '') + 'k';
    }
    else {
        return num.toString();
    }
}
export default optimizeNumber;
//# sourceMappingURL=optimizeNumber.js.map