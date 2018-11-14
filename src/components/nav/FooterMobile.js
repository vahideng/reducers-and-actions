import React, { Component } from 'react';

import FacebookIcon from '../../assets/icons/icon-facebook.svg';
import InstagramIcon from '../../assets/icons/icon-instagram.svg';
import GooglePlusIcon from '../../assets/icons/icon-googleplus.svg';
import TwitterIcon from '../../assets/icons/icon-twitter.svg';
import ArrowIcon from '../../assets/icons/icon-arrow-black.svg';

import NortonLogo from '../../assets/icons/logo-norton.svg';
import GeoTrustLogo from '../../assets/icons/logo-geotrust.svg';
import CFMLogo from '../../assets/icons/logo-cfm.svg';

class FooterMobile extends Component 
{
	render () 
	{
		return (
			<footer style={{fontSize: 14, position: "relative"}}>
				<button className="btn btn-dark p-0" 
				style={{width: 38, height: 38, borderRadius: 19, position: "absolute", top: -19, right: 16, fontSize: 12}}
				onClick={() => this.props._scrollToTop ()}
				>
				TOP
				</button>

				{/* SOCIAL */}
				<div style={{padding: 20}}>
					<div className="d-flex justify-content-between align-items-center"
					style={{borderBottom: "1px solid rgba(39,39,39,0.3)", padding: "20px 10px 20px 0px"}}
					>
						<p className="m-0 barlow-semibold">FOLLOW US</p>

						<a href="#" style={{width: 20}}>
							<img src={FacebookIcon} height="17" />
						</a>

						<a href="#" style={{width: 20}}>
							<img src={InstagramIcon} height="17" />
						</a>

						<a href="#" style={{width: 20}}>
							<img src={GooglePlusIcon} height="17" />
						</a>

						<a href="#" style={{width: 20}}>
							<img src={TwitterIcon} height="17" />
						</a>
					</div>
				</div>

				<div style={{padding: "0px 20px 20px 20px"}}>
					{/* COLLAPSABLE LINKS */}
					{/* ABOUT US */}
					<div style={{marginBottom: 25}}>
						<button className="btn-empty bg-transparent w-100 p-0" type="button" data-toggle="collapse" data-target="#collapse-about" aria-expanded="false" aria-controls="collapse-about">
							<div className="mb-1 d-flex justify-content-between align-items-center">
								<p className="m-0 barlow-semibold">ABOUT US</p>
								<img src={ArrowIcon} />
							</div>
						</button>
						<div className="collapse" id="collapse-about">
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
						</div>
					</div>

					{/* GET HELP */}
					<div style={{marginBottom: 25}}>
						<button className="btn-empty bg-transparent w-100 p-0" type="button" data-toggle="collapse" data-target="#collapse-help" aria-expanded="false" aria-controls="collapse-help">
							<div className="mb-1 d-flex justify-content-between align-items-center">
								<p className="m-0 barlow-semibold">GET HELP</p>
								<img src={ArrowIcon} />
							</div>
						</button>
						<div className="collapse" id="collapse-help">
							<a href="#">Quick chat</a>
							<br />
							<a href="#">My Account</a>
							<br />
							<a href="#">Question about your bill</a>
							<br />
							<a href="#">Track Order</a>
							<br />
							<a href="#">Contact us</a>
						</div>
					</div>

					{/* POPULAR */}
					<div>
						<button className="btn-empty bg-transparent w-100 p-0" type="button" data-toggle="collapse" data-target="#collapse-popular" aria-expanded="false" aria-controls="collapse-popular">
							<div className="mb-1 d-flex justify-content-between align-items-center">
								<p className="m-0 barlow-semibold">POPULAR</p>
								<img src={ArrowIcon} />
							</div>
						</button>
						<div className="collapse" id="collapse-popular">
							<a href="#">Switch to Digi</a>
							<br />
							<a href="#">Upgrades</a>
							<br />
							<a href="#">Prepaid plans</a>
							<br />
							<a href="#">Postpaid plans</a>
						</div>
					</div>

					{/* SECURITY */}
					<div className="d-flex justify-content-between align-items-center"
					style={{margin: "20px 0px 20px 0px"}}
					>
							<a href="#">
								<img style={{mixBlendMode: "multiply"}} src={NortonLogo} />
							</a>

							<a href="#">
								<img style={{mixBlendMode: "multiply"}} src={CFMLogo} height="51" />
							</a>

							<a href="#">
								<img style={{mixBlendMode: "multiply"}} src={GeoTrustLogo} />
							</a>
					</div>

					{/* COPYRIGHT */}
					<div className="text-center" 
					style={{borderTop: "1px solid rgba(39,39,39,0.3)", padding: "20px 0px 0px 0px"}}
					>
						<p className="m-0 barlow-regular">Digi Telecommunications, Sdn Bhd (201283-M)</p>
						<p className="m-0 barlow-regular">Copyright © All rights reserved.</p>
					</div>
				</div>
			</footer>
		);
	}
}

export default FooterMobile;