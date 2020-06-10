const globalStyles = (theme) => ({
  '*': {
    margin: 0,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSizeGlobal,
    boxSizing: 'border-box',
  },

  body: {
    overflow: 'auto',
    background: theme.palette.background.default,
  },

  a: {
    color: theme.palette.text.main,
    textDecoration: 'none',
  },

  '.container': {
    maxWidth: '900px',
    margin: '0 auto',
    width: '100%',
  },

  '.wrap': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: theme.typography.fontSizeGlobal,
    fontWeight: theme.typography.fontWeightMedium,
    padding: '15px',
  },

  img: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
});

export default globalStyles;
