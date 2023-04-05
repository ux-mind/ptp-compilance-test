import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const ReportSubmission = () => {
	return (
		<div className="ms-body-wrapper">
			<Header />
			<Sidebar />
			<a
				className="ms-angle-icon d-flex align-items-center justify-content-center"
				id="ms-menu-toggle"
				href="#."
			>
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.5637 13.2363C6.39498 13.0675 6.30019 12.8387 6.30019 12.6C6.30019 12.3614 6.39498 12.1325 6.5637 11.9637L9.5274 9.00001L6.5637 6.03631C6.47774 5.95329 6.40918 5.85398 6.36201 5.74417C6.31484 5.63437 6.29001 5.51627 6.28897 5.39677C6.28794 5.27727 6.31071 5.15876 6.35596 5.04815C6.40121 4.93754 6.46804 4.83706 6.55254 4.75255C6.63705 4.66805 6.73753 4.60122 6.84814 4.55597C6.95875 4.51072 7.07726 4.48794 7.19676 4.48898C7.31626 4.49002 7.43436 4.51485 7.54416 4.56202C7.65397 4.60919 7.75328 4.67775 7.8363 4.76371L11.4363 8.36371C11.605 8.53248 11.6998 8.76136 11.6998 9.00001C11.6998 9.23866 11.605 9.46753 11.4363 9.63631L7.8363 13.2363C7.66752 13.405 7.43865 13.4998 7.2 13.4998C6.96135 13.4998 6.73247 13.405 6.5637 13.2363Z"
						fill="currentColor"
					/>
				</svg>
			</a>
			<div className="ms-content-wrapper">
				<div className="container-fluid px-0">
					<div className="row pb-4">
						<div className="col-md-12">
							<div className="ms-tabs-wrapper ms-add-company-financials p-4">
								<h5 className="mb-3">Final Report Submission</h5>
								<div className="ms-heading-bg p-3 rounded mb-4">
									<div className="d-flex align-items-center ms-managed-detail-top">
										<div className="me-5 d-flex align-items-center">
											{/* <!-- <h5 className="text-white mb-0 me-1"><b>Create New Final Report</b></h5> --> */}
											<h6 className="text-white mb-0">
												<b>TAX YEAR: &nbsp; </b>
											</h6>

											<span className="text-white me-2">
												{' '}
												2023{' '}
												<svg
													style={{ color: 'white' }}
													xmlns="http://www.w3.org/2000/svg"
													width="15"
													height="15"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-edit-2"
												>
													<path
														d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
														fill="white"
													></path>
												</svg>
											</span>
											{/* <!-- <svg className="text-white" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
																									<path fillRule="evenodd" clipRule="evenodd" d="M8.47919 1.83317C8.29681 1.83317 8.1219 1.90562 7.99294 2.03458L7.62953 2.39799L8.60202 3.37047L8.96543 3.00706C9.09439 2.8781 9.16684 2.7032 9.16684 2.52082C9.16684 2.33845 9.09439 2.16354 8.96543 2.03458C8.83647 1.90562 8.66156 1.83317 8.47919 1.83317ZM9.61361 3.65525C9.91448 3.35438 10.0835 2.94631 10.0835 2.52082C10.0835 2.09533 9.91448 1.68727 9.61361 1.3864C9.31274 1.08553 8.90468 0.916504 8.47919 0.916504C8.05369 0.916504 7.64563 1.08553 7.34476 1.3864L6.6575 2.07366C6.65742 2.07374 6.65758 2.07358 6.6575 2.07366C6.65742 2.07374 6.6571 2.07406 6.65702 2.07414L1.05093 7.68023C0.964976 7.76619 0.916687 7.88276 0.916687 8.00432V9.64149C0.916687 9.89462 1.12189 10.0998 1.37502 10.0998H2.97919C3.10074 10.0998 3.21732 10.0515 3.30328 9.96558L9.61361 3.65525ZM7.95384 4.01865L6.98135 3.04617L1.83335 8.19417V9.18316H2.78934L7.95384 4.01865Z" fill="currentColor"/>
																							</svg>  --> */}
										</div>
										<div className="me-5 d-flex align-items-center">
											{/* <!-- <h6 className="text-white mb-0 me-1"><b>COMPANY NAME:</b></h6> --> */}
											<h6 className="text-white mb-0">
												<b> COMPANY NAME: &nbsp;</b>
											</h6>

											<span className="text-white me-2">
												{' '}
												023 ONE OK BAKKEN PIPELINE, L.LC..{' '}
												<svg
													style={{ color: 'white' }}
													xmlns="http://www.w3.org/2000/svg"
													width="15"
													height="15"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-edit-2"
												>
													<path
														d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
														fill="white"
													></path>
												</svg>
											</span>
										</div>
										{/* <!-- <div className="d-flex align-items-center">
																							<h6 className="text-white mb-0 me-1"><b>STATE:</b></h6>
																							<span className="text-white me-2">CO</span>
																							<svg className="text-white" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
																									<path fillRule="evenodd" clipRule="evenodd" d="M8.47919 1.83317C8.29681 1.83317 8.1219 1.90562 7.99294 2.03458L7.62953 2.39799L8.60202 3.37047L8.96543 3.00706C9.09439 2.8781 9.16684 2.7032 9.16684 2.52082C9.16684 2.33845 9.09439 2.16354 8.96543 2.03458C8.83647 1.90562 8.66156 1.83317 8.47919 1.83317ZM9.61361 3.65525C9.91448 3.35438 10.0835 2.94631 10.0835 2.52082C10.0835 2.09533 9.91448 1.68727 9.61361 1.3864C9.31274 1.08553 8.90468 0.916504 8.47919 0.916504C8.05369 0.916504 7.64563 1.08553 7.34476 1.3864L6.6575 2.07366C6.65742 2.07374 6.65758 2.07358 6.6575 2.07366C6.65742 2.07374 6.6571 2.07406 6.65702 2.07414L1.05093 7.68023C0.964976 7.76619 0.916687 7.88276 0.916687 8.00432V9.64149C0.916687 9.89462 1.12189 10.0998 1.37502 10.0998H2.97919C3.10074 10.0998 3.21732 10.0515 3.30328 9.96558L9.61361 3.65525ZM7.95384 4.01865L6.98135 3.04617L1.83335 8.19417V9.18316H2.78934L7.95384 4.01865Z" fill="currentColor"/>
																							</svg>
																					</div> --> */}
									</div>
								</div>
								<div className="row mt-4 ms-filter-dropdown p-0 ms-box-shadow-none border-0">
									<div className="col-md-4">
										<form className="ms-border-box p-3 py-4">
											<label>TAX YEAR</label>
											<select>
												<option>2022</option>
												<option>2023</option>
												<option>2024</option>
											</select>

											<label>COMPANY_NAME</label>
											<select>
												<option>ONEOK Elkcreek Pipeline</option>
												<option>2023</option>
												<option>2024</option>
											</select>
											<label>STATE</label>
											<select>
												<option>WY</option>
												<option>2023</option>
												<option>2024</option>
											</select>
											<label>DUE_DATE</label>
											<select>
												<option>2022</option>
												<option>2023</option>
												<option>2024</option>
											</select>
										</form>
									</div>
									<div className="col-md-4">
										<form className="ms-border-box p-3 py-4">
											<label>STATUS</label>
											<select>
												<option>Not submitted</option>
												<option>2023</option>
												<option>2024</option>
											</select>
											<label>SUBMISSION_DATE</label>
											<input
												type="date"
												id="start"
												name="trip-start"
												// value="2023-03-23"
												min="2023-01-01"
												max="2099-12-31"
											/>
										</form>
									</div>
									<div className="col-md-12 text-end mt-4">
										<a href="#." className="ms-primary-btn ms-secondary-btn">
											Cancel
										</a>
										<a href="#." className="ms-primary-btn ms-2">
											Create
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReportSubmission;
