import { makeStyles } from '@mui/styles';

export const useEducationStyles = makeStyles(() => ({
    educationTimeline: {
        maxWidth: '70vh',
        margin: '0 auto'
    },
    educationItem: {
        '&:before': {
            backgroundColor: 'red',
            display: 'inline-block',
            width: 0,
            maxWidth: 0
        }
    },
}));