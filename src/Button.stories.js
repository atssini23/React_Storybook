import React from 'react';

import {storiesOf} from '@storybook/react';
import Button from  './Button'; {/* the other option is { Button } n deleting the export */}

storiesOf('Button', module).add('with background', () => (
    <Button bg="palegoldenrod">Hello World</Button>
)).add('with background 2', () => (
    <Button bg="green">Hello World 2</Button>
))