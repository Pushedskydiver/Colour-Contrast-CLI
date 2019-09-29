const React = require('react');
const importJsx = require('import-jsx');
const { Text } = require('ink');
const { Section } = importJsx('./section');
const { Caption } = importJsx('./caption');

const Ratio = ({ contrast }) => (
  <Section>
    <Caption>Ratio</Caption>
    <Text>{contrast}</Text>
  </Section>
);

exports.Ratio = Ratio;
