import React from 'react';
import firebase from '../firebase';
import axios from 'axios';

export default class Signup extends React.Component {

  state = {
    first_name: '', 
    last_name: '', 
    phone_number: '',
    company: '', 
    email: '',
    password: '',
    error: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
      console.log('this is the state data:',this.state)
    const { first_name, last_name, phone_number, company, email, password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const token = response.user.refreshToken
        axios.post('/seller/create', {first_name, last_name, phone_number, company, email, token, uid})
          console.log('here you are:',first_name, last_name, phone_number, company, email, token, uid)
      })
      .catch(err => {
        this.setState({ error: err });
      })
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // ..... DO YOUR LOGGED IN LOGIC
        this.props.history.push('/')
      }
      else {
        // ..... The user is logged out
      }
    })
  }

  componentWillUnmount() {
    // used to prevent memory leak
    this.unsubscribe();

  }

  

  render() {
    const { first_name, last_name, phone_number, company, email, password, error } = this.state;
    const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert"><h1>User already exist</h1></div>

    return (
      <>
        <h1>Sign Up</h1>
        {displayError}
        <form>
          <div className="form-group">
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="First Name" name="first_name" value={first_name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Last Name" name="last_name" value={last_name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Phone Number" name="phone_number" value={phone_number} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Company" name="company" value={company} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password"  name="password" value={password} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </>
    )
  }
}

