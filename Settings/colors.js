const React = require('react')
const { Color } = require('ink')

const Pass = ({ children }) => <Color hex="#000" bgHex="#9eeb7a" bold>{children}</Color>
const Fail = ({ children }) => <Color hex="#000" bgHex="#ff5f60" bold>{children}</Color>
const Dim = ({ children }) => <Color dim>{children}</Color>

exports.Pass = Pass;
exports.Fail = Fail;
exports.Dim = Dim;