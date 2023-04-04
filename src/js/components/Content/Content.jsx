import React from 'react';
import Tabs from './Tabs';

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
									<div className="ms-top-area d-flex justify-content-end position-relative mb-2">
										<form className="position-relative">
											<input
												type="text"
												placeholder="Search Something..."
												fdprocessedid="qy0iu"
											/>
											<img
												className="ms-search-icon"
												src="assets/images/icon-search.svg"
												alt="Search Icon"
											/>
											{/* TODO: List 2 */}
											<ul className="nav position-absolute">
												<li className="button-dropdown">
													<a
														// href="javascript:void(0)"
														href="#"
														className="dropdown-toggle"
													>
														<svg
															width="17"
															height="17"
															viewBox="0 0 20 20"
															fill="currentColor"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path d="M19.2188 4.53125H11.7188C11.2873 4.53125 10.9375 4.18148 10.9375 3.75C10.9375 3.31852 11.2873 2.96875 11.7188 2.96875H19.2188C19.6502 2.96875 20 3.31852 20 3.75C20 4.18148 19.6502 4.53125 19.2188 4.53125Z"></path>
															<path d="M0.78125 4.53125H3.25938C3.58188 5.44055 4.45027 6.09375 5.46875 6.09375H7.03125C8.32359 6.09375 9.375 5.04234 9.375 3.75C9.375 2.45766 8.32359 1.40625 7.03125 1.40625H5.46875C4.45027 1.40625 3.58191 2.05945 3.25938 2.96875H0.78125C0.349766 2.96875 0 3.31852 0 3.75C0 4.18148 0.349766 4.53125 0.78125 4.53125ZM5.46875 2.96875H7.03125C7.46203 2.96875 7.8125 3.31922 7.8125 3.75C7.8125 4.18078 7.46203 4.53125 7.03125 4.53125H5.46875C5.03797 4.53125 4.6875 4.18078 4.6875 3.75C4.6875 3.31922 5.03797 2.96875 5.46875 2.96875Z"></path>
															<path d="M0.78125 10.7812H11.0719C11.3944 11.6905 12.2628 12.3438 13.2812 12.3438H14.8438C15.8622 12.3438 16.7306 11.6905 17.0531 10.7812H19.2188C19.6502 10.7812 20 10.4315 20 10C20 9.56852 19.6502 9.21875 19.2188 9.21875H17.0531C16.7306 8.30945 15.8622 7.65625 14.8438 7.65625H13.2812C12.2628 7.65625 11.3944 8.30945 11.0719 9.21875H0.78125C0.349766 9.21875 0 9.56852 0 10C0 10.4315 0.349766 10.7812 0.78125 10.7812ZM13.2812 9.21875H14.8438C15.2745 9.21875 15.625 9.56922 15.625 10C15.625 10.4308 15.2745 10.7812 14.8438 10.7812H13.2812C12.8505 10.7812 12.5 10.4308 12.5 10C12.5 9.56922 12.8505 9.21875 13.2812 9.21875Z"></path>
															<path d="M19.2188 15.4688H9.24063C8.91813 14.5595 8.04973 13.9062 7.03125 13.9062H5.46875C4.45027 13.9062 3.58191 14.5595 3.25938 15.4688H0.78125C0.349766 15.4688 0 15.8185 0 16.25C0 16.6815 0.349766 17.0312 0.78125 17.0312H3.25938C3.58188 17.9405 4.45027 18.5938 5.46875 18.5938H7.03125C8.04973 18.5938 8.91809 17.9405 9.24063 17.0312H19.2188C19.6502 17.0312 20 16.6815 20 16.25C20 15.8185 19.6502 15.4688 19.2188 15.4688ZM7.03125 17.0312H5.46875C5.03797 17.0312 4.6875 16.6808 4.6875 16.25C4.6875 15.8192 5.03797 15.4688 5.46875 15.4688H7.03125C7.46203 15.4688 7.8125 15.8192 7.8125 16.25C7.8125 16.6808 7.46203 17.0312 7.03125 17.0312Z"></path>
														</svg>
													</a>
													<ul
														className="dropdown-menu ms-filter-dropdown position-absolute"
														style={{ display: 'none' }}
													>
														<li>
															<h3>Advanced Search</h3>
															<div className="ms-seperator"></div>
															<div className="d-flex">
																<div>
																	<label>Company</label>
																	<select>
																		<option>Select</option>
																		<option>Alabama</option>
																	</select>
																	<label>State</label>
																	<select>
																		<option>Select</option>
																		<option>Alabama</option>
																		<option>Alaska</option>
																		<option>Arizona</option>
																		<option>Arkansas</option>
																		<option>California</option>
																		<option>Colorado</option>
																		<option>Connecticut</option>
																		<option>Delaware</option>
																		<option>Florida</option>
																		<option>Georgia</option>
																		<option>Hawaii</option>
																		<option>Idaho</option>
																		<option>Illinois</option>
																		<option>Indiana</option>
																		<option>Iowa</option>
																		<option>Kansas</option>
																		<option>Kentucky</option>
																		<option>Louisiana</option>
																		<option>Maine</option>
																		<option>Maryland</option>
																		<option>
																			Massachusetts
																		</option>
																		<option>Michigan</option>
																		<option>Minnesota</option>
																		<option>Mississippi</option>
																		<option>Missouri</option>
																		<option>Montana</option>
																		<option>Nebraska</option>
																		<option>Nevada</option>
																		<option>
																			New Hampshire
																		</option>
																		<option>New Jersey</option>
																		<option>New Mexico</option>
																		<option>New York</option>
																		<option>
																			North Carolina
																		</option>
																		<option>
																			North Dakota
																		</option>
																		<option>Ohio</option>
																		<option>Oklahoma</option>
																		<option>Oregon</option>
																		<option>
																			Pennsylvania
																		</option>
																		<option>
																			Rhode Island
																		</option>
																		<option>
																			South Carolina
																		</option>
																		<option>
																			South Dakota
																		</option>
																		<option>Tennessee</option>
																		<option>Texas</option>
																		<option>Utah</option>
																		<option>Vermont</option>
																		<option>Virginia</option>
																		<option>Washington</option>
																		<option>
																			Washington DC
																		</option>
																		<option>
																			West Virginia
																		</option>
																		<option>Wisconsin</option>
																		<option>Wyoming</option>
																	</select>
																	<label>Tax Year</label>

																	<select>
																		<option>Select</option>
																		<option>2023</option>
																	</select>
																</div>
																<div>
																	<label>Created By</label>
																	<select>
																		<option>Select</option>
																		<option>Alabama</option>
																	</select>
																	<label>Submission Date</label>
																	<input
																		type="date"
																		id="start"
																		name="trip-start"
																		defaultValue="2023-03-23"
																		min="2023-01-01"
																		max="2099-12-31"
																	/>

																	<div
																		id="specific_date"
																		className="colors"
																		style={{ display: 'none' }}
																	>
																		<div className="inner-d-flex d-flex m-0">
																			<div>
																				<input
																					placeholder="From"
																					className="textbox-n"
																					type="text"
																					// onFocus="(this.type='date')"
																					// onBlur="(this.type='text')"
																					id="date"
																				/>
																			</div>
																			<div>
																				<input
																					placeholder="To"
																					className="textbox-n"
																					type="text"
																					// onFocus="(this.type='date')"
																					// onBlur="(this.type='text')"
																					id="date"
																				/>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="ms-filter-buttons d-flex align-items-center justify-content-end mt-3">
																<a
																	href="#."
																	className="ms-primary-btn ms-secondary-btn"
																>
																	Reset
																</a>
																&nbsp;
																<a
																	className="ms-primary-btn ms-apply-btn"
																	href="#."
																>
																	Apply Now
																</a>
															</div>
														</li>
													</ul>
												</li>
											</ul>
										</form>
										<a
											className="ms-icon-btn ms-plus-icon-btn d-flex align-items-center justify-content-center mx-2"
											type="button"
											href="final-submission-add-screen.html"
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
													d="M9.00001 2.70001C9.23871 2.70001 9.46763 2.79483 9.63641 2.96362C9.80519 3.1324 9.90001 3.36132 9.90001 3.60001V8.10001H14.4C14.6387 8.10001 14.8676 8.19483 15.0364 8.36362C15.2052 8.5324 15.3 8.76132 15.3 9.00001C15.3 9.23871 15.2052 9.46763 15.0364 9.63641C14.8676 9.80519 14.6387 9.90001 14.4 9.90001H9.90001V14.4C9.90001 14.6387 9.80519 14.8676 9.63641 15.0364C9.46763 15.2052 9.23871 15.3 9.00001 15.3C8.76132 15.3 8.5324 15.2052 8.36362 15.0364C8.19483 14.8676 8.10001 14.6387 8.10001 14.4V9.90001H3.60001C3.36132 9.90001 3.1324 9.80519 2.96362 9.63641C2.79483 9.46763 2.70001 9.23871 2.70001 9.00001C2.70001 8.76132 2.79483 8.5324 2.96362 8.36362C3.1324 8.19483 3.36132 8.10001 3.60001 8.10001H8.10001V3.60001C8.10001 3.36132 8.19483 3.1324 8.36362 2.96362C8.5324 2.79483 8.76132 2.70001 9.00001 2.70001Z"
													fill="currentColor"
												/>
											</svg>
										</a>
										{/* TODO: Add New Model Popup Start  */}
										<div
											className="modal fade ms-addmodel-popup"
											id="exampleModal"
											tabIndex="-1"
											aria-labelledby="exampleModalLabel"
											aria-hidden="true"
										>
											<div className="modal-dialog modal-dialog-centered">
												<div className="modal-content">
													<div className="ms-model-header text-white text-center">
														Create New Model
													</div>
													<div className="ms-model-body container-fluid">
														<form className="row">
															<div className="col-12">
																<label>Model Name</label>
																<input
																	type="text"
																	placeholder="Unique model name"
																/>
															</div>
															<div className="col-12">
																<label>Company Name</label>
																<select>
																	<option>Select</option>
																	<option>Company 1</option>
																	<option>Company 2</option>
																</select>
															</div>
															<div className="col-12">
																<label>State</label>
																<select>
																	<option>Select</option>
																	<option>Alabama</option>
																	<option>Alaska</option>
																	<option>Arizona</option>
																	<option>Arkansas</option>
																	<option>California</option>
																	<option>Colorado</option>
																	<option>Connecticut</option>
																	<option>Delaware</option>
																	<option>Florida</option>
																	<option>Georgia</option>
																	<option>Hawaii</option>
																	<option>Idaho</option>
																	<option>Illinois</option>
																	<option>Indiana</option>
																	<option>Iowa</option>
																	<option>Kansas</option>
																	<option>Kentucky</option>
																	<option>Louisiana</option>
																	<option>Maine</option>
																	<option>Maryland</option>
																	<option>Massachusetts</option>
																	<option>Michigan</option>
																	<option>Minnesota</option>
																	<option>Mississippi</option>
																	<option>Missouri</option>
																	<option>Montana</option>
																	<option>Nebraska</option>
																	<option>Nevada</option>
																	<option>New Hampshire</option>
																	<option>New Jersey</option>
																	<option>New Mexico</option>
																	<option>New York</option>
																	<option>North Carolina</option>
																	<option>North Dakota</option>
																	<option>Ohio</option>
																	<option>Oklahoma</option>
																	<option>Oregon</option>
																	<option>Pennsylvania</option>
																	<option>Rhode Island</option>
																	<option>South Carolina</option>
																	<option>South Dakota</option>
																	<option>Tennessee</option>
																	<option>Texas</option>
																	<option>Utah</option>
																	<option>Vermont</option>
																	<option>Virginia</option>
																	<option>Washington</option>
																	<option>Washington DC</option>
																	<option>West Virginia</option>
																	<option>Wisconsin</option>
																	<option>Wyoming</option>
																</select>
															</div>
															<div className="col-6">
																<button
																	type="button"
																	className="btn ms-primary-btn ms-secondary-btn"
																	data-bs-dismiss="modal"
																>
																	Cancel
																</button>
															</div>
															<div className="col-6">
																<button
																	type="button"
																	className="btn ms-primary-btn"
																>
																	Create
																</button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
										{/* TODO: Add New Model Popup End  */}
										<div className="ms-icon-btn ms-dots-icon d-flex align-items-center justify-content-center">
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
													d="M10.0607 15.3107C9.77936 15.592 9.39783 15.75 9 15.75C8.60217 15.75 8.22064 15.592 7.93934 15.3107C7.65804 15.0294 7.5 14.6478 7.5 14.25C7.5 13.8522 7.65804 13.4706 7.93934 13.1893C8.22064 12.908 8.60218 12.75 9 12.75C9.39783 12.75 9.77936 12.908 10.0607 13.1893C10.342 13.4706 10.5 13.8522 10.5 14.25C10.5 14.6478 10.342 15.0294 10.0607 15.3107ZM10.0607 10.0607C9.77936 10.342 9.39783 10.5 9 10.5C8.60218 10.5 8.22064 10.342 7.93934 10.0607C7.65804 9.77936 7.5 9.39782 7.5 9C7.5 8.60217 7.65804 8.22064 7.93934 7.93934C8.22064 7.65804 8.60218 7.5 9 7.5C9.39783 7.5 9.77936 7.65804 10.0607 7.93934C10.342 8.22064 10.5 8.60217 10.5 9C10.5 9.39783 10.342 9.77936 10.0607 10.0607ZM10.0607 4.81066C9.77936 5.09197 9.39782 5.25 9 5.25C8.60218 5.25 8.22065 5.09197 7.93934 4.81066C7.65804 4.52936 7.5 4.14782 7.5 3.75C7.5 3.35218 7.65804 2.97064 7.93934 2.68934C8.22065 2.40803 8.60218 2.25 9 2.25C9.39782 2.25 9.77936 2.40803 10.0607 2.68934C10.342 2.97064 10.5 3.35218 10.5 3.75C10.5 4.14782 10.342 4.52936 10.0607 4.81066Z"
													fill="currentColor"
												/>
											</svg>
											<div className="ms-dots-dropdown position-absolute">
												<a href="#.">
													<svg
														width="16"
														height="16"
														viewBox="0 0 16 16"
														fill="currentColor"
														xmlns="http://www.w3.org/2000/svg"
														className="me-2"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z"
														></path>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z"
														></path>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z"
														></path>
													</svg>
													Export
												</a>
											</div>
										</div>
									</div>
									<div className="ms-table-wrapper position-relative">
										<table className="ms-table ms-table-border ms-models-page-table ms-checkbox-table">
											<tbody>
												<tr>
													<th>
														<input id="select" type="checkbox" />
														<label htmlFor="select"></label>
													</th>
													<th>
														TAX YEAR&nbsp;
														<img src="assets/images/Sorting.png" />
													</th>
													<th>
														COMPANY&nbsp;
														<img src="assets/images/Sorting.png" />
													</th>
													<th>
														STATE&nbsp;
														<img src="assets/images/Sorting.png" />
													</th>
													<th>
														REPORT CATEGORY&nbsp;
														<img src="assets/images/Sorting.png" />
													</th>
													{/* <th>MODEL NAME</th> */}
													<th>DUE DATE</th>
													<th>STATUS</th>
													<th>
														SUBMISSION DATE&nbsp;
														<img src="assets/images/Sorting.png" />
													</th>
													<th>REPORT</th>
													{/* 
													<th>CREATED DATE</th>
													<th>MODIFIED DATE</th> 
													*/}
													<th>OPTIONS</th>
												</tr>
												<tr>
													<td>
														<input id="one" type="checkbox" />
														<label htmlFor="one"></label>
													</td>
													<td>2022</td>
													<td>
														<a href="#">ONEOK Elkcreek Pipeline </a>
													</td>
													<td>CO</td>
													<td>WY Pipeline</td>
													{/* <!--<td><a className="ms-model-link" href="scenario_screen.html">Bakken CO 2021 Model</a></td>--> */}
													<td>07/05/2022</td>
													<td>WY Pipeline</td>
													<td>07/05/2022</td>
													<td>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-file-pdf"
															viewBox="0 0 16 16"
														>
															<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
															<path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
														</svg>{' '}
													</td>
													<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
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
														<div className="ms-dots-dropdown position-absolute">
															<a href="#.">
																{/* <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																		<path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
																		<path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
																</svg>  */}
																<img src="assets/images/addcomment.png" />
																&nbsp; Add Comment&nbsp;
																<img src="assets/images/next.png" />
															</a>
															<a href="#.">
																{/* <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																		<path fillRule="evenodd" clipRule="evenodd" d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z" />
																		<path fillRule="evenodd" clipRule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" />
																		<path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z" />
																</svg>  */}
																<img src="assets/images/uploadreport.png" />
																&nbsp; Upload Report
															</a>
															<a href="#.">
																{/* <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																		<path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
																		<path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
																</svg>  */}
																<img src="assets/images/changestatus.png" />
																&nbsp; Change Status
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<input id="two" type="checkbox" />
														<label htmlFor="two"></label>
													</td>
													<td>2021</td>
													<td>
														<a href="#">ONEOK Elkcreek Pipeline </a>
													</td>
													<td>CO</td>
													<td>CO Pipeline</td>
													{/* <td><a className="ms-model-link" href="scenario_screen.html">Bakken CO 2021 Model</a></td> */}
													<td>15/08/2023</td>
													<td>CO Pipeline</td>
													<td>15/08/2023</td>
													<td>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-file-pdf"
															viewBox="0 0 16 16"
														>
															<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
															<path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
														</svg>{' '}
													</td>
													<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
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
														<div className="ms-dots-dropdown position-absolute">
															<a href="#.">
																{/* <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																		<path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
																		<path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
																</svg> */}
																<img src="assets/images/addcomment.png" />
																&nbsp; Add Comment&nbsp;
																<img src="assets/images/next.png" />
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z" />
                                                                    </svg>  --> */}
																<img src="assets/images/uploadreport.png" />
																&nbsp; Upload Report
															</a>
															<a href="#.">
																{/* {/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/changestatus.png" />
																&nbsp; Change Status
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<input id="three" type="checkbox" />
														<label htmlFor="three"></label>
													</td>
													<td>2020</td>
													<td>
														<a href="#">ONEOK Elkcreek Pipeline </a>
													</td>
													<td>CO</td>
													<td>EY Pipeline</td>
													{/* 					{/* <!--<td><a className="ms-model-link" href="scenario_screen.html">Bakken CO 2021 Model</a></td>--> */}
													<td>28/10/2022</td>
													<td>EY Pipeline</td>
													<td>28/10/2022</td>
													<td>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-file-pdf"
															viewBox="0 0 16 16"
														>
															<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
															<path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
														</svg>{' '}
													</td>
													<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
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
														<div className="ms-dots-dropdown position-absolute">
															<a href="#.">
																{/* {/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/addcomment.png" />
																&nbsp; Add Comment&nbsp;
																<img src="assets/images/next.png" />
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z" />
                                                                    </svg>  --> */}
																<img src="assets/images/uploadreport.png" />
																&nbsp; Upload Report
															</a>
															<a href="#.">
																{/* {/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/changestatus.png" />
																&nbsp; Change Status
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<input id="four" type="checkbox" />
														<label htmlFor="four"></label>
													</td>
													<td>2019</td>
													<td>
														<a href="#">ONEOK Elkcreek Pipeline </a>
													</td>
													<td>CO</td>
													<td>CO Pipeline</td>
													{/* <!--- <td><a className="ms-model-link" href="scenario_screen.html">Bakken CO 2021 Model</a></td>--> */}
													<td>16/08/2022</td>
													<td>CO Pipeline</td>
													<td>16/08/2022</td>

													<td>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-file-pdf"
															viewBox="0 0 16 16"
														>
															<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
															<path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
														</svg>{' '}
													</td>
													<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
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
														<div className="ms-dots-dropdown position-absolute">
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/addcomment.png" />
																&nbsp; Add Comment&nbsp;
																<img src="assets/images/next.png" />
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z" />
                                                                    </svg>  --> */}
																<img src="assets/images/uploadreport.png" />
																&nbsp; Upload Report
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/changestatus.png" />
																&nbsp; Change Status
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<input id="five" type="checkbox" />
														<label htmlFor="five"></label>
													</td>
													<td>2018</td>
													<td>
														<a href="#">ONEOK Elkcreek Pipeline </a>
													</td>
													<td>CO</td>
													<td>WY Pipeline</td>
													{/* <!--<td><a className="ms-model-link" href="scenario_screen.html">Bakken CO 2021 Model</a></td>--> */}
													<td>18/09/2020</td>
													<td>WY Pipeline</td>
													<td>18/09/2020</td>
													<td>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-file-pdf"
															viewBox="0 0 16 16"
														>
															<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
															<path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
														</svg>{' '}
													</td>
													<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
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
														<div className="ms-dots-dropdown position-absolute">
															<a href="#.">
																{/* {/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/addcomment.png" />
																&nbsp; Add Comment&nbsp;
																<img src="assets/images/next.png" />
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z" />
                                                                    </svg>  --> */}
																<img src="assets/images/uploadreport.png" />
																&nbsp; Upload Report
															</a>
															<a href="#.">
																{/* {/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/changestatus.png" />
																&nbsp; Change Status
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<input id="six" type="checkbox" />
														<label htmlFor="six"></label>
													</td>
													<td>2017</td>
													<td>
														<a href="#">ONEOK Elkcreek Pipeline </a>
													</td>
													<td>CO</td>
													<td>WY Pipeline</td>
													{/* <!--<td><a className="ms-model-link" href="scenario_screen.html">Bakken CO 2021 Model</a></td>--> */}
													<td>07/05/2022</td>
													<td>WY Pipeline</td>
													<td>12/06/2023</td>
													<td>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-file-pdf"
															viewBox="0 0 16 16"
														>
															<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
															<path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
														</svg>{' '}
													</td>
													<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
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
														<div className="ms-dots-dropdown position-absolute">
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/addcomment.png" />
																&nbsp; Add Comment&nbsp;
																<img src="assets/images/next.png" />
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z" />
                                                                    </svg>  --> */}
																<img src="assets/images/uploadreport.png" />
																&nbsp; Upload Report
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/changestatus.png" />
																&nbsp; Change Status
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<input id="seven" type="checkbox" />
														<label htmlFor="seven"></label>
													</td>
													<td>2016</td>
													<td>
														<a href="#">ONEOK Elkcreek Pipeline </a>
													</td>
													<td>CO</td>
													<td>WY Pipeline</td>
													{/* <!-- <td><a className="ms-model-link" href="scenario_screen.html">Bakken CO 2021 Model</a></td>--> */}
													<td>07/05/2022</td>
													<td>WY Pipeline</td>
													<td>12/06/2023</td>
													<td>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-file-pdf"
															viewBox="0 0 16 16"
														>
															<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
															<path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
														</svg>{' '}
													</td>
													<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
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
														<div className="ms-dots-dropdown position-absolute">
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/addcomment.png" />
																&nbsp; Add Comment&nbsp;
																<img src="assets/images/next.png" />
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z" />
                                                                    </svg>  --> */}
																<img src="assets/images/uploadreport.png" />
																&nbsp; Upload Report
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/changestatus.png" />
																&nbsp; Change Status
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<input id="eight" type="checkbox" />
														<label htmlFor="eight"></label>
													</td>
													<td>2015</td>
													<td>
														<a href="#">ONEOK Elkcreek Pipeline </a>
													</td>
													<td>CO</td>
													<td>WY Pipeline</td>
													{/* <!--- <td><a className="ms-model-link" href="scenario_screen.html">Bakken CO 2021 Model</a></td>--> */}
													<td>07/05/2022</td>
													<td>WY pipeline</td>
													<td>12/06/2023</td>
													<td>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-file-pdf"
															viewBox="0 0 16 16"
														>
															<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
															<path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
														</svg>{' '}
													</td>
													<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
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
														<div className="ms-dots-dropdown position-absolute">
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/addcomment.png" />
																&nbsp; Add Comment&nbsp;
																<img src="assets/images/next.png" />
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z" />
                                                                    </svg>  --> */}
																<img src="assets/images/uploadreport.png" />
																&nbsp; Upload Report
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/changestatus.png" />
																&nbsp; Change Status
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<input id="nine" type="checkbox" />
														<label htmlFor="nine"></label>
													</td>
													<td>2014</td>
													<td>
														<a href="#">ONEOK Elkcreek Pipeline </a>
													</td>
													<td>CO</td>
													<td>WY Pipeline</td>
													{/* <!--<td><a className="ms-model-link" href="scenario_screen.html">Bakken CO 2021 Model</a></td>--> */}
													<td>07/05/2022</td>
													<td>WY Pipeline</td>
													<td>12/06/2023</td>
													<td>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-file-pdf"
															viewBox="0 0 16 16"
														>
															<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
															<path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
														</svg>{' '}
													</td>
													<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
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
														<div className="ms-dots-dropdown position-absolute">
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/addcomment.png" />
																&nbsp; Add Comment&nbsp;
																<img src="assets/images/next.png" />
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z" />
                                                                    </svg>  --> */}
																<img src="assets/images/uploadreport.png" />
																&nbsp; Upload Report
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/changestatus.png" />
																&nbsp; Change Status
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<input id="ten" type="checkbox" />
														<label htmlFor="ten"></label>
													</td>
													<td>2013</td>
													<td>
														<a href="#">ONEOK Elkcreek Pipeline </a>
													</td>
													<td>CO</td>
													<td>WY Pipeline</td>
													{/* <!-- <td><a className="ms-model-link" href="scenario_screen.html">Bakken CO 2021 Model</a></td>--> */}
													<td>07/05/2022</td>
													<td>WY Pipeline</td>
													<td>12/06/2023</td>
													<td>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-file-pdf"
															viewBox="0 0 16 16"
														>
															<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
															<path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
														</svg>{' '}
													</td>
													<td className="ms-options-icon ms-dots-icon position-relative d-flex align-items-center justify-content-center">
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
														<div className="ms-dots-dropdown position-absolute">
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/addcomment.png" />
																&nbsp; Add Comment&nbsp;
																<img src="assets/images/next.png" />
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00016 9.33337C2.36835 9.33337 2.66683 9.63185 2.66683 10V12.6667C2.66683 12.8435 2.73707 13.0131 2.86209 13.1381C2.98712 13.2631 3.15669 13.3334 3.3335 13.3334H12.6668C12.8436 13.3334 13.0132 13.2631 13.1382 13.1381C13.2633 13.0131 13.3335 12.8435 13.3335 12.6667V10C13.3335 9.63185 13.632 9.33337 14.0002 9.33337C14.3684 9.33337 14.6668 9.63185 14.6668 10V12.6667C14.6668 13.1971 14.4561 13.7058 14.081 14.0809C13.706 14.456 13.1973 14.6667 12.6668 14.6667H3.3335C2.80306 14.6667 2.29436 14.456 1.91928 14.0809C1.54421 13.7058 1.3335 13.1971 1.3335 12.6667V10C1.3335 9.63185 1.63197 9.33337 2.00016 9.33337Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.33337C8.36835 1.33337 8.66683 1.63185 8.66683 2.00004V10C8.66683 10.3682 8.36835 10.6667 8.00016 10.6667C7.63197 10.6667 7.3335 10.3682 7.3335 10V2.00004C7.3335 1.63185 7.63197 1.33337 8.00016 1.33337Z" />
                                                                    </svg>  --> */}
																<img src="assets/images/uploadreport.png" />
																&nbsp; Upload Report
															</a>
															<a href="#.">
																{/* <!-- <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42716 8C1.50002 8.12591 1.59662 8.28637 1.71628 8.47165C2.02362 8.94754 2.47878 9.5804 3.06969 10.2107C4.26368 11.4843 5.933 12.6667 8 12.6667C10.067 12.6667 11.7363 11.4843 12.9303 10.2107C13.5212 9.5804 13.9764 8.94754 14.2837 8.47165C14.4034 8.28637 14.5 8.12591 14.5728 8C14.5 7.87409 14.4034 7.71363 14.2837 7.52835C13.9764 7.05246 13.5212 6.4196 12.9303 5.78929C11.7363 4.51571 10.067 3.33333 8 3.33333C5.933 3.33333 4.26368 4.51571 3.06969 5.78929C2.47878 6.4196 2.02362 7.05246 1.71628 7.52835C1.59662 7.71363 1.50002 7.87409 1.42716 8ZM15.3333 8C15.9296 7.70186 15.9295 7.70163 15.9294 7.70139L15.9283 7.69925L15.926 7.69469L15.9184 7.67988C15.9121 7.66752 15.9031 7.65021 15.8915 7.62829C15.8683 7.58447 15.8347 7.52215 15.7907 7.44399C15.7028 7.28776 15.5734 7.06768 15.4038 6.80498C15.0653 6.28088 14.5621 5.5804 13.903 4.87737C12.597 3.48429 10.5997 2 8 2C5.40033 2 3.40299 3.48429 2.09698 4.87737C1.43789 5.5804 0.93471 6.28088 0.596224 6.80498C0.426567 7.06768 0.297195 7.28776 0.209314 7.44399C0.165349 7.52215 0.131693 7.58447 0.108502 7.62829C0.0969045 7.65021 0.0879168 7.66752 0.0815586 7.67988L0.0739933 7.69469L0.0716926 7.69925L0.0709134 7.7008C0.0707909 7.70104 0.0703819 7.70186 0.666667 8L0.0703819 7.70186C-0.0234606 7.88954 -0.0234606 8.11046 0.0703819 8.29814L0.666667 8C0.0703819 8.29814 0.0702594 8.2979 0.0703819 8.29814L0.0716926 8.30075L0.0739933 8.30531L0.0815586 8.32012C0.0879168 8.33248 0.0969045 8.34979 0.108502 8.37171C0.131693 8.41553 0.165349 8.47785 0.209314 8.55601C0.297195 8.71224 0.426567 8.93232 0.596224 9.19502C0.93471 9.71913 1.43789 10.4196 2.09698 11.1226C3.40299 12.5157 5.40033 14 8 14C10.5997 14 12.597 12.5157 13.903 11.1226C14.5621 10.4196 15.0653 9.71913 15.4038 9.19502C15.5734 8.93232 15.7028 8.71224 15.7907 8.55601C15.8347 8.47785 15.8683 8.41553 15.8915 8.37171C15.9031 8.34979 15.9121 8.33248 15.9184 8.32012L15.926 8.30531L15.9283 8.30075L15.9291 8.2992C15.9292 8.29896 15.9296 8.29814 15.3333 8ZM15.3333 8L15.9296 8.29814C16.0235 8.11046 16.0232 7.88907 15.9294 7.70139L15.3333 8Z" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671ZM5.3335 8.00004C5.3335 6.52728 6.5274 5.33337 8.00016 5.33337C9.47292 5.33337 10.6668 6.52728 10.6668 8.00004C10.6668 9.4728 9.47292 10.6667 8.00016 10.6667C6.5274 10.6667 5.3335 9.4728 5.3335 8.00004Z" />
                                                                    </svg> --> */}
																<img src="assets/images/changestatus.png" />
																&nbsp; Change Status
															</a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
										<div className="row ms-pagination pt-3">
											<div className="col-4"></div>
											<div className="col-4">
												<div className="ms-pagination-numbers">
													<nav aria-label="Page navigation example">
														<ul className="pagination mb-0 justify-content-center">
															<li className="page-item">
																<a
																	className="page-link"
																	href="#"
																	aria-label="Previous"
																>
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
																<a
																	className="page-link active"
																	href="#"
																>
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
																<a
																	className="page-link"
																	href="#"
																	aria-label="Next"
																>
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
													<select
														className="form-select ms-2"
														aria-label="Default select example"
													>
														<option defaultValue>50</option>
														<option defaultValue="1">100</option>
														<option defaultValue="2">150</option>
													</select>
												</div>
											</div>
										</div>
										<div className="ms-defaultValue-sticky-box d-flex align-items-center justify-content-between d-none">
											<div className="text-white d-flex align-items-center">
												<svg
													width="12"
													height="12"
													viewBox="0 0 12 12"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
														fill="white"
													/>
												</svg>
												<span className="ms-3 me-2">5</span>
												Items defaultValue
											</div>
											<div className="ms-download-icon d-flex align-items-center justify-content-center">
												<svg
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17ZM6.293 9.293C6.48053 9.10553 6.73484 9.00021 7 9.00021C7.26516 9.00021 7.51947 9.10553 7.707 9.293L9 10.586V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V10.586L12.293 9.293C12.3852 9.19749 12.4956 9.12131 12.6176 9.0689C12.7396 9.01649 12.8708 8.9889 13.0036 8.98775C13.1364 8.9866 13.2681 9.0119 13.391 9.06218C13.5139 9.11246 13.6255 9.18671 13.7194 9.28061C13.8133 9.3745 13.8875 9.48615 13.9378 9.60905C13.9881 9.73194 14.0134 9.86362 14.0123 9.9964C14.0111 10.1292 13.9835 10.2604 13.9311 10.3824C13.8787 10.5044 13.8025 10.6148 13.707 10.707L10.707 13.707C10.5195 13.8945 10.2652 13.9998 10 13.9998C9.73484 13.9998 9.48053 13.8945 9.293 13.707L6.293 10.707C6.10553 10.5195 6.00021 10.2652 6.00021 10C6.00021 9.73484 6.10553 9.48053 6.293 9.293Z"
														fill="#4ED6BE"
													/>
												</svg>
											</div>
										</div>
									</div>
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
