import React from 'react';
import Tabs from './Tabs/Tabs';
import SearchRow from './SearchRow/SearchRow';
import Table from './Table/Table';

const Content = () => {
	return (
		<div className="ms-content-wrapper ms-grid-content-wrapper">
			<div className="container-fluid">
				<div className="row pb-4 ms-right-sidebar-column-row">
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
									<Table />
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
