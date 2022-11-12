import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import Timeline from '../Timeline';
import { ExperienceItem } from './ExperienceItem';
import experience from '../../db/experience.json';

export const Experience: React.FC = () => {
  return (
    <Timeline
      title='Experience'
      data={experience}
      icon={WorkIcon}
      element={(timelineItem: any) => 
        <ExperienceItem experienceItem={timelineItem} />
      }
    />
  );
}
