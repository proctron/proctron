#!/usr/bin/env node

import {Command} from "commander";

import logger from "~bin/tools/logger";

import run from "~bin/commands/run";

const commander = new Command();

commander.addCommand(run);

commander.parse();

process.on("unhandledRejection", (error) => {
	logger.error(error);
	process.exit(1);
});

process.on("uncaughtException", (error) => {
	logger.error(error);
	process.exit(1);
});