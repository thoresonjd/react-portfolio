import { makeStyles } from '@mui/styles';
import { colors } from '.';

export const useStyles: Function = makeStyles(() => ({

  /*** Navbar ***/

  navbar: {
    boxShadow: 'none !important',
    transition: 'all 0.3s ease-out 0s !important',
    padding: '1rem 2rem !important'
  },
  toolbar: {
    margin: 'auto'
  },
  brand: {
    height: '3em !important'
  },
  navbarToggler: {
    position: 'relative',
    margin: 'auto 0',
    borderColor: colors.Transparent,
    backgroundColor: colors.Transparent,
    '&:focus, &:active': {
      outline: '0 !important'
    },
    '& span': {
      display: 'block !important',
      backgroundColor: 'lime !important',
      height: '4px !important',
      width: '27px !important',
      marginTop: '5px !important',
      marginBottom: '5px !important',
      transform: 'rotate(0deg) !important',
      transition: 'transform 0.35s ease-in-out !important',
      left: '0 !important',
      opacity: '1 !important'
    },
    '&:not(.collapsed) span': {
      '&:nth-child(1)': {
        transform: 'translateY(4.5px) rotate(135deg) !important',
      },
      '&:nth-child(2)': {
        transform: 'translateY(-4.5px) rotate(-135deg) !important'
      }
    }
  },
  navItem: {
    margin: 'auto'
  },
  button: {
    textTransform: 'lowercase',
    fontFamily: 'press-start !important',
    fontSize: '1rem',
    color: colors.Lime,
    border: 'none',
    padding: '5px 10px',

    // Animation
    display: 'inline-block',
    backgroundColor: colors.Transparent,
    backgroundImage: `linear-gradient(${colors.Lime} 0 0)`,
    backgroundPosition: '0 50%',
    backgroundSize: '0 100%',
    backgroundRepeat: 'no-repeat',
    transition: 'color 0.3s, background-size 0.3s',
    '&:hover': {
      color: colors.Black,
      backgroundSize: '100% 100%'
    },
    '&:active': {
      color: colors.Black,
      backgroundSize: '100% 100%',
      backgroundImage: `linear-gradient(${colors.Green} 0 0)`
    }
  },

  /*** Home ***/

  homeContainer: {
    height: '75vh',
    display: 'flex'
  },
  homeName: {
    width: '75vmin !important',
    margin: 'auto'
  },

  /*** Timeline ***/

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
  timelineItemHeader: {
    fontFamily: 'press-start !important',
    fontSize: '0.75rem !important',
    color: colors.White
  },
  bodyText: {
    fontFamily: 'press-start !important',
    fontSize: '0.66rem !important',
    color: colors.White,
  },
  bulletPoint: {
    display: 'flex'
  },
  projectLinkText: {
    fontFamily: 'press-start !important',
    fontSize: '0.9rem !important',
    color: colors.White,
    
    // Animation
    display: 'inline-block',
    backgroundColor: colors.Transparent,
    backgroundImage: `linear-gradient(${colors.Lime} 0 0)`,
    backgroundPosition: '0 100%',
    backgroundSize: '0 2px',
    backgroundRepeat: 'no-repeat',
    transition: 'background-size 0.3s',
    '&:hover': {
      color: colors.Lime,
      backgroundSize: '100% 2px'
    },
    '&:active': {
      color: colors.Lime,
      backgroundSize: '100% 2px',
      backgroundImage: `linear-gradient(${colors.Green} 0 0)`
    }
  },

  /*** Resume ***/

  resume: {
    display: 'flex',
    justifyContent: 'center'
  },

  /*** Music ***/

  musicContainer: {
    margin: '5vh 0'
  },
  musicTitle: {
    fontFamily: 'press-start !important',
    fontSize: '2rem',
    textAlign: 'center',
    color: colors.Lime
  },
  audioPlayer: {
    margin: '5vh auto'
  },

  /*** About ***/

  aboutBox: {
    textAlign: 'center',
  },
  avatar: {
    height: '40vmin !important',
    width: '40vmin !important',
    margin: '2.5vh auto'
  },
  aboutName: {
    marginTop: '2.5vh',
    height: '40px'
  },
  linksBox: {
    width: 'fit-content',
    margin: '2.5vh auto'
  },
  linkIcon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit'
  },
  linksList: {
    overflowY: 'auto',
    maxHeight: '50vh'
  },
  aboutLinkText: {
    fontFamily: 'press-start !important',
    fontSize: '0.75rem',
    color: colors.White,
    
    // Animation
    display: 'inline-block',
    backgroundColor: colors.Transparent,
    backgroundImage: `linear-gradient(${colors.Lime} 0 0)`,
    backgroundPosition: '10px 100%',
    backgroundSize: '0 1px',
    backgroundRepeat: 'no-repeat',
    transition: 'background-size 0.3s',
    '&:hover': {
      color: colors.Lime,
      backgroundSize: '100% 1px'
    },
    '&:active': {
      color: colors.Green,
      backgroundSize: '100% 1px',
      backgroundImage: `linear-gradient(${colors.Green} 0 0)`
    }
  },

  /*** Footer ***/

  footer: {
    bottom: 0,
    textAlign: 'center'
  },
  copyright: {
    color: colors.Lime,
    fontFamily: 'press-start !important',
    fontSize: '1rem !important',
    padding: '2.5vh 2.5vw'
  },

  /*** 404 ***/

  errorBox: {
    textAlign: 'center',
    margin: '2.5vh auto',
    padding: '5vh 0',
    animation: '$upDown 5s ease-in-out infinite'
  },
  notFoundTitle: {
    fontFamily: 'press-start !important',
    fontSize: '4rem !important',
    color: colors.Lime
  },
  notFoundSubtitle: {
    fontFamily: 'press-start !important',
    fontSize: '2rem !important',
    color: colors.Lime
  },
  notFoundImage: {
    width: '66vw',
    marginTop: '5vh'
  },
  '@keyframes upDown': {
    '0%': {
      transform: 'translateY(-2.5vh)'
    },
    '50%': {
      transform: 'translateY(2.5vh)'
    },
    '100%': {
      transform: 'translateY(-2.5vh)'
    }
  }
}));
