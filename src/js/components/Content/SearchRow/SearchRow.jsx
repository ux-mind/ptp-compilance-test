import React from 'react';
import searchIcon from '../../../../assets/images/icon-search.svg';
import { Link } from 'react-router-dom';

const SearchRow = () => {
	return (
		<div className="ms-top-area d-flex justify-content-end position-relative mb-2">
			<form className="position-relative">
				<input type="text" placeholder="Search Something..." fdprocessedid="qy0iu" />
				<img className="ms-search-icon" src={searchIcon} alt="Search Icon" />
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
									<a href="#." className="ms-primary-btn ms-secondary-btn">
										Reset
									</a>
									&nbsp;
									<a className="ms-primary-btn ms-apply-btn" href="#.">
										Apply Now
									</a>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</form>
			<Link
				to="/final-submission-add-screen"
				className="ms-icon-btn ms-plus-icon-btn d-flex align-items-center justify-content-center mx-2"
				type="button"
				// href="final-submission-add-screen.html"
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
			</Link>
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
									<input type="text" placeholder="Unique model name" />
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
									<button type="button" className="btn ms-primary-btn">
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
	);
};

export default SearchRow;
