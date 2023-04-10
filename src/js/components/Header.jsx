import React from 'react';

import mainLogoPNG from '../../assets/images/mein-logo.png';
import mainLogoSVG from '../../assets/images/main-logo.svg';
import ProfileImg from '../../assets/images/profile_image.png';

const Header = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="d-flex justify-content-between align-items-center p-3 mb-3">
						<img src={mainLogoPNG} />
						<div>
							<svg
								className="me-3"
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.9997 3.66668C9.05475 3.66668 7.18949 4.43929 5.81422 5.81456C4.43896 7.18983 3.66634 9.05509 3.66634 11C3.66634 11.963 3.85602 12.9166 4.22456 13.8064C4.59309 14.6961 5.13326 15.5045 5.81422 16.1855C6.49519 16.8664 7.30361 17.4066 8.19333 17.7751C9.08305 18.1437 10.0366 18.3333 10.9997 18.3333C11.9627 18.3333 12.9163 18.1437 13.806 17.7751C14.6957 17.4066 15.5042 16.8664 16.1851 16.1855C16.8661 15.5045 17.4063 14.6961 17.7748 13.8064C18.1433 12.9166 18.333 11.963 18.333 11C18.333 9.05509 17.5604 7.18983 16.1851 5.81456C14.8099 4.43929 12.9446 3.66668 10.9997 3.66668ZM4.51786 4.5182C6.23695 2.79911 8.56852 1.83334 10.9997 1.83334C13.4308 1.83334 15.7624 2.79911 17.4815 4.5182C19.2006 6.23728 20.1663 8.56886 20.1663 11C20.1663 12.2038 19.9292 13.3958 19.4686 14.5079C19.0079 15.6201 18.3327 16.6306 17.4815 17.4818C16.6303 18.333 15.6198 19.0082 14.5076 19.4689C13.3955 19.9296 12.2035 20.1667 10.9997 20.1667C9.79589 20.1667 8.60389 19.9296 7.49174 19.4689C6.37959 19.0082 5.36907 18.333 4.51786 17.4818C3.66666 16.6306 2.99145 15.6201 2.53078 14.5079C2.07011 13.3958 1.83301 12.2038 1.83301 11C1.83301 8.56886 2.79878 6.23728 4.51786 4.5182ZM10.9997 7.33334C9.65042 7.33334 8.68223 7.98077 8.37121 8.64077C8.1554 9.09873 7.60921 9.29503 7.15125 9.07922C6.69329 8.86341 6.49699 8.31721 6.7128 7.85925C7.40828 6.38341 9.15526 5.50001 10.9997 5.50001C12.1917 5.50001 13.3059 5.86105 14.1427 6.48878C14.9799 7.11676 15.583 8.05417 15.583 9.16668C15.583 11.0643 13.9012 12.3824 12.0838 12.7316L12.0836 12.7317C12.0167 12.7445 11.9637 12.7775 11.935 12.8079C11.922 12.8216 11.9175 12.8309 11.9165 12.8333C11.9164 12.8334 11.9164 12.8335 11.9163 12.8337C11.9162 13.3398 11.5058 13.75 10.9997 13.75C10.4934 13.75 10.083 13.3396 10.083 12.8333C10.083 11.7851 10.9178 11.0886 11.7381 10.9312C13.0885 10.6716 13.7497 9.83569 13.7497 9.16668C13.7497 8.76027 13.5323 8.32268 13.0427 7.95539C12.5527 7.58784 11.8335 7.33334 10.9997 7.33334ZM10.083 15.5833C10.083 15.0771 10.4934 14.6667 10.9997 14.6667H11.0088C11.5151 14.6667 11.9255 15.0771 11.9255 15.5833C11.9255 16.0896 11.5151 16.5 11.0088 16.5H10.9997C10.4934 16.5 10.083 16.0896 10.083 15.5833Z"
									fill="currentColor"
								/>
							</svg>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="2" cy="2" r="2" fill="currentColor" />
								<circle cx="8" cy="2" r="2" fill="currentColor" />
								<circle cx="14" cy="2" r="2" fill="currentColor" />
								<circle cx="14" cy="8" r="2" fill="currentColor" />
								<circle cx="8" cy="8" r="2" fill="currentColor" />
								<circle cx="2" cy="8" r="2" fill="currentColor" />
								<circle cx="14" cy="14" r="2" fill="currentColor" />
								<circle cx="8" cy="14" r="2" fill="currentColor" />
								<circle cx="2" cy="14" r="2" fill="currentColor" />
							</svg>
							<img src={mainLogoSVG} className="img-fluid mx-3" alt="Image" />
							<img src={ProfileImg} className="img-fluid" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
