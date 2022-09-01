import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useHomeStyles = makeStyles(() => ({
  title: {
    fontFamily: 'consolas !important'
  },
  subtitle: {
    color: colors.Green,
    fontFamily: 'consolas !important'
  },
  outerGrid: {
    position: 'relative',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  },
  typedBox: {
    color: colors.Lime,
    margin: 'auto auto'
  },
  image: {
    height: '50vmin !important',
    width: '50vmin !important',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));
