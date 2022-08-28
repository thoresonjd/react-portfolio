import { makeStyles } from '@mui/styles';

export const useNavbarStyles = makeStyles(() => ({
  appbar: {
    boxShadow: 'none !important',
  },
  transparent: {
    transition: 'all 0.3s ease-out 0s !important',
    boxShadow: 'none !important'
  },
  blurred: {
    transition: 'all 0.3s ease-out 0s !important',
    boxShadow: 'none !important',
    backdropFilter: 'blur(15px) !important'
  },
  toolbar: {
    margin: 'auto'
  },
  buttonText: {
    textTransform: 'lowercase',
    fontFamily: 'consolas !important'
  }
}));
