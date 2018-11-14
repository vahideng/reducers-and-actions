import React, { Component } from 'react';

import FacebookIcon from '../../assets/icons/icon-facebook.svg';
import InstagramIcon from '../../assets/icons/icon-instagram.svg';
import GooglePlusIcon from '../../assets/icons/icon-googleplus.svg';
import TwitterIcon from '../../assets/icons/icon-twitter.svg';
import ArrowIcon from '../../assets/icons/icon-arrow.svg';

import NortonLogo from '../../assets/icons/logo-norton.svg';
import GeoTrustLogo from '../../assets/icons/logo-geotrust.svg';
import CFMLogo from '../../assets/icons/logo-cfm.svg';

class FooterWeb extends Component 
{
	render () 
	{
		return (
			<footer style={{fontSize: 14, position: "relative"}}>
				<button className="btn btn-dark p-0" 
				style={{width: 38, height: 38, borderRadius: 19, position: "absolute", top: -19, right: 124}}
				onClick={() => this.props._scrollToTop ()}
				>
					<img className="rotate-180" style={{paddingTop: 5}} src={ArrowIcon} width="14" />
				</button>
				
				<div className="footer-top">
					<div className="row">
						<div className="col-sm-4 col-md-3 col-lg-2 mb-4">
							<p className="m-0 barlow-semibold">ABOUT US</p>

							<p className="m-0 barlow-regular" style={{paddingTop: 20}}>
								<a href="#">Corporate Overview</a>
								<br />
								<a href="#">Corporate Responsibility</a>
								<br />
								<a href="#">Media</a>
								<br />
								<a href="#">Investor Relations</a>
								<br />
								<a href="#">Collaboration</a>
								<br />
								<a href="#">Careers</a>
								<br />
								<a href="#">Partnership Enquiries</a>
							</p>
						</div>

						<div className="col-sm-4 col-md-3 col-lg-2 mb-4">
							<p className="m-0 barlow-semibold">GET HELP</p>

							<p className="m-0 barlow-regular" style={{paddingTop: 20}}>
								<a href="#">Quick chat</a>
								<br />
								<a href="#">My Account</a>
								<br />
								<a href="#">Question about your bill</a>
								<br />
								<a href="#">Track Order</a>
								<br />
								<a href="#">Contact us</a>
							</p>
						</div>

						<div className="col-sm-4 col-md-3 col-lg-2 mb-4">
							<p className="m-0 barlow-semibold">POPULAR</p>

							<p className="m-0 barlow-regular" style={{paddingTop: 20}}>
								<a href="#">Switch to Digi</a>
								<br />
								<a href="#">Upgrades</a>
								<br />
								<a href="#">Prepaid plans</a>
								<br />
								<a href="#">Postpaid plans</a>
							</p>
						</div>

						<div className="col-sm-12 col-md-8 col-lg-6" style={{position: "relative"}}>
							<div className="row">
								<div className="col-md-12 col-lg-12">
									<div className="footer-socials">
										<p className="m-0 barlow-semibold">FOLLOW US</p>

										<div className="d-flex" style={{paddingTop: 26}}>
											<a href="#" style={{marginRight: 70}}>
												<img src={FacebookIcon} height="17" />
											</a>

											<a href="#" style={{marginRight: 70}}>
												<img src={InstagramIcon} height="17" />
											</a>

											<a href="#" style={{marginRight: 70}}>
												<img src={GooglePlusIcon} height="17" />
											</a>

											<a href="#">
												<img src={TwitterIcon} height="17" />
											</a>
										</div>
									</div>
								</div>

								<div className="col-md-12 col-lg-12">
									<div className="footer-socials">
										<div className="d-flex align-items-end mb-4" style={{marginTop: 60}}>
											<a href="#" style={{marginRight: 38}}>
												<img style={{mixBlendMode: "multiply"}} src={NortonLogo} />
											</a>

											<a href="#" style={{marginRight: 29}}>
												<img style={{mixBlendMode: "multiply"}} src={GeoTrustLogo} />
											</a>

											<a href="#">
												<img style={{mixBlendMode: "multiply"}} src={CFMLogo} />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="d-flex justify-content-between align-items-center"
					style={{marginTop: 20}}
					>
						<p className="m-0 barlow-light" style={{fontSize: 14}}>Digi Telecommunications, Sdn Bhd (201283-M)</p>

						<p className="m-0 barlow-light" style={{fontSize: 14}}>Copyright © All rights reserved.</p>
					</div>
				</div>
			</footer>
		);
	}
}

export default FooterWeb;