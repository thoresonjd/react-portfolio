import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useHomeStyles: Function = makeStyles(() => ({
  container: {
    height: 'calc(100% - 64px)'
  },
  row: {
    position: 'relative',
    height: '100%',
    display: 'flex !important',
  },
  image: {
    display: 'flex',
    justifyContent: 'right',
    width: '50vw',
    margin: 'auto 0 !important',
    paddingRight: '2.5vw !important'
  },
  avatar: {
    height: '50vmin !important',
    width: '50vmin !important',
  },
  typedBox: {
    color: colors.Lime,
    margin: 'auto 0 !important',
    justifyContent: 'right',
    width: '50vw',
    paddingLeft: '2.5vw !important'
  },
  title: {
    fontFamily: 'press-start !important',
    textTransform: 'capitalize'
  }
}));
