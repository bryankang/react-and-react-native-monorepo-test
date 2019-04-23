import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { Text } from './text';

storiesOf('components/Text', module)
    .add('basic', () => {
        const tag = text("tag", "p") as React.ElementType;
        const category = select("category", ["headline1", "headline2", "headline3", "headline4", "headline5", "headline6", "subtitle1", "subtitle2", "body1", "body2", "button", "caption1", "caption2", "overline"], "body1")!
        // const on = select("on", ["light", "dark"], "light");
        // const emphasis = select("emphasis", ["lowest", "low", "medium", "high"], "medium");
        const children = text("children", "Text");

        return (
            <Text
                tag={tag}
                category={category}
                // on={on}
                // emphasis={emphasis}
            >
                {children}
            </Text>
        )
    }, { info: { disable: false }});
