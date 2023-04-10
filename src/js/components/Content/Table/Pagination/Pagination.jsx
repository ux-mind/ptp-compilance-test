import React, { useState } from 'react';

const Pagination = ({ setVisibleData }) => {
	const [activePagBtn, setActivePaginationBtn] = useState('1');

	const handleActivePagBtn = (evt) => {
		setActivePaginationBtn(evt.target.innerHTML);
	};

	return (
		<div className="row ms-pagination pt-3 mt-auto">
			<div className="col-4"></div>
			<div className="col-4">
				<div className="ms-pagination-numbers">
					<nav className="pagination-wrapper" aria-label="Page navigation example">
						<ul className="pagination mb-0 justify-content-center">
							<li className="page-item">
								<a
									className={`page-link${
										activePagBtn === 'Previous' ? ` active` : ''
									}`}
									href="#"
									aria-label="Previous"
									onClick={(evt) => handleActivePagBtn(evt)}
								>
									Previous
								</a>
							</li>
							<li className="page-item">
								<a
									className={`page-link${activePagBtn === '1' ? ` active` : ''}`}
									href="#"
									onClick={(evt) => handleActivePagBtn(evt)}
								>
									1
								</a>
							</li>
							<li className="page-item">
								<a
									className={`page-link${activePagBtn === '2' ? ` active` : ''}`}
									href="#"
									onClick={(evt) => handleActivePagBtn(evt)}
								>
									2
								</a>
							</li>
							<li className="page-item">
								<a
									className={`page-link${activePagBtn === '3' ? ` active` : ''}`}
									href="#"
									onClick={(evt) => handleActivePagBtn(evt)}
								>
									3
								</a>
							</li>
							<li className="page-item">
								<a
									className={`page-link${
										activePagBtn === 'Next' ? ` active` : ''
									}`}
									href="#"
									aria-label="Next"
									onClick={(evt) => handleActivePagBtn(evt)}
								>
									Next
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="col-4">
				<div className="d-flex justify-content-end align-items-center">
					<p className="mb-0 me-4">1-10 of 130</p>
					<select
						className="form-select me-2"
						aria-label="Default select example"
						onChange={(evt) => setVisibleData(+evt.target.value)}
					>
						<option defaultValue>10</option>
						<option defaultValue="20">20</option>
						<option defaultValue="30">30</option>
					</select>
					<p className="mb-0">Per Row</p>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
