const React = require('react')
const { Color } = require('ink')

const Green = ({ children }) => <Color hex="#9eeb7a">{children}</Color>
const Red = ({ children }) => <Color hex="#b62020">{children}</Color>
const Dim = ({ children }) => <Color dim>{children}</Color>

exports.Green = Green
exports.Red = Red
exports.Dim = Dim