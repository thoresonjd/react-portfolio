import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../../assets/pdfs/resume.pdf';
import { useStyles } from '../../theme';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume: React.FC = () => {
  const classes: any = useStyles();
  const scale: number = 1.5;

  return (
    <>
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <Document
        className={classes.resume}
        file={resume}
        onLoadError={console.error}
      >
        <Page pageNumber={1} scale={scale} />
      </Document>
    </>
  );
}
