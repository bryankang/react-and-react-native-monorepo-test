import { colorPalette } from '../common/color-palette';

const emphasisOnLight = {
    lowest: 0.12,
    low: .3,
    medium: .54,
    high: .76,
    highest: .87,
}

const emphasisOnDark = {
    lowest: 0.12,
    low: .24,
    medium: .5,
    high: .8,
    highest: 1,
}

export const colors = {
    background1: {
        backgroundColor: colorPalette.red2,
        color: colorPalette.white,
        emphasis: emphasisOnDark,
    },
    background2: {
        backgroundColor: colorPalette.red2,
        color: colorPalette.white,
        emphasis: emphasisOnDark,
    },
    background3: {
        backgroundColor: colorPalette.red2,
        color: colorPalette.white,
        emphasis: emphasisOnDark,
    },



    // primary: colorPalette.red2,
    // onPrimary: colorPalette.white,
    // onPrimaryDarkText: colorPalette.white,
    // onPrimaryBaseText: colorPalette.white,
    // onPrimaryLightText: colorPalette.white,
    // onPrimaryLightestText: colorPalette.white,
    // error: colorPalette.error,
    // onError: colorPalette.white,
    // onErrorDarkText: colorPalette.white,
    // onErrorBaseText: colorPalette.white,
    // onErrorLightText: colorPalette.white,
    // onErrorLightestText: colorPalette.white,
    // background: colorPalette.grey2,
    // onBackground: colorPalette.white,
    // onBackgroundDarkText: colorPalette.grey11,
    // onBackgroundBaseText: colorPalette.white,
    // onBackgroundLightText: colorPalette.grey9,
    // onBackgroundLightestText: colorPalette.grey7,
    // surface: colorPalette.grey3,
    // onSurface: colorPalette.grey11,
    // onSurfaceDarkText: colorPalette.grey11,
    // onSurfaceBaseText: colorPalette.white,
    // onSurfaceLightText: colorPalette.grey9,
    // onSurfaceLightestText: colorPalette.grey7,
};
