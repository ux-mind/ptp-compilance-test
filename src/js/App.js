import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Content from './components/Content/Content';

const App = () => {
	return (
		<div className="ms-body-wrapper">
			<Header />
			<Sidebar />
			<RightSidebar />
			<Content />
		</div>
	);
};

export default App;
