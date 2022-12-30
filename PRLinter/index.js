#!/usr/bin/env node

const { hideBin } = require('yargs/helpers');
const yargs = require('yargs/yargs');

const { lintPRTitle } = require('./lintPRTitle');

const { argv } = yargs(hideBin(process.argv));

lintPRTitle({ title: argv.title });
