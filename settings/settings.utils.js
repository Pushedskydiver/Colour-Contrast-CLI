const chroma = require('chroma-js');

const getLevel = contrast => {
  if (contrast > 7) {
    return { AALarge: 'Pass', AA: 'Pass', AAALarge: 'Pass', AAA: 'Pass' };
  } else if (contrast > 4.5) {
    return { AALarge: 'Pass', AA: 'Pass', AAALarge: 'Pass', AAA: 'Fail' };
  } else if (contrast > 3) {
    return { AALarge: 'Pass', AA: 'Fail', AAALarge: 'Fail', AAA: 'Fail' };
  }

  return { AALarge: 'Fail', AA: 'Fail', AAALarge: 'Fail', AAA: 'Fail' };
};

const isDark = hsl => chroma.hsl(hsl).get('lab.l') < 60;

const toRgb = value => chroma(value).rgb();

const toHex = value => chroma(value).hex();

const toHsl = value => chroma(value).hsl();

const getContrast = (a, b) => chroma.contrast(a, b);

const isColour = value => {
  const array = value.split(',');
  const result = array.map(element => parseFloat(element));

  if (array.length > 1) {
    const r = result[0];
    const g = result[1];
    const b = result[2];

    return chroma.valid([r, g, b]);
  }

  return chroma.valid(value);
};

const convertColour = colour => {
  const array = colour.split(',').map(element => parseFloat(element));
  let result = colour;

  if (array.length === 3) {
    result = [array[0], array[1], array[2]];
  }

  if (array.length === 4) {
    result = chroma.hsl(array[0], array[1], array[2]);
  }

  return result;
};

module.exports = {
  convertColour,
  getContrast,
  getLevel,
  isColour,
  isDark,
  toRgb,
  toHex,
  toHsl
};
