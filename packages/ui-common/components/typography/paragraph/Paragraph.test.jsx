import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react';

import Paragraph from './Paragraph';


describe('Paragraph Tests', () => {

	const test_text = 'Test Text';

	it('renders the test text', () => {
		render(<Paragraph text={test_text} />);

		expect(screen.getByText(test_text)).toHaveTextContent(test_text);
	});

	it('should not be empty', () => {
		render(<Paragraph text={test_text} />);

		expect(screen.getByText(test_text)).not.toBeEmpty();
	});

});
