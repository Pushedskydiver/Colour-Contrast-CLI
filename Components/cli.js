const React = require('react');
const importJsx = require('import-jsx');
const { render, Box, Color, Text } = require('ink');
const { isDark, rgbToHsl } = require('../utils');
const { Dim, Pass, Fail } = importJsx('../Settings/colors');

const Section = ({ children }) => (
  <Box marginBottom={1} marginTop={1} flexDirection="column">
    {children}
  </Box>
);

const Caption = ({ children }) => (
  <Box flexDirection="column" marginBottom={1}>
    <Text bold>{children}</Text>
    <Dim>{new Array(52).fill('-')}</Dim>
  </Box>
);

const Grade = ({ children }) => {
  if (children === 'Pass') {
    return <Pass>{children}</Pass>
  }

  if (children === 'Fail') {
    return <Fail>{children}</Fail>
  }
};

const Colour = ({ foreground, contrast, children }) => {
  const hsl = rgbToHsl(children);
  const color = contrast < 3 ? isDark(hsl) ? '#ffffff' : '#000000' : foreground;

  return <Color hex={color} bgHex={children}>{children}</Color>
}

const Cli = ({ contrast, level, background, foreground }) => {
  const bg = background.split('#')[1];
  const fg = foreground.split('#')[1];

  return (
    <React.Fragment>
      <Section>
        <Caption>Ratio</Caption>
        <Text>{contrast}</Text>
      </Section>

      <Section>
        <Caption>Grades</Caption>
        <Box flexDirection="row">
          <Box flexDirection="column" alignItems="center" marginRight={3}>
            <Grade>{level.AALarge}</Grade>
            <Text>AA Large</Text>
          </Box>

          <Box flexDirection="column" alignItems="center" marginRight={3}>
            <Grade>{level.AAALarge}</Grade>
            <Text>AAA Large</Text>
          </Box>

          <Box flexDirection="column" alignItems="center" marginRight={3}>
            <Grade>{level.AA}</Grade>
            <Text>AA Normal</Text>
          </Box>

          <Box flexDirection="column" alignItems="center">
            <Grade>{level.AAA}</Grade>
            <Text>AAA Normal</Text>
          </Box>
        </Box>
      </Section>

      <Section>
        <Caption>Colours</Caption>
        <Box flexDirection="column">
          <Box marginBottom={1}>
            <Box marginRight={1}>Background:</Box>
            <Colour foreground={foreground} contrast={contrast}>{background}</Colour>
          </Box>

          <Box>
            <Box marginRight={1}>Foreground:</Box>
            <Colour foreground={background} contrast={contrast}>{foreground}</Colour>
          </Box>
        </Box>
      </Section>

      <Section>
        <Caption>Share Link</Caption>
        <Text>https://colourcontrast.cc/{bg}/{fg}</Text>
      </Section>
    </React.Fragment>
  )
};

module.exports = props => render(<Cli {...props} />);
