import React, { Component } from 'react';

const style = 
{
	top: 
	{
		padding: "20px 125px 17px 125px",
		borderBottom: "1px solid rgba(0,0,0,0.2)"
	},
	bottom:
	{
		padding: "17px 125px 20px 125px"
	},
	mrLink:
	{
		marginRight: 10
	}
}

class FooterSimple extends Component 
{
	render () 
	{
		return (
			<footer style={{fontSize: 14, position: "relative"}}>
				<div style={style.top}>
					<div className="d-flex align-items-center">
						<a style={style.mrLink} href="#">Disclaimer</a>
						<p style={style.mrLink}>|</p>
						<a style={style.mrLink} href="#">Terms & Conditions</a>
						<p style={style.mrLink}>|</p>
						<a style={style.mrLink} href="#">Privacy Notice</a>
						<p style={style.mrLink}>|</p>
						<a style={style.mrLink} href="#">Digi's Code of Conduct</a>
						<p style={style.mrLink}>|</p>
						<a style={style.mrLink} href="#">HSSE Policy</a>
					</div>
				</div>
				
				<div style={style.bottom}>
					<div className="d-flex justify-content-between align-items-center">
						<p className="barlow-light" style={{fontSize: 14}}>Digi Telecommunications, Sdn Bhd (201283-M)</p>

						<p className="barlow-light" style={{fontSize: 14}}>Copyright © All rights reserved.</p>
					</div>
				</div>
			</footer>
		);
	}
}

export default FooterSimple;