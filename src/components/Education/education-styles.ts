import { makeStyles } from '@mui/styles';

export const useEducationStyles = makeStyles(() => ({
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
    timeFrame: {
        margin: 0,
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'white'
    },
    image: {
        maxWidth: 250,
        maxHeight: 250
    }
}));
