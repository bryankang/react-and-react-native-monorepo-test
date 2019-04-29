import { injectGlobal } from 'emotion';

injectGlobal`
    // Thin - 100
    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-thin.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-thin-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-thin-webfont.woff')}) format('woff');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-thinit.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-thinit-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-thinit-webfont.woff')}) format('woff');
        font-weight: 100;
        font-style: italic;
    }


    // Medium - 200
    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-regular.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-regular-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-regular-webfont.woff')}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-regularit.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-regularit-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-regularit-webfont.woff')}) format('woff');
        font-weight: normal;
        font-style: italic;
    }

    // Light - 300
    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-light.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-light-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-light-webfont.woff')}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-lightit.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-lightit-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-lightit-webfont.woff')}) format('woff');
        font-weight: 300;
        font-style: italic;
    }


    // Semibold - 600
    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-semibold.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-semibold-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-semibold-webfont.woff')}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-semiboldit.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-semiboldit-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-semiboldit-webfont.woff')}) format('woff');
        font-weight: 600;
        font-style: italic;
    }


    // Bold - 700
    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-bold.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-bold-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-bold-webfont.woff')}) format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-boldit.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-boldit-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-boldit-webfont.woff')}) format('woff');
        font-weight: bold;
        font-style: italic;
    }


    // Extrabold - 800
    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-extrabold.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-extrabold-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-extrabold-webfont.woff')}) format('woff');
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-extraboldit.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-extraboldit-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-extraboldit-webfont.woff')}) format('woff');
        font-weight: 800;
        font-style: italic;
    }


    // Black - 900
    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-black.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-black-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-black-webfont.woff')}) format('woff');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'proxima-nova';
        src: url(#{require('@trainerroad/trc-core/dist/proximanova-blackit.otf')}) format('opentype'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-blackit-webfont.woff2')}) format('woff2'),
            url(#{require('@trainerroad/trc-core/dist/proximanova-blackit-webfont.woff')}) format('woff');
        font-weight: 900;
        font-style: italic;
    }

`
