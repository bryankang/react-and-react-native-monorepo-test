import chroma from 'chroma-js';

function isDark(color: string): boolean {
    const lum = chroma(color).luminance();
    return lum < .5;
}

export const statusBarCore = {
    isDark,
};
