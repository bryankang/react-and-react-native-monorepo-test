import React, { FC, useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { boolean, select, text } from '@storybook/addon-knobs';
import { Button } from './button';

storiesOf('components/Button', module)
    .add('basic', () => (
        <Button
            size={select("size", ["small", "medium", "large"], "medium") as any}
            intent={select("intent", ["none", "primary", "success", "info", "warning", "error"], "none") as any}
            variant={select("variant", ["contained", "outlined"], "contained") as any}
        >
            {text("label", "Button")}
        </Button>
    ), { info: { disable: false }});
