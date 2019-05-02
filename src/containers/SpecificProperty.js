import React from 'react';
import axios from 'axios';


export default class SpecificProperty extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                streetAddress: '',
                city: '',
                state: '',
                zipCode: '',
            
            }
        }

    handleChange = (e) => {

        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () =>{
        const {streetAddress, city, state, zipCode} = this.state
        axios.get('http://localhost:3001/zillow',{
            params:{
                streetAddress: streetAddress,
                city: city,
                state: state,
                zipCode: zipCode
            }
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })

    }


render(){
        return(
            <form>
                <div className="form-group">
                    <label>Street Address</label>
                    <input  className="form-control" placeholder="Street Address" name='streetAddress' onChange={this.handleChange}/>

                </div>
                <div className="form-group">
                    <label>City</label>
                    <input  className="form-control"  placeholder="City" name='city' onChange={this.handleChange} />

                </div>
                <div className="form-group">
                    <label>State</label>
                    <input className="form-control"  placeholder="State" name='state' onChange={this.handleChange}/>

                </div>
                <div className="form-group">
                    <label>Zip Code</label>
                    <input className="form-control"  placeholder="Zip Code" name='zipCode' onChange={this.handleChange}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
        
}