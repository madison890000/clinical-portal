export const capitalize = (chars?: string) => {
    if (!chars) {
        return '';
    }
    const [first, ...rest] = chars.split('');
    return first.toUpperCase() + rest.join('');
};
