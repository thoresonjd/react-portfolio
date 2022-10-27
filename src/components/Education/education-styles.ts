import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useEducationStyles: Function = makeStyles(() => ({
  title: {
    color: colors.Lime,
    fontFamily: 'press-start !important',
    textAlign: 'center',
    textTransform: 'lowercase',
    padding: '30px 0'
  },
  educationTimeline: {
    overflow: 'auto',
    margin: '0 auto',
    display: 'flex',
    width: 'fit-content'
  },
  timelineItem: {
    width: 'fit-content',
    '&::before': {
      maxWidth: 0
    }
  },
  timelineDot: {
    backgroundColor: `${colors.Transparent} !important`,
    boxShadow: 'none !important'
  },
  timelineConnector: {
    backgroundColor: `${colors.Lime} !important`,
  },
  icon: {
    color: colors.Lime
  },
  educationContent: {
    overflow: 'auto',
    display: 'flex',
    width: 'fit-content'
  },
  educationCard: {
    display: 'flex',
    background: `${colors.Transparent} !important`,
    border: `2px solid ${colors.Lime}`
  },
  educationTimeframe: {
    fontFamily: 'press-start !important',
    fontSize: '0.5rem !important',
    color: colors.White
  },
  educationHeaderText: {
    fontFamily: 'press-start !important',
    fontSize: '0.75rem !important',
    color: colors.White
  },
  educationBodyText: {
    fontFamily: 'press-start !important',
    fontSize: '0.66rem !important',
    color: colors.White,
  }
}));
