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
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      justifyContent: 'center'
    },
    typedBox: {
      color: colors.Lime,
      margin: 'auto auto'
    },
    image: {
      height: '400px !important',
      width: '400px !important',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }
}));
