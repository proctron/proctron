import chalk, {ForegroundColorName, ModifierName} from "chalk";

interface FormatOptions {
	color?: ForegroundColorName;
	modify?: ModifierName;
	//
	prefix?: string;
	suffix?: string;
	//
	trim?: boolean;
}

const format = (text: string, options?: FormatOptions) => {
	const message = [
		chalk[options?.modify || "reset"](chalk[options?.color || "white"](text)),
	];
	
	if (options?.prefix) {
		message.unshift(
			chalk["reset"](chalk["white"](options.prefix)),
		);
	}
	
	if (options?.suffix) {
		message.push(
			chalk["reset"](chalk["white"](options.suffix)),
		);
	}
	
	return message.join(options?.trim ? "" : " ");
};

interface LogOptions {
	lineBefore?: boolean;
	lineAfter?: boolean;
}

export const createLogger = (name: string, color: number) => {
	const colors: ForegroundColorName[] = [
		"blue",
		"magenta",
		"cyan",
		"redBright",
		"greenBright",
		"yellowBright",
		"blueBright",
		"magentaBright",
		"cyanBright",
	];
	
	while (color > colors.length) {
		color -= colors.length;
	}
	
	return {
		info: (log: string, options?: LogOptions) => {
			const logs = [
				log
			];
			
			logs.unshift(
				format("INFO", {
					color: "green",
					prefix: "[",
					suffix: "]",
					trim: true,
				}),
				format(name.toUpperCase(), {
					color: colors[color],
					modify: "bold",
				}),
				format(":", {
					color: "green",
				}),
			);
			
			if (options?.lineAfter) {
				logs.push("\n");
			}
			
			if (options?.lineBefore) {
				logs.unshift("\n");
			}
			
			console.log(...logs);
		},
		error: (error: unknown) => {
			const log = [];
			
			log.unshift(
				format("Proctron", {
					color: "grey",
					modify: "bold",
				}),
				format("-", {
					color: "red",
				}),
				format("ERROR", {
					color: "red",
					prefix: "[",
					suffix: "]",
					trim: true,
				}),
				format(":", {
					color: "red",
				}),
			);
			
			return console.error(...log, error);
		},
	};
};

const logger = {
	info: (log: string, options?: LogOptions) => {
		const logs = [
			log,
		];
		
		logs.unshift(
			format("Proctron", {
				color: "grey",
				modify: "bold",
			}),
			format("-", {
				color: "green",
			}),
			format("INFO", {
				color: "green",
				prefix: "[",
				suffix: "]",
				trim: true,
			}),
			format(":", {
				color: "green",
			}),
		);
		
		if (options?.lineAfter) {
			logs.push("\n");
		}
		
		if (options?.lineBefore) {
			logs.unshift("\n");
		}
		
		return console.log(...logs);
	},
	error: (error: unknown) => {
		const log = [];
		
		log.unshift(
			format("Proctron", {
				color: "grey",
				modify: "bold",
			}),
			format("-", {
				color: "red",
			}),
			format("ERROR", {
				color: "red",
				prefix: "[",
				suffix: "]",
				trim: true,
			}),
			format(":", {
				color: "red",
			}),
		);
		
		return console.error(...log, error);
	},
};

export default logger;