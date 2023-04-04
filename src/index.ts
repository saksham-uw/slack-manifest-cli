#!/usr/bin/env ts-node

// Imports
import { Command } from "commander";
import figlet from "figlet";

// Utilities
import { refreshTokens, feature } from "./util";

// CLI
const program = new Command();

program
  .version("1.0.0")
  .description("CLI to manage Slack's manifest file")
  .option("-r, --refresh", "Refresh tokens")
  .option("-f, --feature", "Template for new features")
  .parse(process.argv);
const options = program.opts();

options.refresh ? refreshTokens() : true;
options.feature ? feature() : true;

if (!process.argv.slice(2).length) {
  console.log(figlet.textSync("Manifest Manager"));
  program.outputHelp();
}
