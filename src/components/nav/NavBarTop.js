import React, { Component } from 'react';
import style from './NavBarTop.style';
import { connect } from 'react-redux';
import { loadCategoryList } from '../../actions/general/category';
import { userLogout } from '../../actions/auth/userLogin';
import { withRouter } from 'react-router-dom';
import posed from 'react-pose';

import Logo from '../../assets/digi-logo.svg';
import SearchIcon from '../../assets/icons/icon-search.svg';
import UserIcon from '../../assets/icons/icon-user.svg';
import UserActiveIcon from '../../assets/icons/icon-user-active.svg';
import ArrowIcon from '../../assets/icons/icon-arrow-grey.svg';
import CloseIcon from '../../assets/icons/icon-close-black.svg';

const CollapseBox = posed.div({
  visible: { y: 0, scaleY: 1, transition: { ease: 'linear', duration: 100 } },
  hidden: {
    y: '-50%',
    scaleY: 0,
    transition: { ease: 'linear', duration: 100 }
  }
});

const mapStateToProps = state => {
  return {
    dashSubsData: state.dashSubsData,
    categoryListLoadFailed: state.categoryListLoadFailed,
    categoryList: state.categoryList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCategoryList: () => dispatch(loadCategoryList()),
    userLogout: () => dispatch(userLogout())
  };
};

class NavBarTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCategory: false,
      showSearch: false,
      showUserMenu: false,
      searchKeyword: null,
      canUseCategory:
        props.canUseCategory != undefined ? props.canUseCategory : true,
      canSearch: props.canSearch != undefined ? props.canSearch : true,
      canOpenProfile:
        props.canOpenProfile != undefined ? props.canOpenProfile : true
    };

    this._showCategory = this._showCategory.bind(this);
    this._showSearch = this._showSearch.bind(this);
    this._onChangeKeyword = this._onChangeKeyword.bind(this);
    this._onSearch = this._onSearch.bind(this);
  }

  _showCategory() {
    this.setState((prevState, props) => ({
      showCategory: !prevState.showCategory
    }));
  }

  _showSearch() {
    this.setState({
      showSearch: !this.state.showSearch
    });
  }

  _showUserMenu() {
    this.setState({
      showUserMenu: !this.state.showUserMenu
    });
  }

  _onChangeKeyword(e) {
    this.setState({
      searchKeyword: e.target.value
    });
  }

  _onSearch(e) {
    e.preventDefault();
    this.props.history.push('/search/' + this.state.searchKeyword);
  }

  _onLogin() {
    this.props.history.push('/auth');
  }

  _onLogout() {
    this.props.userLogout().then(() => {
      this.props.history.push('/');
      window.location.reload();
    });
  }

  componentDidMount() {
    if (this.state.canUseCategory) this.props.loadCategoryList();
  }

  render() {
    return (
      <div style={style.container}>
        {this.props.pageTitle && (
          <p className="text-center barlow-bold" style={style.title}>
            {this.props.pageTitle}
          </p>
        )}

        <div
          className="d-flex justify-content-between align-items-center"
          style={style.containerInner}
        >
          <div className="d-flex align-items-center">
            <a href="/">
              <img src={Logo} width={78} height={70} alt="logo" />
            </a>

            {this.state.canUseCategory && (
              <button
                className="btn-liberte-white-fill"
                style={style.categoryBtn}
                onClick={() => this._showCategory()}
              >
                <div className="d-flex align-items-center">
                  <p className="barlow-semibold">CATEGORY</p>
                  <img src={ArrowIcon} style={style.categoryArrowIcon} />
                </div>
              </button>
            )}
          </div>

          <div className="d-flex align-items-center">
            {this.state.canSearch && (
              <div
                className="d-flex align-items-center"
                style={style.searchBtn}
              >
                <button
                  className="btn-empty bg-transparent"
                  onClick={() => this._showSearch()}
                >
                  <img
                    src={SearchIcon}
                    alt="icon-search"
                    width="18"
                    height="18"
                  />
                </button>
              </div>
            )}

            {this.state.canOpenProfile &&
              (!this.props.dashSubsData ? (
                <button
                  className="btn-circular"
                  style={style.userBtn}
                  onClick={() => this._onLogin()}
                >
                  <img src={UserIcon} alt="icon-user" width="18" />
                  <span className="barlow-semibold" style={style.loginLabel}>
                    Login
                  </span>
                </button>
              ) : (
                <div style={style.searchBtn}>
                  <button
                    className="btn-empty bg-transparent"
                    type="button"
                    onClick={() => this._showUserMenu()}
                  >
                    <img src={UserActiveIcon} alt="icon-search" width="18" />
                  </button>
                </div>
              ))}
          </div>
        </div>

        <CollapseBox
          pose={this.state.showCategory ? 'visible' : 'hidden'}
          style={style.categoryListBox}
        >
          {this.props.categoryList && (
            <div id="blackBoldForm" style={style.categoryList}>
              {this.props.categoryList.map((cat, index) => (
                <div style={style.categoryItem}>
                  <a key={index} href={'/listing/' + cat.name}>
                    {cat.name}
                  </a>
                  <br />
                </div>
              ))}
            </div>
          )}

          {!this.props.categoryList && (
            <p className="barlow-semibold" style={style.categoryList}>
              Category not available.
            </p>
          )}
        </CollapseBox>

        <CollapseBox
          pose={this.state.showUserMenu ? 'visible' : 'hidden'}
          style={style.userMenu}
        >
          <div className="ui-shadow">
            <a className="dropdown-item" style={style.userMenuBtn} href="/">
              My Subscriptions
            </a>
            <a
              className="dropdown-item"
              style={style.userMenuBtn}
              href="/profile"
            >
              Profile
            </a>
            <a
              className="dropdown-item"
              style={style.userMenuBtn}
              onClick={() => this._onLogout()}
            >
              Logout
            </a>
          </div>
        </CollapseBox>

        <CollapseBox
          pose={this.state.showSearch ? 'visible' : 'hidden'}
          style={style.searchOverlay.container}
        >
          <button
            className="btn-liberte-yellow-fill ui-shadow"
            style={style.searchOverlay.closeBtn}
            onClick={() => this._showSearch()}
          >
            <img src={CloseIcon} alt="close" />
          </button>

          <form onSubmit={this._onSearch}>
            <input
              className="barlow-medium"
              type="text"
              placeholder="What are you looking for"
              onChange={this._onChangeKeyword}
              style={style.searchOverlay.input}
            />
          </form>

          <div style={style.searchOverlay.suggestions}>
            <p className="barlow-bold">Suggestions</p>
            <p>Sample product A</p>
            <p>Sample product B</p>
          </div>
        </CollapseBox>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBarTop));
