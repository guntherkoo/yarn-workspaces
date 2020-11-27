import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import _styles from './Paragraph.scss';

const styles = classnames.bind(_styles);

const Paragraph = props => {

	const {
		text,
	} = props;

	return (
		<h1 className={styles('text')}>
			{text}
		</h1>
	);
};

Paragraph.propTypes = {
	text: PropTypes.string,
};

export default Paragraph;
