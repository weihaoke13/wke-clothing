import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions'

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// );

class App extends React.Component {

  // constructor(){
  //   super();

  //   this.state ={
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user});

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
        
          });

      }

      setCurrentUser(userAuth);


    })
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
          <Route path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
 
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
  });

export default connect(null,mapDispatchToProps )(App);