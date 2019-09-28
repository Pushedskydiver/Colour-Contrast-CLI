const React = require('react');
const importJsx = require('import-jsx');
const { render, Box, Color, Text } = require('ink');
const { isDark, toHsl, toRgb } = require('../utils');
const { Dim, Pass, Fail } = importJsx('../settings/colors');

const Container = ({ children }) => (
  <Box flexDirection="column" marginBottom={2}>
    {children}
  </Box>
);

const Section = ({ children }) => (
  <Box flexDirection="column" marginTop={2}>
    {children}
  </Box>
);

const Caption = ({ children }) => (
  <Box flexDirection="column">
    <Text bold>{children}</Text>
    <Dim>{new Array(52).fill('-')}</Dim>
  </Box>
);

const Grade = ({ children }) => {
  if (children === 'Pass') {
    return <Pass> {children} </Pass>
  }

  if (children === 'Fail') {
    return <Fail> {children} </Fail>
  }
};

const Hex = ({ foreground, contrast, children }) => {
  const hsl = toHsl(children);
  const color = contrast < 3 ? isDark(hsl) ? '#ffffff' : '#000000' : foreground;

  return <Box marginRight={3}><Color hex={color} bgHex={children}> {children} </Color></Box>
}

const Rgb = ({ foreground, contrast, children }) => {
  const hsl = toHsl(children);
  const rgb = toRgb(children);
  const color = contrast < 3 ? isDark(hsl) ? '#ffffff' : '#000000' : foreground;

  return <Box marginRight={3}><Color hex={color} bgHex={children}> {rgb.join(',')} </Color></Box>
}

const Hsl = ({ foreground, contrast, children }) => {
  const hsl = toHsl(children).map(val => val % 1 != 0 ? val.toFixed(2) : val);
  const color = contrast < 3 ? isDark(hsl) ? '#ffffff' : '#000000' : foreground;

  return <Box><Color hex={color} bgHex={children}> {hsl.join(',')} </Color></Box>
}

const Cli = ({ contrast, level, background, foreground }) => {
  const bg = background.split('#')[1];
  const fg = foreground.split('#')[1];

  return (
    <React.Fragment>
      <Container>
        <Section>
          <Caption>Ratio</Caption>
          <Text>{contrast}</Text>
        </Section>

        <Section>
          <Caption>Grades</Caption>
          <Box>
            <Box flexDirection="column" justifyContent="center" alignItems="center" marginRight={3}>
              <Grade>{level.AALarge}</Grade>
              <Text>AA Large</Text>
              <Text>Ratio: 3+</Text>
            </Box>

            <Box flexDirection="column" justifyContent="center" alignItems="center" marginRight={3}>
              <Grade>{level.AAALarge}</Grade>
              <Text>AAA Large</Text>
              <Text>Ratio: 4.5+</Text>
            </Box>

            <Box flexDirection="column" justifyContent="center" alignItems="center" marginRight={3}>
              <Grade>{level.AA}</Grade>
              <Text>AA Normal</Text>
              <Text>Ratio: 4.5+</Text>
            </Box>

            <Box flexDirection="column" justifyContent="center" alignItems="center">
              <Grade>{level.AAA}</Grade>
              <Text>AAA Normal</Text>
              <Text>Ratio: 7+</Text>
            </Box>
          </Box>
        </Section>

        <Section>
          <Caption>Colours</Caption>
          <Box flexDirection="column">
            <Box marginBottom={1}>
              <Box marginRight={1}>Background:</Box>
              <Hex foreground={foreground} contrast={contrast}>{background}</Hex>
              <Rgb foreground={foreground} contrast={contrast}>{background}</Rgb>
              <Hsl foreground={foreground} contrast={contrast}>{background}</Hsl>
            </Box>

            <Box>
              <Box marginRight={1}>Foreground:</Box>
              <Hex foreground={background} contrast={contrast}>{foreground}</Hex>
              <Rgb foreground={background} contrast={contrast}>{foreground}</Rgb>
              <Hsl foreground={background} contrast={contrast}>{foreground}</Hsl>
            </Box>
          </Box>
        </Section>

        <Section>
          <Caption>Share Link</Caption>
          <Text>https://colourcontrast.cc/{bg}/{fg}</Text>
        </Section>
      </Container>
    </React.Fragment>
  )
};

module.exports = props => render(<Cli {...props} />);
