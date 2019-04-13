import React, {Component}from 'react';
import './home.css';
import image from './img/IMG-0401.JPG'
import {Link} from 'react-router-dom';


 class Home extends Component {
        
    state = {
        area : null,
    }

handleChange = (e)=>{
    this.setState({area: e.target.value})
}

storeZipCode = () =>{
    const area = this.state.area
  return localStorage.setItem('location', area)
    }

render(){
    console.log(this.state)
    return (<>
    <div className="image-body">
        <div className="background-image">
            <img src={image} className='image'/>
        </div>

        <div className="container col-12">
            <div className="search-container">
                <header className="home-page-header">
                    <h1 className="heading col-10">
                        <span>Find your way home<sup>®</sup></span>
                    </h1>
                </header>

                <div className="home-page-tabs container">
                    <ul className="row">
                        <li className="active col-3">
                            <a className='type-search' role="navigation" href="/buy/">Buy</a>
                        </li>
                        <li className="active col-3">
                            <a className='type-search' role="navigation" href="../PropertyProfile/PropertyProfile.html">Rent</a>
                        </li>
                        <li className="active col-3">
                            <a className='type-search' role="navigation" href="../AgentFinder/AgentFinder.html">Agent </a>
                        </li>
                        <li className="active col-3">
                            <a className='type-search' role="navigation" href="../PropertyListing/Listings.html">All</a>
                        </li>
                    </ul>
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter an Address, City or Zip code" aria-describedby="button-addon2" onChange={this.handleChange}/>
                    <div className="input-group-append">
                      <Link to ={'/listings/search'}>  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.storeZipCode}>Search</button> </Link>
                    </div>
                </div>

            </div>
        </div>


        <div className="card footer">
            <div className="card-header">
                Quote
        </div>

            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    </div>
    </>
    )
    }
}


export default Home;