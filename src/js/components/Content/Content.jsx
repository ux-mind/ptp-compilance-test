import React, { useState } from 'react';
import Tabs from './Tabs/Tabs';
import SearchRow from './SearchRow/SearchRow';
import Table from './Table/Table';

const data = [
	{
		id: 1,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 2,
		year: '2020',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'CO',
		category: 'CO Pipeline',
		dueDate: '15/08/2023',
		submissionDate: '15/08/2023',
		status: 'CO pipeline'
	},
	{
		id: 3,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 4,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 5,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 6,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 7,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 8,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 9,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 10,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 11,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 12,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 13,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	},
	{
		id: 14,
		year: '2022',
		company: 'ONEOK Elkcreek Pipeline',
		companyLink: '#',
		state: 'WY',
		category: 'WY Pipeline',
		dueDate: '07/05/2022',
		submissionDate: '07/05/2022',
		status: 'WY pipeline'
	}
];

const Content = () => {
	const [visibleData, setVisibleData] = useState(10);

	return (
		<div className="ms-content-wrapper ms-grid-content-wrapper">
			<div className="container-fluid">
				<div className="row ms-right-sidebar-column-row">
					<div className="col-md-12">
						<div className="ms-tabs-wrapper p-4">
							<Tabs />
							<div className="tab-content" id="pills-tabContent">
								<div
									className="tab-pane fade show active"
									id="pills-models"
									role="tabpanel"
									aria-labelledby="pills-models-tab"
									tabIndex="0"
								>
									<SearchRow />
									<Table
										data={data}
										visibleData={visibleData}
										setVisibleData={setVisibleData}
									/>
								</div>
								{/* <!-- <div className="tab-pane fade" id="pills-scenarios" role="tabpanel" aria-labelledby="pills-scenarios-tab" tabIndex="0">Scenarios</div> --> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
