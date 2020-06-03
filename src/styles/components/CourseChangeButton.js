import { createUseStyles } from 'react-jss';

const CourseChangeButtonStyle = ({ palette }) => ({
  course_btn: {
    left: '63%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: palette.common.white,
    width: '45px',
    height: '25px',
    backgroundColor: palette.primary.main,
    borderStyle: 'none',
    borderRadius: '3px',
    padding: '0',
    cursor: 'pointer',
  },

  active: {
    backgroundColor: 'grey',
  },
});

export default createUseStyles(CourseChangeButtonStyle);
