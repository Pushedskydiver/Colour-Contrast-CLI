const React = require('react')
const { Color } = require('ink')

const Pass = ({ children }) => <Color hex="#000" bgHex="#9eeb7a" bold>{children}</Color>
const Fail = ({ children }) => <Color hex="#000" bgHex="#ff5f60" bold>{children}</Color>
const Black = ({ children }) => <Color hex="#000000">{children}</Color>
const White = ({ children }) => <Color hex="#ffffff">{children}</Color>
const Dim = ({ children }) => <Color dim>{children}</Color>
const Bg = ({ children }) => <Color hex={children.background}>{children}</Color>
const Fg = ({ children }) => <Color hex={children.foreground}>{children}</Color>

exports.Pass = Pass;
exports.Fail = Fail;
exports.Black = Black;
exports.White = White;
exports.Dim = Dim;
exports.Background = Bg;
exports.Foreground = Fg;