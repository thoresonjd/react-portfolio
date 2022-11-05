import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '../Timeline';
import { EducationItem } from './EducationItem';
import education from '../../db/education.json';

export const Education: React.FC = () => {
  return (
    <Timeline 
      title='education'
      data={education}
      icon={SchoolIcon}
      element={(timelineItem: any) => 
        <EducationItem educationItem={timelineItem} />
      }
    />
  );
}
