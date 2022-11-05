import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import Timeline from '../Timeline';
import { ProjectItem } from './ProjectItem';
import projects from '../../db/projects.json';

export const Projects: React.FC = () => {
  return (
    <Timeline
      title='projects'
      data={projects}
      icon={BuildIcon}
      element={(timelineItem: any) => 
        <ProjectItem projectItem={timelineItem} />
      }
    />
  );
}
