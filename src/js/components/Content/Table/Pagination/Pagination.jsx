import React from 'react';

const Pagination = () => {
	return (
		<div className="row ms-pagination pt-3">
			<div className="col-4"></div>
			<div className="col-4">
				<div className="ms-pagination-numbers">
					<nav aria-label="Page navigation example">
						<ul className="pagination mb-0 justify-content-center">
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Previous">
									<svg
										width="6"
										height="14"
										viewBox="0 0 8 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.05708 13.0347C7.31356 12.7585 7.31356 12.3178 7.05708 12.0416L2.37582 7.00023L7.05763 1.95826C7.31412 1.68203 7.31412 1.24133 7.05763 0.965113C6.79131 0.678294 6.35129 0.678294 6.08496 0.965113L0.942367 6.50336C0.685879 6.77958 0.685879 7.22028 0.942367 7.4965L6.08438 13.0341C6.0845 13.0342 6.08461 13.0344 6.08473 13.0345C6.21569 13.1763 6.39202 13.25 6.57102 13.25C6.75096 13.25 6.92684 13.175 7.05708 13.0347Z"
											fill="currentColor"
											stroke="currentColor"
											strokeWidth="0.5"
										/>
									</svg>
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
									<svg
										width="6"
										height="14"
										viewBox="0 0 8 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0.942923 0.96525C0.686436 1.24147 0.686436 1.68217 0.942924 1.95839L5.62418 6.99977L0.942367 12.0417C0.685879 12.318 0.685879 12.7587 0.942367 13.0349C1.20869 13.3217 1.64871 13.3217 1.91504 13.0349L7.05763 7.49664C7.31412 7.22042 7.31412 6.77972 7.05763 6.5035L1.91562 0.965874C1.9155 0.96575 1.91539 0.965626 1.91527 0.965502C1.78431 0.8237 1.60798 0.75 1.42898 0.75C1.24904 0.750001 1.07317 0.824987 0.942923 0.96525Z"
											fill="currentColor"
											stroke="currentColor"
											strokeWidth="0.5"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="col-4">
				<div className="d-flex justify-content-end align-items-center">
					<p className="mb-0 me-4">1-50 of 130</p>
					<p className="mb-0">Per Row</p>
					<select className="form-select ms-2" aria-label="Default select example">
						<option defaultValue>50</option>
						<option defaultValue="1">100</option>
						<option defaultValue="2">150</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
