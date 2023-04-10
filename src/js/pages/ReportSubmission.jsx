import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Form, Formik, Field } from 'formik';

const Input = ({ field, form, ...props }) => {
	return <input {...field} {...props} />;
};

const ReportSubmission = () => {
	return (
		<div className="ms-body-wrapper">
			<Header />
			<Sidebar />
			<div className="ms-content-wrapper ms-form-content-wrapper">
				<div className="container-fluid px-0">
					<div className="row h-100">
						<div className="col-md-12">
							<div className="ms-tabs-wrapper ms-add-company-financials pt-4">
								<h5 className="mb-3 form-title">Final Report Submission</h5>
								<div className="ms-heading-bg py-3 px-5 rounded mb-4 ">
									<div className="d-flex align-items-center ms-managed-detail-top">
										<div className="me-5 d-flex align-items-center">
											<h6 className="text-white mb-0">
												<b>TAX YEAR: &nbsp; </b>
											</h6>
											<span className="text-white me-2">
												2023{' '}
												<svg
													width="11"
													height="11"
													viewBox="0 0 11 11"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M8.47913 1.83319C8.29675 1.83319 8.12184 1.90563 7.99288 2.03459L7.62947 2.398L8.60196 3.37049L8.96537 3.00708C9.09433 2.87812 9.16678 2.70321 9.16678 2.52084C9.16678 2.33846 9.09433 2.16355 8.96537 2.03459C8.83641 1.90563 8.6615 1.83319 8.47913 1.83319ZM9.61355 3.65526C9.91442 3.35439 10.0834 2.94633 10.0834 2.52084C10.0834 2.09535 9.91442 1.68728 9.61355 1.38641C9.31268 1.08555 8.90462 0.916519 8.47913 0.916519C8.05363 0.916519 7.64557 1.08555 7.3447 1.38641L6.65744 2.07367C6.65752 2.07359 6.65736 2.07375 6.65744 2.07367C6.65736 2.07375 6.65704 2.07407 6.65696 2.07415L1.05087 7.68025C0.964915 7.7662 0.916626 7.88278 0.916626 8.00434V9.6415C0.916626 9.89463 1.12183 10.0998 1.37496 10.0998H2.97913C3.10068 10.0998 3.21726 10.0515 3.30322 9.9656L9.61355 3.65526ZM7.95378 4.01867L6.98129 3.04618L1.83329 8.19419V9.18317H2.78928L7.95378 4.01867Z"
														fill="white"
													/>
												</svg>
											</span>
										</div>
										<div className="me-5 d-flex align-items-center">
											<h6 className="text-white mb-0">
												<b> COMPANY NAME: &nbsp;</b>
											</h6>

											<span className="text-white me-2">
												{' '}
												023 ONE OK BAKKEN PIPELINE, L.LC..{' '}
												<svg
													width="11"
													height="11"
													viewBox="0 0 11 11"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M8.47913 1.83319C8.29675 1.83319 8.12184 1.90563 7.99288 2.03459L7.62947 2.398L8.60196 3.37049L8.96537 3.00708C9.09433 2.87812 9.16678 2.70321 9.16678 2.52084C9.16678 2.33846 9.09433 2.16355 8.96537 2.03459C8.83641 1.90563 8.6615 1.83319 8.47913 1.83319ZM9.61355 3.65526C9.91442 3.35439 10.0834 2.94633 10.0834 2.52084C10.0834 2.09535 9.91442 1.68728 9.61355 1.38641C9.31268 1.08555 8.90462 0.916519 8.47913 0.916519C8.05363 0.916519 7.64557 1.08555 7.3447 1.38641L6.65744 2.07367C6.65752 2.07359 6.65736 2.07375 6.65744 2.07367C6.65736 2.07375 6.65704 2.07407 6.65696 2.07415L1.05087 7.68025C0.964915 7.7662 0.916626 7.88278 0.916626 8.00434V9.6415C0.916626 9.89463 1.12183 10.0998 1.37496 10.0998H2.97913C3.10068 10.0998 3.21726 10.0515 3.30322 9.9656L9.61355 3.65526ZM7.95378 4.01867L6.98129 3.04618L1.83329 8.19419V9.18317H2.78928L7.95378 4.01867Z"
														fill="white"
													/>
												</svg>
											</span>
										</div>
									</div>
								</div>
								<Formik
									initialValues={{
										taxYear: '2022',
										companyName: 'ONEOK Elkcreek Pipeline',
										state: 'WY',
										reportCategory: 'WY pipeline',
										dueDate: '',
										status: 'Not submitted',
										submissionDate: ''
									}}
									onSubmit={(values) => {
										console.log(values);
									}}
								>
									{(props) => (
										<Form className="resubmission-form row ms-filter-dropdown p-0 px-3 ms-box-shadow-none border-0">
											<div className="col-md-4">
												<div className="ms-border-box p-3 py-4">
													<label>TAX YEAR</label>
													<div className="select-wrapper">
														<Field as="select" name="taxYear">
															<option value="2022">2022</option>
															<option value="2023">2023</option>
															<option value="2024">2024</option>
														</Field>
													</div>
													<label>COMPANY_NAME</label>
													<div className="select-wrapper">
														<Field as="select" name="companyName">
															<option>ONEOK Elkcreek Pipeline</option>
															<option>ONEOK Elkcreek Pipeline</option>
															<option>ONEOK Elkcreek Pipeline</option>
														</Field>
													</div>
													<label>STATE</label>
													<div className="select-wrapper">
														<Field as="select" name="state">
															<option>WY</option>
															<option>2023</option>
															<option>2024</option>
														</Field>
													</div>
													<label>REPORT_CATEGORY</label>
													<div className="select-wrapper">
														<Field as="select" name="reportCategory">
															<option>WY pipeline</option>
															<option>CO pipeline</option>
															<option>CO pipeline</option>
														</Field>
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="ms-border-box p-3 py-4">
													<div className="date-wrapper">
														<label>DUE_DATE</label>
														<Field
															type="date"
															id="start"
															name="dueDate"
														/>
													</div>
													<label>STATUS</label>
													<div className="select-wrapper">
														<Field as="select" name="status">
															<option>Not submitted</option>
															<option>2023</option>
															<option>2024</option>
														</Field>
													</div>
													<div className="date-wrapper">
														<label>SUBMISSION_DATE</label>
														<Field
															type="date"
															id="start"
															name="submissionDate"
														/>
													</div>
												</div>
											</div>
											<div className="col-md-12 mt-auto text-end-wrapper">
												<div className="text-end">
													<a
														href="#"
														className="ms-primary-btn ms-secondary-btn report-submission-edit"
													>
														Edit
													</a>
													<button
														type="submit"
														className="report-submission-save ms-primary-btn ms-2"
													>
														Save
													</button>
												</div>
											</div>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReportSubmission;
