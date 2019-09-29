const React = require('react');
const importJsx = require('import-jsx');
const { render, Box } = require('ink');
const { Ratio } = importJsx('./ratio');
const { Grades } = importJsx('./grades');
const { Colours } = importJsx('./colours');
const { Share } = importJsx('./share');

const Container = ({ children }) => (
  <Box flexDirection="column" marginBottom={2}>
    {children}
  </Box>
);

const Cli = ({ contrast, level, background, foreground, flags }) => {
  if (flags.ratio || flags.r) {
    return (
      <Container>
        <Ratio contrast={contrast} />
      </Container>
    );
  }

  if (flags.grades || flags.g) {
    return (
      <Container>
        <Grades level={level} />
      </Container>
    );
  }

  return (
    <Container>
      <Ratio contrast={contrast} />

      <Grades level={level} />

      <Colours
        contrast={contrast}
        background={background}
        foreground={foreground}
      />

      <Share background={background} foreground={foreground} />
    </Container>
  );
};

module.exports = props => render(<Cli {...props} />);
