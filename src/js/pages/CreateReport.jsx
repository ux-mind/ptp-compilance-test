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
								<div className="ms-heading-bg py-3 rounded mb-4">
									<div className="d-flex align-items-center ms-managed-detail-top">
										<div className="me-5 d-flex align-items-center">
											<h5 className="text-white mb-0 me-1">
												Create New Final Report
											</h5>
										</div>
									</div>
								</div>
								<Formik
									initialValues={{
										taxYear: '2022',
										companyName: 'ONEOK Elkcreek Pipeline',
										state: 'WY',
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
													<div className="date-wrapper">
														<label>DUE_DATE</label>
														<Field
															type="date"
															id="start"
															name="dueDate"
														/>
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="ms-border-box p-3 py-4">
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
														className="report-cancel ms-primary-btn ms-secondary-btn"
													>
														Cancel
													</a>
													<button
														type="submit"
														className="report-create ms-primary-btn ms-2"
													>
														Create
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
