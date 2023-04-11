import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination/Pagination';
import StickyBox from './StickyBox/StickyBox';

import exportIcon from '../../../../assets/images/export.svg';
import editIcon from '../../../../assets/images/edit-pen.svg';

const Table = ({ data, visibleData, setVisibleData }) => {
	const [selectedItemsId, setSelectedItemsId] = useState([]);

	function handleSelectedItems(evt, id) {
		const target = evt.target;

		if (target.checked) {
			setSelectedItemsId((prev) => [...prev, id]);
		} else {
			const newSelectedItemsId = selectedItemsId.filter((selectedId) => selectedId !== id);

			setSelectedItemsId(newSelectedItemsId);
		}
	}

	const handleCheckAllClick = (evt) => {
		const target = evt.target;

		if (target.checked) {
			const dataIDsSorted = data
				.map((data) => data.id)
				.sort((a, b) => a - b)
				.filter((id, idx) => idx <= visibleData - 1);

			setSelectedItemsId([...dataIDsSorted]);
		} else {
			setSelectedItemsId([]);
		}
	};

	return (
		<>
			<div className="ms-table-wrapper position-relative">
				<table className="ms-table ms-table-border ms-models-page-table ms-checkbox-table">
					<tbody>
						<tr>
							<th>
								<input
									id="select"
									type="checkbox"
									onChange={(evt) => handleCheckAllClick(evt)}
									checked={selectedItemsId.length}
								/>
								<label htmlFor="select"></label>
							</th>
							<th>
								<div className="d-flex align-items-center">
									<p className="ms-table-column-name">Tax&nbsp;year</p>
									<div className="ms-table-sort">
										<button
											type="button"
											data-sort="year"
											data-direction="up"
										></button>
										<button
											type="button"
											data-sort="year"
											data-direction="down"
										></button>
									</div>
								</div>
							</th>
							<th>
								<div className="d-flex align-items-center">
									<p className="ms-table-column-name">Company</p>
									<div className="ms-table-sort">
										<button
											type="button"
											data-sort="company"
											data-direction="up"
										></button>
										<button
											type="button"
											data-sort="company"
											data-direction="down"
										></button>
									</div>
								</div>
							</th>
							<th>
								<div className="d-flex align-items-center justify-content-center">
									<p className="ms-table-column-name">State</p>
									<div className="ms-table-sort">
										<button
											type="button"
											data-sort="state"
											data-direction="up"
										></button>
										<button
											type="button"
											data-sort="state"
											data-direction="down"
										></button>
									</div>
								</div>
							</th>
							<th>
								<p className="ms-table-column-name">Report&nbsp;category</p>
							</th>
							<th>
								<p className="ms-table-column-name">Due&nbsp;date</p>
							</th>
							<th>
								<p className="ms-table-column-name">Status</p>
							</th>
							<th>
								<p className="ms-table-column-name">Submission&nbsp;date</p>
							</th>
							<th>OPTIONS</th>
						</tr>
						{data.map((data, idx) => {
							if (idx >= visibleData) {
								return null;
							}

							return (
								<tr key={data.id}>
									<td>
										<input
											id={data.id}
											type="checkbox"
											name="tax"
											onChange={(evt) => handleSelectedItems(evt, data.id)}
											checked={selectedItemsId.includes(data.id)}
										/>
										<label htmlFor={data.id}></label>
									</td>
									<td>{data.year}</td>
									<td>
										<a href={data.companyLink}>{data.company}</a>
									</td>
									<td>{data.state}</td>
									<td>{data.category}</td>
									<td>{data.dueDate}</td>
									<td>{data.status}</td>
									<td>{data.submissionDate}</td>
									<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
										<button className="ms-dots">
											<svg
												width="14"
												height="3"
												viewBox="0 0 14 3"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx="1.39994"
													cy="1.39994"
													r="1.39994"
													transform="matrix(1 1.74846e-07 1.74846e-07 -1 0 2.79987)"
													fill="black"
												/>
												<circle
													cx="1.39994"
													cy="1.39994"
													r="1.39994"
													transform="matrix(1 1.74846e-07 1.74846e-07 -1 5.59961 2.79987)"
													fill="black"
												/>
												<circle
													cx="1.39994"
													cy="1.39994"
													r="1.39994"
													transform="matrix(1 1.74846e-07 1.74846e-07 -1 11.2002 2.79987)"
													fill="black"
												/>
											</svg>
										</button>
										<div className="ms-dots-dropdown position-absolute">
											<Link to="/final-submission-screen">
												<img src={exportIcon} />
												Edit
											</Link>
											<a href="#">
												<img src={editIcon} />
												Export
											</a>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<Pagination setVisibleData={setVisibleData} />
			<StickyBox items={selectedItemsId} />
		</>
	);
};

export default Table;
