import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import Heading from './Heading';


describe('Heading Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		const content = render(<Heading text={test_text} />);

		expect(content).toBeTruthy();
	});

});
