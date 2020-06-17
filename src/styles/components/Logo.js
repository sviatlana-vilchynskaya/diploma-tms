import { createUseStyles } from 'react-jss';

const LogoStyle = ({ palette, typography }) => ({

  logo: {
    color: palette.common.white,
    fontSize: typography.fontSizeLarge,
    fontWeight: typography.fontWeightLight,
  },
});

export default createUseStyles(LogoStyle);
