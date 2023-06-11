/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		// eslint recommended
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		//typescript
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict',
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: '2021',
		sourceType: 'module',
		jsx: true,
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint', 'jsx-a11y', 'only-warn'],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			plugins: ['astro'],
			extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-strict'],
			rules: {},
		},
		{
			files: ['*.tsx'],
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			plugins: ['solid'],
			extends: ['plugin:solid/typescript', 'plugin:jsx-a11y/strict'],
			rules: {
				'solid/self-closing-comp': [
					'warn',
					{
						component: 'all', // "all" | "none"
						html: 'void', // "all" | "void" | "none"
					},
				],
			},
		},
	],
	ignorePatterns: ['dist/**/*', '.eslintrc.*'],
};
