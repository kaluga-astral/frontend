#!/usr/bin/env node

const { hideBin } = require('yargs/helpers');
const yargs = require('yargs/yargs');

const { runTask } = require('./main');

const [, , task] = process.argv;

const { argv } = yargs(hideBin(process.argv));

runTask({ task, args: argv });
