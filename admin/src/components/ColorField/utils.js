export const rgbaToHex = (r, g, b, a = 1) => {
    return (
        '#' +
        (r | (1 << 8)).toString(16).slice(1) +
        (g | (1 << 8)).toString(16).slice(1) +
        (b | (1 << 8)).toString(16).slice(1) +
        ((a * 255) | (1 << 8)).toString(16).slice(1)
    );
};
