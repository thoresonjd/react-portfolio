import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import TabTitle from '../TabTitle';
import resume from '../../assets/pdfs/resume.pdf';
import { useStyles } from '../../theme';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'Resume';
	const scale: number = 1.5;

	return (
		<>
			<TabTitle title={title} />
			<div className={classes.center}>
				<a href={resume} download='resume' target='_blank' rel="noreferrer">
					<div className={`${classes.bodyText} ${classes.textButton}`}>Download resume</div>
				</a>
			</div>
			<Document
				className={classes.resume}
				file={resume}
				onLoadError={console.error}
			>
				<Page pageNumber={1} scale={scale} />
			</Document>
		</>
	);
};
