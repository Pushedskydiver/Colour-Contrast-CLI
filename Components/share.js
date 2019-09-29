const React = require('react');
const importJsx = require('import-jsx');
const { Text } = require('ink');
const { Section } = importJsx('./section');
const { Caption } = importJsx('./caption');

const Share = ({ background, foreground }) => {
  const bg = background.split('#')[1];
  const fg = foreground.split('#')[1];;

  return (
    <Section>
      <Caption>Share Link</Caption>
      <Text>https://colourcontrast.cc/{bg}/{fg}</Text>
    </Section>
  );
};

exports.Share = Share;
