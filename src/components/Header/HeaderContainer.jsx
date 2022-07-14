import React from 'react';
import Header from './Header';
import {  logout, setAuthUserData } from "../../redux/auth-reducer";
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  
  render() {
    return <Header {...this.props} />

  }

}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,


});
export default connect(mapStateToProps, { setAuthUserData, logout })(HeaderContainer);