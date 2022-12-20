import {defineConfig} from "rollup";

import tsConfigPaths from "rollup-plugin-tsconfig-paths";

import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";

import {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import {preserveShebangs} from "rollup-plugin-preserve-shebangs";

export default [
	defineConfig({
		plugins: [
			preserveShebangs(),
			tsConfigPaths(),
			typescript({
				sourceMap: true,
			}),
			nodeResolve({
				resolveOnly: [
					"module-name", // TODO
				],
			}),
			commonjs(),
		],
		input: "lib/bin/index.ts",
		output: [
			{
				file: "dist/bin.js",
				format: "cjs",
				sourcemap: true,
			},
		],
	}),
	defineConfig({
		plugins: [
			typescript({
				sourceMap: true,
			}),
		],
		input: "lib/source/index.ts",
		output: [
			{
				file: "dist/main.js",
				format: "cjs",
				sourcemap: true,
			}, {
				file: "dist/main.mjs",
				format: "es",
				sourcemap: true,
			}
		],
	}),
	defineConfig({
		plugins: [
			dts({
				respectExternal: true,
			}),
		],
		input: "lib/source/index.ts",
		output: [
			{
				file: "dist/main.d.ts",
				format: "es",
			}
		],
	}),
];