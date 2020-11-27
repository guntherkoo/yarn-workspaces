import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import Headline from '../headline';


describe('Headline Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		const content = render(<Headline text={test_text} />);

		expect(content).toBeTruthy();
	});

});
