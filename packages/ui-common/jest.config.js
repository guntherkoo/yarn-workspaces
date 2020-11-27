'use strict';

module.exports = {
	testEnvironment: 'jsdom',
	testMatch: ['<rootDir>/components/**/*.test.jsx'],
	transformIgnorePatterns: [
		'/node_modules/(?!@koo)',
    ],
	setupFilesAfterEnv: [
		'<rootDir>/jest.setup.js',
	],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	bail: true,
	displayName: 'ui-common',
};
