const React = require('react');
const { Text, Box } = require('ink');

const Table = ({ children }) => <Box flexDirection="column" marginTop={2}>{children}</Box>;

const Th = ({ children }) => <Text>{children}</Text>;

const RowSpan = ({ children }) => <Text bold>{children}</Text>;

const Tr = ({ children, marginTop, marginBottom }) => {
  const columns = [
    {
      width: 12,
      align: 'flex-start'
    },
    {
      width: 14,
      align: 'center'
    },
    {
      width: 16,
      align: 'center'
    },
    {
      width: 14,
      align: 'center'
    }
  ];

  return (
    <Box width={56} marginTop={marginTop} marginBottom={marginBottom}>
      {React.Children.map(children, (child, index) => {
        const { width, align, grow } = columns[index];

        return (
          <Box minWidth={width} flexDirection="column" alignItems={align}>
            {child}
          </Box>
        );
      })}
    </Box>
  )
};

exports.Table = Table;
exports.Th = Th;
exports.RowSpan = RowSpan;
exports.Tr = Tr;
