import {createCommand} from "commander";

const run = createCommand("run");

run.description("Run project commands");

run.argument("<command>", "Command to run");
run.option("-p --parallel", "Run commands in parallel");

run.action(async (command, options) => {
	console.log(command, options);
});

export default run;