import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import Timeline from '../Timeline';
import { ExperienceItem } from './ExperienceItem';
import experience from '../../db/experience.json';

export const Experience: React.FC = () => {
  return (
    <Timeline
      title='experience'
      data={experience}
      icon={WorkIcon}
      element={(timelineItem: any) => 
        <ExperienceItem experienceItem={timelineItem} />
      }
    />
  );
}

// import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import { Card, CardContent, Typography, Zoom } from '@mui/material';
// import WorkIcon from '@mui/icons-material/Work';
// import { 
//   Timeline, 
//   TimelineItem,
//   TimelineSeparator,
//   TimelineDot,
//   TimelineConnector,
//   TimelineContent
// } from '@mui/lab';
// import Bullet from '../Bullet';
// import { useExperienceStyles } from './experience-styles'; 
// import experience from '../../db/experience.json';

// export const Experience: React.FC = () => {
//   const classes: any = useExperienceStyles();
//   const transitionDelay: number = 50;

//   return (
//     <>
//       <Helmet>
//         <title>Experience</title>
//       </Helmet>
//       <Typography className={classes.title} variant='h4'>
//         Experience
//       </Typography>
//       <Timeline className={classes.experienceTimeline}>
//         {experience.map((exp: any, eIndex: number) => (
//           <Zoom key={eIndex} in={true} style={{transitionDelay: `${transitionDelay * eIndex}ms`}}>
//             <TimelineItem className={classes.timelineItem}>
//               <TimelineSeparator>
//                 <TimelineDot className={classes.timelineDot}>
//                   <WorkIcon className={classes.icon} fontSize='large' />
//                 </TimelineDot>
//                 <TimelineConnector className={classes.timelineConnector} />
//               </TimelineSeparator>
//               <TimelineContent className={classes.content}>
//                 <Card className={classes.experienceCard}>
//                   <CardContent>
//                     <Typography className={classes.experienceTimeframe}>{exp.from} - {exp.to}</Typography>
//                     <Typography className={classes.experienceHeaderText}>{exp.position}</Typography>
//                     <Typography className={classes.experienceHeaderText}>{exp.employer}</Typography>
//                     <Bullet points={exp['bullet-points']} />
//                   </CardContent>
//                 </Card>
//               </TimelineContent>
//             </TimelineItem>
//           </Zoom>
//         ))}
//       </Timeline>
//     </>
//   );
// }
