import React, { Component } from 'react';
import { style } from './style';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { removeSpaces } from '../../helper/helper';

const mapStateToProps = ( state ) => 
{
	return {
		userLoginFailed: state.userLoginFailed
	};
}

class Login extends Component 
{
	constructor () 
	{
		super ();

		this.state = 
		{
			mobile: ''
		}

		this._onChangeMobile = this._onChangeMobile.bind ( this );
		this._login = this._login.bind ( this );
	}
	
	_onChangeMobile ( e ) 
	{
		this.setState ( {
			mobile: removeSpaces ( e.target.value )
		} );
	}

	_login ( e ) 
	{
		e.preventDefault ();
		this.props._onLogin ( this.state.mobile );
	}

	render () 
	{
		return (
			<form className="w-100" onSubmit={( e ) => this._login ( e )}>
				{this.props.userLoginFailed &&
				<p className="text-danger" style={style.form.error}>{this.props.userLoginFailed}</p>}

				<p style={style.form.label}>Mobile Number</p>
				{/* <input type="number" className="form-control no-spinners" required={true}   /> */}
				<NumberFormat format="### ### ####" 
				className="form-control barlow-semibold"
				required={true}
				style={style.form.inputLast}
				onChange={this._onChangeMobile} />

				<button className="btn-liberte-blue-fill text-light barlow-semibold" style={style.form.submitBtn}>
					Login
				</button>
			</form>
		);
	}
}

export default connect ( mapStateToProps ) ( Login );