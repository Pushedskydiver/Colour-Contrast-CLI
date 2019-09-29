const React = require('react');
const { Text, Box } = require('ink');

const Table = ({ children }) => <Box flexDirection="column" marginTop={2}>{children}</Box>;

const Th = ({ children }) => <Text>{children}</Text>;

const RowSpan = ({ children }) => <Text bold>{children}</Text>;

const Tr = ({ children, marginTop, marginBottom }) => {
  const columns = [
    {
      width: 12,
      margin: 2
    },
    {
      width: 10,
      margin: 2
    },
    {
      width: 14,
      margin: 2
    },
    {
      width: 12,
      margin: 0
    }
  ];

  return (
    <Box width={70} marginTop={marginTop} marginBottom={marginBottom}>
      {React.Children.map(children, (child, index) => {
        const { width, margin, grow } = columns[index];

        return <Box width={width} marginRight={margin}>{child}</Box>;
      })}
    </Box>
  )
};

exports.Table = Table;
exports.Th = Th;
exports.RowSpan = RowSpan;
exports.Tr = Tr;
