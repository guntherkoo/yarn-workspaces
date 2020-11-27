'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'react',
		'react-hooks'
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
	env: {
		es2020: true,
		browser: true,
		node: true
	},
	reportUnusedDisableDirectives: true,
	rules: {
		'comma-dangle': 'off',
		'for-direction': 'error',
		'getter-return': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty-character-class': 'error',
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		// Disabled because of https://github.com/eslint/eslint/issues/6028
		// 'no-extra-parens': [
		// 	'error',
		// 	'all',
		// 	{
		// 		conditionalAssign: false,
		// 		nestedBinaryExpressions: false,
		// 		ignoreJSX: 'multi-line'
		// 	}
		// ],
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-obj-calls': 'error',
		'no-promise-executor-return': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-setter-return': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'use-isnan': 'error',
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: false
			}
		],
		'no-unexpected-multiline': 'error',
		'accessor-pairs': [
			'error',
			{
				enforceForClassMembers: true
			}
		],
		'array-callback-return': [
			'error',
			{
				allowImplicit: true
			}
		],
		'block-scoped-var': 'error',
		complexity: 'warn',
		curly: 'error',
		'default-case': 'error',
		'default-param-last': 'error',
		'dot-location': [
			'error',
			'property'
		],
		eqeqeq: 'error',
		'grouped-accessor-pairs': [
			'error',
			'getBeforeSet'
		],
		'guard-for-in': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-constructor-return': 'error',
		'no-else-return': [
			'error',
			{
				allowElseIf: false
			}
		],
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'off',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-new': 'error',
		'no-octal-escape': 'error',
		'no-octal': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-return-assign': 'off',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': [
			'error',
			{
				props: true
			}
		],
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'off',
		'no-with': 'error',
		'prefer-promise-reject-errors': [
			'error',
			{
				allowEmptyReject: true
			}
		],
		'prefer-regex-literals': 'error',
		radix: 'error',

		// Disabled for now as it causes too much churn
		// TODO: Enable it in the future when I have time to deal with
		// the churn and the rule is stable and has an autofixer
		// 'require-unicode-regexp': 'error',

		'wrap-iife': [
			'error',
			'inside',
			{
				functionPrototypeMethods: true
			}
		],
		yoda: 'error',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': [
			'error',
			'event'
		],
		'no-shadow-restricted-names': 'error',
		'no-undef-init': 'error',
		'no-undef': [
			'error',
			{
				typeof: true
			}
		],
		'no-unused-vars': 'warn',
		'no-buffer-constructor': 'error',
		'no-restricted-imports': [
			'error',
			'domain',
			'freelist',
			'smalloc',
			'sys',
			'colors'
		],
		'array-bracket-newline': [
			'error',
			'consistent'
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'array-element-newline': [
			'error',
			'consistent'
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: false
			}
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'computed-property-spacing': [
			'error',
			'never',
			{
				enforceForClassMembers: true
			}
		],
		'eol-last': 'error',
		'func-call-spacing': [
			'error',
			'never'
		],
		'func-name-matching': [
			'error',
			{
				considerPropertyDescriptor: true
			}
		],
		'func-names': [
			'error',
			'never'
		],
		'function-call-argument-newline': [
			'error',
			'consistent'
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true
			}
		],
		'keyword-spacing': 'error',
		'linebreak-style': [
			'off',
			'unix'
		],
		'lines-between-class-members': [
			'error',
			'always',
			{
				// Workaround to allow class fields to not have lines between them.
				// TODO: Get ESLint to add an option to ignore class fields.
				exceptAfterSingleLine: true
			}
		],
		'max-depth': 'warn',
		'max-nested-callbacks': [
			'warn',
			4
		],
		'max-params': [
			'warn',
			{
				max: 4
			}
		],
		'max-statements-per-line': 'error',
		'new-cap': 'off',
		'new-parens': 'error',
		'no-array-constructor': 'error',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'off',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': 'off',
		'no-negated-condition': 'error',
		'no-new-object': 'error',
		'no-restricted-syntax': [
			'error',
			'WithStatement'
		],
		'no-whitespace-before-property': 'error',
		'no-trailing-spaces': 'off',
		'no-unneeded-ternary': 'off',
		'object-curly-spacing': 'off',
		'one-var': [
			'error',
			'never'
		],
		'one-var-declaration-per-line': 'error',
		'operator-assignment': [
			'error',
			'always'
		],
		'operator-linebreak': [
			'error',
			'after'
		],
		'padded-blocks': 'off',
		'padding-line-between-statements': 'off',
		'prefer-exponentiation-operator': 'error',
		'quote-props': 'off',
		quotes: [
			'error',
			'single'
		],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'semi-style': [
			'error',
			'last'
		],
		semi: [
			'error',
			'always'
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'template-tag-spacing': [
			'error',
			'never'
		],
		'unicode-bom': [
			'error',
			'never'
		],
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'constructor-super': 'error',
		'generator-star-spacing': [
			'error',
			'both'
		],
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-new-symbol': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': [
			'error',
			{
				enforceForClassMembers: true
			}
		],
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': [
			'error',
			'never'
		],
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': [
			'error',
			'both'
		],
		'no-var': 'error',
		'object-shorthand': [
			'error',
			'always'
		],
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: true
			}
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'all'
			}
		],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-object-spread': 'off',
		'prefer-destructuring': 'off',
		'no-useless-catch': 'error',

		'react/button-has-type': 'error',
		'react/jsx-child-element-spacing': 'error',
		'react/default-props-match-prop-types': 'error',

		'react/no-access-state-in-setstate': 'off',
		'react/no-array-index-key': 'off',
		'react/no-children-prop': 'error',
		'react/no-danger': 'off',
		'react/no-danger-with-children': 'error',
		'react/no-deprecated': 'error',
		'react/no-did-update-set-state': 'warn',
		'react/no-direct-mutation-state': 'error',
		'react/no-find-dom-node': 'error',
		'react/no-is-mounted': 'error',
		'react/no-redundant-should-component-update': 'error',
		'react/no-render-return-value': 'error',
		'react/no-typos': 'error',
		'react/no-string-refs': [
			'error',
			{
				noTemplateLiterals: true
			}
		],
		'react/no-this-in-sfc': 'error',
		'react/no-unescaped-entities': 'error',
		'react/no-unknown-property': 'error',
		'react/no-unsafe': 'error',
		'react/no-unused-prop-types': 'warn',
		'react/no-unused-state': 'error',
		'react/prefer-read-only-props': 'error',
		'react/prop-types': 'error',
		'react/react-in-jsx-scope': 'error',

		'react/self-closing-comp': 'warn',
		'react/state-in-constructor': 'warn',
		'react/static-property-placement': 'error',
		'react/style-prop-object': 'error',
		'react/void-dom-elements-no-children': 'error',
		'react/jsx-boolean-value': 'error',
		'react/jsx-closing-bracket-location': [
			'error',
			{
				nonEmpty: 'tag-aligned',
				selfClosing: false
			}
		],
		'react/jsx-closing-tag-location': 'error',

		'react/jsx-curly-spacing': [
			'error',
			'never'
		],
		'react/jsx-equals-spacing': [
			'error',
			'never'
		],
		'react/jsx-first-prop-new-line': 'error',
		'react/jsx-indent': [
			'error',
			'tab',
			{
				checkAttributes: true,
				indentLogicalExpressions: true
			}
		],
		'react/jsx-indent-props': [
			'error',
			'tab'
		],
		'react/jsx-key': [
			'error',
			{
				checkFragmentShorthand: true
			}
		],
		'react/jsx-max-props-per-line': [
			'error',
			{
				maximum: 3,
				when: 'multiline'
			}
		],
		'react/jsx-no-bind': 'off',
		'react/jsx-no-comment-textnodes': 'error',
		'react/jsx-no-duplicate-props': [
			'error',
			{
				ignoreCase: true
			}
		],
		'react/jsx-no-script-url': 'error',
		'react/jsx-no-target-blank': 'off',
		'react/jsx-no-undef': 'error',
		'react/jsx-no-useless-fragment': 'off',
		// Disabled for now as it produces too many errors
		// 'react/jsx-one-expression-per-line': ['error', {allow: 'single-child'}],
		'react/jsx-curly-brace-presence': [
			'error',
			'never'
		],
		'react/jsx-fragments': [
			'error',
			'syntax'
		],
		'react/jsx-pascal-case': 'error',
		'react/jsx-props-no-multi-spaces': 'error',

		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'ignore',
				logical: 'ignore',
				prop: 'ignore'
			}
		],

		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn'
	}
};