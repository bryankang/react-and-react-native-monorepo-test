import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { ExampleCard } from './example-card';

storiesOf('recipe/ExampleCard', module)
    .add('basic', () => (
        <ExampleCard
            confirmLabel={text('confirmLabel', 'confirm')}
            duration={number('number', 10235200)}
            durationLabel={text('durationLabel', 'duration')}
            tss={number('tss', 80)}
            tssLabel={text('tssLabel', 'tss')}
            onConfirm={action('onConfirm')}
        />
    ), { info: { disable: false }});
