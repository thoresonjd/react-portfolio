import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useProjectsStyles: Function = makeStyles(() => ({
  title: {
    color: colors.Lime,
    fontFamily: 'press-start !important',
    textAlign: 'center',
    textTransform: 'lowercase',
    padding: '30px 0'
  },
  projectsTimeline: {
    minWidth: '100vh',
    overflow: 'auto'
  },
  timelineConnector: {
    backgroundColor: `${colors.Lime} !important`,
  },
  timelineDot: {
    backgroundColor: `${colors.Transparent} !important`,
    boxShadow: 'none !important'
  },
  icon: {
    color: colors.Lime
  },
  content: {
    overflow: 'auto'
  },
  timeFrame: {
    fontFamily: 'press-start !important',
    fontSize: '0.75rem !important',
    color: colors.Lime,
    margin: 0,
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  projectsCardRHS: {
    display: 'inline-block',
    width: '750px',
    border: `2px solid ${colors.Lime}`,
    background: `${colors.Transparent} !important`
  },
  projectsCardLHS: {
    display: 'inline-block',
    width: '750px',
    margin: '0 0 0 auto',
    textAlign: 'left',
    border: `2px solid ${colors.Lime}`,
    background: `${colors.Transparent} !important`
  },
  projectHeaderText: {
    fontFamily: 'press-start !important',
    fontSize: '0.9rem !important',
    color: colors.White,
  },
  projectBodyText: {
    fontFamily: 'press-start !important',
    fontSize: '0.75rem !important',
    color: colors.White,
  },
  linkText: {
    fontFamily: 'press-start !important',
    fontSize: '0.9rem !important',
    color: colors.White,
    
    // Animation
    display: 'inline-block',
    backgroundColor: colors.Transparent,
    backgroundImage: `linear-gradient(${colors.Lime} 0 0)`,
    backgroundPosition: '0 100%',
    backgroundSize: '0 2px',
    backgroundRepeat: 'no-repeat',
    transition: 'color 0.3s, background-size 0.3s',
    '&:hover': {
      color: colors.Lime,
      backgroundSize: '100% 2px',
      cursor: 'pointer'
    },
    '&:active': {
      color: colors.Lime,
      backgroundSize: '100% 2px',
      backgroundImage: `linear-gradient(${colors.Green} 0 0)`
    }
  }
}));
