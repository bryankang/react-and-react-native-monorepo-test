import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './card';

storiesOf('components/Card', module)
    .add('basic', () => (
        <div style={{
            width: 400,
            height: 200,
        }}>
            <Card>
                <div style={{
                    width: '100%',
                    height: '100%',
                }}></div>
            </Card>
        </div>
    ), { info: { disable: false }});
