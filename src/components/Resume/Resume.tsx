import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../../assets/pdfs/resume.pdf';
import { useResumeStyles } from './resume-styles';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume: React.FC = () => {
  const classes: any = useResumeStyles();
  const scale: number = 1.5;

  return (
    <Document
      className={classes.resume}
      file={resume}
      onLoadError={console.error}
    >
      <Page pageNumber={1} scale={scale} />
    </Document>
  )
}