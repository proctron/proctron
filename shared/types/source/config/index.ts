interface CommandConfig {
	/**
	 * Commands run in packages list in the preDependencies
	 **/
	dependsOn?: string | string[];
	/**
	 * TODO: add jsdoc for this
	 **/
	output?: string | string[];
}

export type IConfig = {
	/**
	 * Name of the main process package
	 **/
	main: string;
	/**
	 * Name of the renderer process package
	 * It Can be multiple packages
	 **/
	renderer: string | string[];
	/**
	 * Commands Configuration
	 **/
	commands?: {
		[command: string]: CommandConfig;
	};
}