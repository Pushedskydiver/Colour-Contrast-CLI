const React = require('react');
const { Box } = require('ink');

const Section = ({ children }) => (
  <Box flexDirection="column" marginTop={2}>
    {children}
  </Box>
);

exports.Section = Section;
