import React, { Component } from 'react';
import { style } from './style';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { removeSpaces } from '../../helper/helper';

const mapStateToProps = ( state ) => 
{
	return {
		userRegisterFailed: state.userRegisterFailed
	};
}

class Register extends Component 
{
	constructor () 
	{
		super ();

		this.state = 
		{
			name: '',
			msisdn: '',
			email: ''
		}

		this._onChangeName = this._onChangeName.bind ( this );
		this._onChangeMobile = this._onChangeMobile.bind ( this );
		this._onChangeEmail = this._onChangeEmail.bind ( this );
		this._register = this._register.bind ( this );
	}

	_onChangeName ( e ) 
	{
		this.setState ( {
			name: e.target.value
		} );
	}
	
	_onChangeMobile ( e ) 
	{
		this.setState ( {
			msisdn: removeSpaces ( e.target.value )
		} );
	}

	_onChangeEmail ( e ) 
	{
		this.setState ( {
			email: e.target.value
		} );
	}

	_register ( e ) 
	{
		e.preventDefault ();
		this.props._onRegister ( this.state );
	}

	render () 
	{
		return (
			<form className="w-100" onSubmit={( e ) => this._register ( e )}>
				{this.props.userRegisterFailed &&
				<p className="text-danger" style={style.form.error}>{this.props.userRegisterFailed}</p>}

				<p style={style.form.label}>Name</p>
				<input type="text" className="form-control barlow-semibold" required={true} style={style.form.input} onChange={this._onChangeName} />
	
				<p style={style.form.label}>Mobile Number</p>
				{/* <input type="number" className="form-control no-spinners" required={true} style={style.form.input} onChange={this._onChangeMobile} /> */}
				<NumberFormat format="### ### ####" 
				className="form-control barlow-semibold"
				required={true}
				style={style.form.input}
				onChange={this._onChangeMobile} />

				<p style={style.form.label}>Email</p>
				<input type="email" className="form-control barlow-semibold" required={true} style={{marginBottom: 20, borderRadius: 100}} onChange={this._onChangeEmail} />
	
				<div id="blueForm">
					<div className="d-flex align-items-center" style={{marginBottom: 8}}>
						<input type="checkbox" style={style.form.checkbox} required={true} />
						<p style={{fontSize: 14}}>I agree to <a className="barlow-semibold" href="#">Digi’s Terms & Conditions</a> and <a className="barlow-semibold" href="#">Privacy Notice</a></p>
					</div>

					<div className="d-flex align-items-center" style={{marginBottom: 25}}>
						<input type="checkbox" style={style.form.checkbox} required={true} />
						<p style={{fontSize: 14}}>I agree to receive newsletter email from Liberte</p>
					</div>
				</div>
	
				<button className="btn-liberte-blue-fill text-light barlow-semibold" style={style.form.submitBtn}>
					Create Account
				</button>
			</form>
		);
	}
}

export default connect ( mapStateToProps ) ( Register );