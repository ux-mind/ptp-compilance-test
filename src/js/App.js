import React from 'react';
import Home from './pages/Home';
import ReportSubmission from './pages/ReportSubmission';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<div className="ms-body-wrapper">
			<script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
				crossOrigin="anonymous"
			></script>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/final-submission-add-screen" element={<ReportSubmission />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
