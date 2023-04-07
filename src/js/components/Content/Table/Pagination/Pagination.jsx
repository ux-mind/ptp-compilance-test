import React from 'react';

const Pagination = () => {
	return (
		<div className="row ms-pagination pt-3">
			<div className="col-4"></div>
			<div className="col-4">
				<div className="ms-pagination-numbers">
					<nav className="pagination-wrapper" aria-label="Page navigation example">
						<ul className="pagination mb-0 justify-content-center">
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Previous">
									Previous
								</a>
							</li>
							<li className="page-item">
								<a className="page-link active" href="#">
									1
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									2
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									3
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Next">
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
					<select className="form-select me-2" aria-label="Default select example">
						<option defaultValue>10</option>
						<option defaultValue="1">20</option>
						<option defaultValue="2">30</option>
					</select>
					<p className="mb-0">Per Row</p>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
