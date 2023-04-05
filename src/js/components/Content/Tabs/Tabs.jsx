import React, { useState, useEffect } from 'react';

const tabs = [
	{ id: 'pills-models-tab-1', content: 'Final Report Submissions' },
	{ id: 'pills-models-tab-2', content: 'Manage Reports' },
	{ id: 'pills-models-tab-3', content: 'Manage Data' }
];

/* TODO: Tabs bar */
const Tabs = () => {
	const [activeTabId, setActiveTabId] = useState(null);

	useEffect(() => {
		setActiveTabId(tabs[0].id);
	}, []);

	return (
		<ul className="ms-tabs nav nav-pills mb-2" id="pills-tab" role="tablist">
			{tabs.map((tab) => {
				return (
					<li className="nav-item" role="presentation" key={tab.id}>
						<button
							className={`nav-link${activeTabId === tab.id ? ' active' : ''}`}
							id="pills-models-tab"
							data-bs-toggle="pill"
							data-bs-target="#pills-models"
							type="button"
							role="tab"
							aria-controls="pills-models"
							// aria-defaultValue="true"
							onClick={() => setActiveTabId(tab.id)}
						>
							{tab.content}
						</button>
					</li>
				);
			})}
			{/* <li className="nav-item" role="presentation">
				<button
					className="nav-link active"
					id="pills-models-tab"
					data-bs-toggle="pill"
					data-bs-target="#pills-models"
					type="button"
					role="tab"
					aria-controls="pills-models"
					// aria-defaultValue="true"
				>
					Final Report Submissions
				</button>
			</li>
			<li className="nav-item" role="presentation">
				<button
					className="nav-link"
					id="pills-models-tab"
					data-bs-toggle="pill"
					data-bs-target="#pills-models"
					type="button"
					role="tab"
					aria-controls="pills-models"
					// aria-defaultValue="true"
				>
					Manage Reports
				</button>
			</li>
			<li className="nav-item" role="presentation">
				<button
					className="nav-link"
					id="pills-models-tab"
					data-bs-toggle="pill"
					data-bs-target="#pills-models"
					type="button"
					role="tab"
					aria-controls="pills-models"
					// aria-defaultValue="true"
				>
					Manage Data
				</button>
			</li> */}
		</ul>
	);
};

export default Tabs;
