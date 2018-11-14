import React, { Component } from 'react';

import * as actions from '../../../store/actions/index';

import { style } from './style';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { BASE_URL } from '../../config';

import Login from './Login';
import LoginTAC from './LoginTAC';
import Register from './Register';

import LogoImg from '../../assets/digi-logo.svg';
import BgImg from '../../assets/img/background.png';

class Index extends Component {
  state = {
    section: 'Login',
    sectionList: ['Login', 'Register'],
    mobile: null,
    isRegister: false
  };

  _selectSection = section => {
    this.setState({
      section: section,
      mobile: null,
      isRegister: false
    });
  };

  _onRegister = data => {
    this.props.userRegister(data).then(() => {
      if (this.props.userRegisterSuccess) {
        this.setState({
          section: 'Login',
          mobile: data.msisdn,
          isRegister: true
        });
      }
    });
  };

  _onLogin = mobile => {
    this.setState({
      mobile: mobile
    });

    this.props.userLogin({
      msisdn: mobile
    });
  };

  _onResendTAC = () => {
    this.props.userResendTAC({
      msisdn: this.state.mobile
    });
  };

  _onVerifyTAC = TAC => {
    this.props.userVerifyTAC({
      msisdn: this.state.mobile,
      tac: TAC,
      is_register: this.state.isRegister ? 1 : 0
    });
  };

  render() {
    if (this.props.userVerifySuccess) {
      if (this.state.isRegister) return <Redirect to="/onboarding" />; //why here, should be in componentDidMount!!
      else return <Redirect to="/" />;
    }

    return (
      <main style={style.container.outer}>
        <div
          className="d-flex align-items-stretch"
          style={style.container.inner}
        >
          {/* IMAGE */}
          <div style={style.imgBox}>
            <img src={BgImg} alt="bg" style={style.img} />
            <img src={LogoImg} alt="logo" style={style.logo} />
            <div style={style.content.container}>
              <h1
                className="barlow-bold text-light"
                style={style.content.title}
              >
                It’s MyDigi
              </h1>
              <p
                className="barlow-bold text-light"
                style={style.content.tagline}
              >
                Account balance, usage, bills and more...{' '}
              </p>
            </div>
          </div>

          {/* FORM */}
          <div style={style.form.container}>
            <div className="d-flex" style={style.form.btnGroup}>
              {this.state.sectionList.map((section, index) => (
                <button
                  key={index}
                  className={
                    this.state.section === section
                      ? 'btn-liberte-black-fill text-light barlow-semibold'
                      : 'btn-liberte-white-fill barlow-regular'
                  }
                  onClick={() => this._selectSection(section)}
                  style={style.form.btn}
                >
                  {section}
                </button>
              ))}
            </div>

            {this.state.sectionList.map((section, index) => {
              switch (index) {
                case 0:
                  return (
                    <div
                      key={index}
                      className={this.state.section !== section ? 'hidden' : ''}
                    >
                      {this.props.userRegisterSuccess ||
                      this.props.userLoginSuccess ? (
                        <LoginTAC
                          mobile={this.state.mobile}
                          _onResendTAC={this._onResendTAC}
                          _onVerifyTAC={this._onVerifyTAC}
                        />
                      ) : (
                        <Login _onLogin={this._onLogin} />
                      )}
                    </div>
                  );

                case 1:
                  return (
                    <div
                      key={index}
                      className={this.state.section !== section ? 'hidden' : ''}
                    >
                      <Register _onRegister={this._onRegister} />
                    </div>
                  );

                default:
                  return <div key={index} />;
              }
            })}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    userRegisterSuccess: state.authReducer.register,
    userLoginSuccess: state.authReducer.login,
    userVerifySuccess: state.authReducer.verified
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userRegister: body => dispatch(actions.userRegister(body)),
    userLogin: body => dispatch(actions.auth(body)),
    userVerifyTAC: body => dispatch(actions.userVerifyTAC(body)),
    userResendTAC: body => dispatch(actions.userResendTAC(body))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
