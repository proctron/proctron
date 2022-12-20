import {IBuild, IConfig} from "@shared/types";

const withConfig = (config: IConfig): IConfig => {
	const defaultConfig: Partial<IConfig> = {};
	
	return {
		...config,
		...defaultConfig,
	};
};

const withBuild = (config: IBuild) => {
	const defaultConfig: Partial<IBuild> = {};
	
	return {
		...config,
		...defaultConfig,
	};
};

export {
	IConfig,
	withConfig,
	IBuild,
	withBuild,
};