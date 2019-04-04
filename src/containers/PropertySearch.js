import React from 'react';
import axios from 'axios';
import API_KEY from '../components/API';
import {Link} from 'react-router-dom';

class PropertySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            data: {},

        }
    }

    

    componentDidMount = () => {
        const axios = require('axios')
        const APIKEY = API_KEY;
        axios.get('https://search.onboard-apis.com/propertyapi/v1.0.0/property/address?postalcode=11206&page=1&pagesize=10', 
        { headers: 
            { apikey: APIKEY ,
            } })
            .then((data) => {
                console.log(data)
                this.setState({data: data.data})
            })
            .catch((err)=>{
                this.setState({data:err})
            })
    }

    storage = (house) =>{
        const data = JSON.stringify(house)
        localStorage.setItem('home', data)
    }


    render(){
        const data = this.state.data.property;
        const display = (data)=>{
          return data.map((house)=>{
                return <div class="content-wrapper wrap" onClick={e => this.storage(house)}>
                            <img src='https://source.unsplash.com/featured/?house'/>
                            <div class="text-wrapper">
                        <h2>{house.address.oneLine}</h2> 
                            </div>
                    </div> 
                })
            }
        
        return(
            <div className="content-wrapper wrap" >
                <Link to='/shoppingCart'>Shopping Cart</Link>
            { !data ? 'Is Loading' : display(data)}
                
            </div>
            
        )
    }
}






export default PropertySearch;