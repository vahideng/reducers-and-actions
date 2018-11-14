import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { animateScroll } from 'react-scroll';

import FooterWeb from './FooterWeb';
import FooterMobile from './FooterMobile';

class Footer extends Component 
{
	constructor () 
	{
		super ();

		this._resize = this._resize.bind ( this );
		this._scrollToTop = this._scrollToTop.bind ( this );
	}
	
	_resize () 
	{
		this.forceUpdate ();
	}

	_scrollToTop () 
	{
		animateScroll.scrollToTop ();
	}

	componentDidMount () 
	{
		window.addEventListener ( 'resize', this._resize );
	}

	componentWillUnmount () 
	{
		window.removeEventListener ( 'resize', this._resize );
	}

	render () 
	{
		return (
			<main>
				<MediaQuery minWidth={768}>
					<FooterWeb _scrollToTop={this._scrollToTop} />
				</MediaQuery>

				<MediaQuery maxWidth={768}>
					<FooterMobile _scrollToTop={this._scrollToTop} />
				</MediaQuery>
			</main>
		);
	}
}

export default Footer;