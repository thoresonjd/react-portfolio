import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useTimelineStyles: Function = makeStyles(() => ({
  timelineTitle: {
    color: colors.Lime,
    fontFamily: 'press-start !important',
    textAlign: 'center',
    textTransform: 'lowercase',
    padding: '30px 0'
  },
  timeline: {
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
  timelineIcon: {
    color: colors.Lime
  },
  timelineItemContent: {
    overflow: 'auto',
    display: 'flex',
    width: 'fit-content'
  },
  timelineItemCard: {
    display: 'flex',
    background: `${colors.Transparent} !important`,
    border: `2px solid ${colors.Lime}`
  },
  timelineItemTimeframe: {
    fontFamily: 'press-start !important',
    fontSize: '0.5rem !important',
    color: colors.White
  },
  experienceHeaderText: {
    fontFamily: 'press-start !important',
    fontSize: '0.75rem !important',
    color: colors.White
  }
}));
