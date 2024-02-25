/// <reference types="vite/client" />

import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
	resolve: {
		conditions: ['development', 'browser'],
	},
});
