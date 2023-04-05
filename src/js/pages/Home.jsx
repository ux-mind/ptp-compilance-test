import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import Content from '../components/Content/Content';

const Home = () => {
	return (
		<>
			<Header />
			<Sidebar />
			<RightSidebar />
			<Content />
		</>
	);
};

export default Home;
