import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useProjectsStyles = makeStyles(() => ({
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
    margin: 0,
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.Lime,
    fontFamily: 'consolas !important',
  },
  projectsCardRHS: {
    display: 'flex',
    width: 'max-content'
  },
  projectsCardLHS: {
    display: 'flex',
    width: 'max-content',
    margin: '0 0 0 auto',
    textAlign: 'left'
  },
  linkText: {
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
