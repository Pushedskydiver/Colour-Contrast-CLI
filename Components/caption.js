const React = require('react');
const importJsx = require('import-jsx');
const { Box, Text } = require('ink');
const { Dim } = importJsx('../settings/settings.colors');

const Caption = ({ children }) => (
  <Box flexDirection="column">
    <Text bold>{children}</Text>
    <Dim>{new Array(55).fill('-')}</Dim>
  </Box>
);

exports.Caption = Caption;
