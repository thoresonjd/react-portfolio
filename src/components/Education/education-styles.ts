import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useEducationStyles = makeStyles(() => ({
  educationTimeline: {
    minWidth: '100vh',
    overflow: 'auto'
  },
  timelineConnector: {
    backgroundColor: `${colors.Lime} !important`,
  },
  timelineDot: {
    backgroundColor: `${colors.Transparent} !important`
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
  educationCardRHS: {
    display: 'flex',
    width: 'max-content'
  },
  educationCardLHS: {
    display: 'flex',
    width: 'max-content',
    margin: '0 0 0 auto',
    textAlign: 'left'
  },
  image: {
    maxWidth: 250,
    maxHeight: 250
  }
}));
