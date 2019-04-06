import React, { Component } from 'react';
import Login from './containers/seller/login';
import Signup from './containers/signup';
import Home from './containers/home';
import { Route, } from 'react-router-dom';
import PropertySearch from './containers/PropertySearch';
import AuthContext from './contexts/auth';
import firebase from './firebase';
import LoginHeader from './components/loginHeader';
import ShoppingCart from './containers/shoppingCart';
import Upload from './containers/upload';
// import BrokerListing from './containers/brokerListing';


class App extends Component {

  static contextType = AuthContext;
  state = {
    user: null
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user,
        })
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    return (
      <AuthContext.Provider value={this.state.user}>
        <LoginHeader />
          <Route path='/' exact component={Home} />
          <Route path='/seller/create' exact component={Signup} />
          <Route path='/seller/login' exact component={Login} />
          <Route path='/seller/image' exact component={Upload} />
          <Route path='/listings/search' exact component={PropertySearch} />
          <Route path='/shoppingCart' exact component={ShoppingCart} />
      </AuthContext.Provider>
    );
  }
}

export default App;
