import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import Text from '../text';


describe('Text Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		const content = render(<Text text={test_text} />);

		expect(content).toBeTruthy();
	});

});
