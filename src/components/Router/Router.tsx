import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {
	Navbar,
	Home,
	Education,
	Courses,
	Experience,
	Projects,
	Awards,
	Resume,
	Music,
	About,
	NotFound
} from '../';

export const Router: React.FC = (): JSX.Element => {
	return (
		<HashRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/education' element={<Education />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/experience' element={<Experience />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/awards' element={<Awards />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/music' element={<Music />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</HashRouter>
	);
};
