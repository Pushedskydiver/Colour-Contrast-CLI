
const React = require('react');
const importJsx = require('import-jsx');
const { Text } = require('ink');
const { Table, Th, RowSpan, Tr } = importJsx('./table');
const { Caption } = importJsx('./caption');
const { isDark, toHsl, toRgb } = require('../settings/settings.utils');

const Hex = ({ foreground, contrast, children }) => {
  const hsl = toHsl(children);
  const color = contrast < 3 ? isDark(hsl) ? '#ffffff' : '#000000' : foreground;

  return <Text color={color} bgHex={children}> {children} </Text>;
};

const Rgb = ({ foreground, contrast, children }) => {
  const hsl = toHsl(children);
  const rgb = toRgb(children);
  const color = contrast < 3 ? isDark(hsl) ? '#ffffff' : '#000000' : foreground;

  return <Text color={color} backgroundColor={children}> {rgb.join(',')} </Text>;
};

const Hsl = ({ foreground, contrast, children }) => {
  const hsl = toHsl(children).map(val => val % 1 !== 0 ? val.toFixed(2) : val);
  const color = contrast < 3 ? isDark(toHsl(children)) ? '#ffffff' : '#000000' : foreground;

  const h = Math.round(hsl[0]).toFixed(0);
  const s = Math.round(hsl[1] * 100);
  const l = Math.round(hsl[2] * 100);

  return <Text color={color} backgroundColor={children}> {`${h},${s},${l}`} </Text>;
};

const Colours = ({ contrast, background, foreground }) => (
  <Table>
    <Caption>Colours</Caption>

    <Tr>
      <React.Fragment />
      <Th>HEX</Th>
      <Th>RGB</Th>
      <Th>HSL</Th>
    </Tr>

    <Tr marginTop={1}>
      <RowSpan>Background</RowSpan>
      <Hex foreground={foreground} contrast={contrast}>{background}</Hex>
      <Rgb foreground={foreground} contrast={contrast}>{background}</Rgb>
      <Hsl foreground={foreground} contrast={contrast}>{background}</Hsl>
    </Tr>

    <Tr marginTop={1}>
      <RowSpan>Foreground</RowSpan>
      <Hex foreground={background} contrast={contrast}>{foreground}</Hex>
      <Rgb foreground={background} contrast={contrast}>{foreground}</Rgb>
      <Hsl foreground={background} contrast={contrast}>{foreground}</Hsl>
    </Tr>
  </Table>
);

exports.Colours = Colours;

