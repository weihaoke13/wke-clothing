import React from 'react';
import './App.css';
import {Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';

import {selectCurrentUser} from './redux/user/user.selectors';
import { checkUserSession} from './redux/user/user.actions'

class App extends React.Component {

  // constructor(){
  //   super();

  //   this.state ={
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route exact path='/signin' render={
            () => 
            this.props.currentUser ? 
            (<Redirect to ='/' />) :
             (<SignInAndSignUpPage />)} 
          ></Route>
        </Switch>
      </div>
    );
  }
 
}

const mapStateToProps = (createStructuredSelector)({
  currentUser:selectCurrentUser
})

const mapDispatchToPros = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps, mapDispatchToPros
  )(App);