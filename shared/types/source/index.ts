export interface Package {
	name: string;
	version: string;
	main: string;
	dependencies: Record<string, string>;
	devDependencies: Record<string, string>;
	preDependencies: string[];
	scripts: Record<string, string>;
	workspaces: string[] | {
		packages: string[];
	};
	type: "module" | "commonjs";
}

export * from "./build";
export * from "./config";