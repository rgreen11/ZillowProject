import React from 'react';
import axios from 'axios';
import API_KEY from '../components/API';
import PropertyComponent from '../components/PropertySearch';

class PropertySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            data: {}
        }
    }

    componentDidMount=()=> {
        // const axios = require('axios')
        // const APIKEY = API_KEY;
        // axios.get('https://search.onboard-apis.com/propertyapi/v1.0.0/property/address?postalcode=11206&page=1&pagesize=10', 
        // { headers: 
        //     { apikey: APIKEY ,
        //     } })
        //     .then((data) => {
        //         console.log(data)
        //         this.setState({data: data.data})
        //     })
        //     .catch((err)=>{
        //         this.setState({data:err})
        //     })
    }



    render(){
        const data = this.state.data;
        return(
            <div className="content-wrapper wrap">
                <PropertyComponent data={data}/>
            </div>
            
        )
    }
}






export default PropertySearch;