import React from 'react';

/* TODO: Tabs bar */
const Tabs = () => {
	return (
		<ul className="ms-tabs nav nav-pills mb-2" id="pills-tab" role="tablist">
			<li className="nav-item" role="presentation">
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
			</li>
		</ul>
	);
};

export default Tabs;
