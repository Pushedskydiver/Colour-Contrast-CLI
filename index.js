#!/usr/bin/env node

const chroma = require('chroma-js');
const chalk = require('chalk');
const importJsx = require('import-jsx')
const { convertColour, isDark, getContrast, getLevel, isColour } = require('./utils');

const bgValue = process.argv[2];
const fgValue = process.argv[3];
const cli = importJsx('./Components/cli');

function printResults(bg, fg, contrast, level) {
  const background = chroma(bg).hex();
  const foreground = chroma(fg).hex();
  // const bgTextColor = contrast < 3 ? isDark(bg) ? '#ffffff' : '#000000' : fgHex;
  // const fgTextColor = contrast < 3 ? isDark(bg) ? '#ffffff' : '#000000' : bgHex;

  const data = { background, foreground, contrast, level };
  
  // console.log('Background', chalk.bgHex(bgHex).hex(bgTextColor)(` ${bgHex} `));
  // console.log('Foreground', chalk.bgHex(fgHex).hex(fgTextColor)(` ${fgHex} `));

  return cli(data);
}

function checkContrast(bg, fg) {
  const background = chroma(bg).rgb();
  const foreground = chroma(fg).rgb();
  const contrast = getContrast(background, foreground).toFixed(2);
  const level = getLevel(contrast);

  printResults(background, foreground, contrast, level);
}

if (isColour(bgValue) && isColour(fgValue)) {
  const background = convertColour(bgValue);
  const foreground = convertColour(fgValue);

  checkContrast(background, foreground);
} else {
  console.log(chalk.white.bgRed('Not valid colours'));
}