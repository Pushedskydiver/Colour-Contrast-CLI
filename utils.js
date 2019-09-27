const chroma = require('chroma-js');

const isHex = hex => {
  try {
    const color = chroma(hex);
    return !!color;
  } catch (err) {
    return false;
  }
};

const isRgb = rgb => {
  try {
    const color = chroma(rgb).rgb();
    
    return !!color;
  } catch (e) {
    return false;
  }
};

const isHsl = hsl => {
  try {
    const color = chroma.hsl(hsl);
    return !!color;
  } catch (e) {
    return false;
  }
};

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

const hexToHsl = hex => (isHex(hex) ? chroma(hex).hsl() : null);

const hslToHex = hsl => (isHsl(hsl) ? chroma.hsl(hsl).hex() : '#808080');

const hexToRgb = hex => (isHex(hex) ? chroma(hex).rgb() : null);

const rgbToHex = rgb => (isRgb(rgb) ? chroma.rgb(rgb).hex() : '#808080');

const rgbToHsl = rgb => chroma(rgb).hsl();

const getContrast = (a, b) => chroma.contrast(a, b);

const isColour = value => {
  const array = value.split(',');
  const result = array.map(element => parseFloat(element));

  if (array.length > 1) {
    const r = result[0];
    const g = result[1];
    const b = result[2];

    return chroma.valid(r, g, b);
  }

  return chroma.valid(value);
};

const convertColour = colour => {
  const array = colour.split(',').map(element => parseFloat(element));
  let result = colour;

  if (array.length > 1) {
    result = [array[0], array[1], array[2]];
  }

  return result;
}

module.exports = {
  convertColour,
  getContrast,
  getLevel,
  isColour,
  isDark,
  isHex,
  isHsl,
  isRgb,
  hslToHex,
  hexToHsl,
  hexToRgb,
  rgbToHex,
  rgbToHsl
}
