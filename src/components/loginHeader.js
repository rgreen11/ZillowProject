import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import './loginHeader.css'
import firebase from '../firebase';


const HandleLogout = () =>{
    firebase.auth().signOut()
}

const loginHeader = () => {
return(
    <AuthContext.Consumer>
        {
            (user) => {
                if (user) {
                    console.log(user)
                    return (<>
                        <div className="container">
                            <nav className="header">
                                <ul>
                                    <Link to='/'><span>Home</span></Link>
                                    <Link to='/listings/search'><span>Property Search</span></Link>
                                    <Link to='/seller/image'><span>Post Property</span></Link>
                                    <Link href='#'><span>Broker History</span></Link>
                                    <Link to='/'><span onClick={HandleLogout}>Logout</span></Link>
                                </ul>
                            </nav>
                        </div>
                    </>)
                } else {
                    return(<>
                           <div className="container spacing">
                            <nav className="header">
                                <ul>
                                    <Link to='/'><span>Home</span></Link>
                                    <Link to='/listings/search'><span>Property Search</span></Link>
                                    <Link href='#'><span>Contacts</span></Link>
                                    <Link to='/seller/create'><span>Sign in</span></Link>
                                    <Link to='/seller/login'><span>Login</span></Link>
                                </ul>
                            </nav>
                        </div>
                    </>)
                }
            }
        }

    </AuthContext.Consumer>
)

}


export default loginHeader