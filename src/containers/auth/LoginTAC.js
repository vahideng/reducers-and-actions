import React, { Component } from 'react';
import { style } from './style';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { removeSpaces } from '../../helper/helper';

const mapStateToProps = ( state ) => 
{
	return {
		userVerifyFailed: state.userVerifyFailed
	};
}

class LoginTAC extends Component 
{
	constructor () 
	{
		super ();

		this.state = 
		{
			TAC: null
		}

		this._onChangeTAC = this._onChangeTAC.bind ( this );
		this._resendTAC = this._resendTAC.bind ( this );
		this._verifyTAC = this._verifyTAC.bind ( this );
	}

	_onChangeTAC ( e ) 
	{
		this.setState ( {
			TAC: removeSpaces ( e.target.value )
		} );
	}

	_resendTAC () 
	{
		this.props._onResendTAC ();
	}

	_verifyTAC ( e )
	{
		e.preventDefault ();
		this.props._onVerifyTAC ( this.state.TAC );
	}

	componentDidMount ()
	{
		this.setState ( {
			TAC: null
		} );
	}

	render ()
	{
		return (
			<div id="blueForm">
				<p>Please key in the 6 digit code sent to {this.props.mobile}</p>
				<button className="btn btn-link p-0 barlow-semibold text-liberte-turquoise" 
				style={{marginBottom: 40}}
				onClick={() => this._resendTAC ()}>
					Resend TAC
				</button>

				<form onSubmit={( e ) => this._verifyTAC ( e )}>		
					{this.props.userVerifyFailed &&
					<p className="text-danger" style={style.form.error}>{this.props.userVerifyFailed}</p>}

					<p style={style.form.label}>TAC Number</p>
					{/* <input type="number" className="form-control no-spinners" required={true} style={style.form.inputLast} onChange={this._onChangeMobile} /> */}
					<NumberFormat format="### ###" 
					className="form-control barlow-semibold"
					required={true}
					style={style.form.inputLast}
					value={this.state.TAC}
					onChange={this._onChangeTAC} />

					<button type="submit" className="btn-liberte-blue-fill text-light barlow-semibold" style={style.form.submitBtn}>
						Confirm
					</button>
				</form>
			</div>
		);
	}
}

export default connect ( mapStateToProps ) ( LoginTAC );