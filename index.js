#!/usr/bin/env node

const chroma = require('chroma-js');
const importJsx = require('import-jsx')
const { convertColour, getContrast, getLevel, isColour } = require('./utils');

const bgValue = process.argv[2];
const fgValue = process.argv[3];
const cli = importJsx('./components/cli');

function printResults(background, foreground, contrast, level) {
  const data = { background, foreground, contrast, level };

  return cli(data);
}

function checkContrast(bg, fg) {
  const background = chroma(bg).hex();
  const foreground = chroma(fg).hex();
  const contrast = getContrast(background, foreground).toFixed(2);
  const level = getLevel(contrast);

  printResults(background, foreground, contrast, level);
}

if (isColour(bgValue) && isColour(fgValue)) {
  const background = convertColour(bgValue);
  const foreground = convertColour(fgValue);

  return checkContrast(background, foreground);
}

if (!isColour(bgValue) && isColour(fgValue)) {
  console.error('😱 Oopsy daisy. The first value entered is not a valid colour you silly billy.');
  process.exit(1);
}

if (isColour(bgValue) && !isColour(fgValue)) {
  console.error('😱 Oopsy daisy. The second value entered is not a valid colour you silly billy.');
  process.exit(1);
}

if (!isColour(bgValue) && !isColour(fgValue)) {
  console.error('😱 Oopsy daisy. The values entered are not valid colours you silly billy.');
  process.exit(1);
}