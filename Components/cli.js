const React = require('react');
const importJsx = require('import-jsx');
const { render, Box, Text } = require('ink');
const { Dim } = importJsx('../Settings/colors');

const Section = ({ children }) => (
  <Box marginBottom={1} marginTop={1} flexDirection="column">
    {children}
  </Box>
);

const Caption = ({ children }) => (
  <Box flexDirection="column">
    <Text bold>{children}</Text>
    <Dim>{new Array(52).fill('-')}</Dim>
  </Box>
)

const Cli = (data) => (
  <React.Fragment>
    <Section>
      <Caption>Ratio</Caption>
      <Text>{data.contrast}</Text>
    </Section>

    <Section>
      <Caption>Grades</Caption>
      <Box flexDirection="row">
        <Box flexDirection="column" alignItems="center" marginRight={3}>
          <Text>{data.level.AALarge}</Text>
          <Text>AA Large</Text>
        </Box>

        <Box flexDirection="column" alignItems="center">
          <Text>{data.level.AAALarge}</Text>
          <Text>AAA Large</Text>
        </Box>
      </Box>
    </Section>

    <Section>
      <Caption>Colours</Caption>
    </Section>
  </React.Fragment>
);

module.exports = props => render(<Cli {...props} />)