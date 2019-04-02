import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './login.css';
import image from '../../image/IMG-1890.JPG';
import firebase from '../../firebase';



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value });
      }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Returns:', response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
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
    this.unsubscribe();
  }

    render(){
        const {email,password} =this.state
        return(
    <div className="container col-12">
        <div className=" image-form">
            <div className="ShowMe row">
                <div className="col-6">
                    <img src={image} id ="image"/>
                </div>
                <div className="col-6 darkColor">
                    <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="email" value={email} onChange={this.handleChange}/>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange}/>
                    <button type="submit" onClick={this.handleSubmit}>Login</button>
                    </div>   
                </div>
            </div>
        </div>
    </div>
        )
    }
        
}


export default Login