#!/usr/bin/env node

const chroma = require('chroma-js');
const importJsx = require('import-jsx')
const meow = require('meow');
const updateNotifier = require('update-notifier');
const { convertColour, getContrast, getLevel, isColour } = require('./utils');

const bgValue = process.argv[2];
const fgValue = process.argv[3];
const contrastCli = importJsx('./components/cli');

const cli = meow(
  `
	Usage
    $ contrast black white
    
	Options
    --ratio, -r Show only contrast ratio
    --grades, -g Show only WCAG grades
    
	Examples
    $ contrast black white
    $ contrast '#000000' '#ffffff'
    $ contrast  0,0,0 255,255,255
    
`,
  {
    flags: {
      ratio: {
        type: 'boolean',
        default: null,
        alias: 'f'
      },
      grades: {
        type: 'boolean',
        default: null,
        alias: 'g'
      },
      version: {
        type: 'boolean',
        default: null,
        alias: 'v'
      }
    }
  }
);

const [input] = cli.input;

updateNotifier({
  pkg: cli.pkg,
  shouldNotifyInNpmScript: true,
  isGlobal: cli.pkg.preferGlobal
}).notify()

function printResults(background, foreground, contrast, level) {
  const flags = cli.flags;
  const data = { background, foreground, contrast, level, flags };

  return contrastCli(data);
}

function checkContrast(bg, fg) {
  const background = chroma(bg).hex();
  const foreground = chroma(fg).hex();
  const contrast = getContrast(background, foreground).toFixed(2);
  const level = getLevel(contrast);

  printResults(background, foreground, contrast, level);
}

if (!input && process.stdin.isTTY) {
  cli.showHelp();
}

if (cli.flags.v) {
  cli.showVersion();
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
