import { makeStyles } from '@mui/styles';

export const useNavbarStyles = makeStyles(() => ({
    appbar: {
        boxShadow: 'none'
    },
    toolbar: {
        margin: 'auto'
    },
    buttonText: {
        textTransform: 'lowercase',
        fontFamily: 'consolas !important'
    }
}));