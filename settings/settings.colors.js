const React = require('react');
const { Text } = require('ink');

const Pass = ({ children }) => <Text color="#000" backgroundColor="#9eeb7a" bold>{children}</Text>;
const Fail = ({ children }) => <Text color="#000" backgroundColor="#ff5f60" bold>{children}</Text>;
const Dim = ({ children }) => <Text dim>{children}</Text>;

exports.Pass = Pass;
exports.Fail = Fail;
exports.Dim = Dim;
