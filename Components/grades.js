const React = require('react');
const importJsx = require('import-jsx');
const { Box, Text } = require('ink');
const { Section } = importJsx('./section');
const { Caption } = importJsx('./caption');
const { Pass, Fail } = importJsx('../settings/settings.colors');

const Grade = ({ children }) => {
  if (children === 'Pass') {
    return <Pass> {children} </Pass>;
  }

  if (children === 'Fail') {
    return <Fail> {children} </Fail>;
  }
};

const Grades = ({ level }) => (
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
);

exports.Grades = Grades;
