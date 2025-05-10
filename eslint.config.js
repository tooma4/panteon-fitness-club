import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	{
		files: ['./src/**/*.{js,jsx,ts,tsx,json}'],
		extends: compat.extends('prettier'),

		plugins: {
			react,
			'@typescript-eslint': typescriptEslint,
			prettier,
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2020,
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			react: {
				version: 'detect',
			},
		},

		rules: {
			'prettier/prettier': [
				'warn',
				{
					usePrettierrc: true,
				},
			],

			'react/react-in-jsx-scope': 'off',
			'comma-dangle': 'off',

			'use-isnan': [
				'error',
				{
					enforceForSwitchCase: true,
				},
			],

			'react/void-dom-elements-no-children': 'warn',
			'react/no-unsafe': 'warn',
			'react/no-unused-state': 'warn',
			'react/prefer-stateless-function': 'warn',
			'react/self-closing-comp': 'warn',
			'react/no-will-update-set-state': 'warn',
			'react/no-this-in-sfc': 'warn',
			'react/no-string-refs': 'warn',
			'react/no-redundant-should-component-update': 'warn',
			'react/jsx-boolean-value': ['warn', 'never'],
			'react/jsx-key': 'warn',

			'react/jsx-max-props-per-line': [
				'warn',
				{
					maximum: 7,
				},
			],

			'react/jsx-max-depth': [
				'warn',
				{
					max: 8,
				},
			],

			'arrow-body-style': ['warn', 'as-needed'],
			'dot-notation': 'warn',
			'jsx-quotes': ['warn', 'prefer-single'],
			'valid-typeof': 'warn',

			'@typescript-eslint/member-ordering': [
				'warn',
				{
					default: [
						'private-static-field',
						'protected-static-field',
						'public-static-field',
						'private-static-method',
						'protected-static-method',
						'public-static-method',
						'private-constructor',
						'protected-constructor',
						'public-constructor',
						'private-instance-field',
						'protected-instance-field',
						'public-instance-field',
						'private-instance-method',
						'protected-instance-method',
						'public-instance-method',
					],
				},
			],
		},
	},
]);
