import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Paragraph from './Paragraph';


storiesOf('ui-common/typography/paragraph', module)
	.addDecorator(withKnobs({
		escapeHTML: false,
	}))
	.addDecorator(centered)
	.add('default', () => {
		return (
			<Paragraph
				text={text('text', 'Hello world from Paragraph!')}
			/>
		);
	});
