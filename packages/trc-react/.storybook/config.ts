import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from "@storybook/addon-info";
import { withRoot } from './with-root';

const req = require.context('../src/', true, /\.stories\.tsx$/);

addParameters({
    options: {
        themeTitle: "TrainerRoad Components (React)",
        panelPosition: "right",
    },
    info: {
        disable: true,
        source: false,
    },
});

function loadStories(): void {
    addDecorator(withKnobs);
    addDecorator(withInfo);
    addDecorator(withRoot);
    req.keys().forEach(req);
}

configure(loadStories, module);

// if (module.hot) {
//     module.hot.accept(() => configure(loadStories, module))
// }
