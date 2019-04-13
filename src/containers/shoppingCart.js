import React from 'react';
import axios from 'axios';
import { APIKEY } from '../components/API';
// import parser from 'xml2json';
// const parser = require('xml2json');
import convert from 'xml-js';

class Shopping extends React.Component {

    state = {
        data: '',
    }


    componentDidMount() {
        const storage = localStorage.getItem('home')

        //    new Promise((resolve, reject)=>{
        //        resolve(storage)
        //    }).then((data)=>{
        //        const info = JSON.parse(data)
        //     console.log('this promise:',info.address)
        //     const street = info.address.line1.replace(' ', '+')
        //     const cityState = info.address
        //     const work = () =>{
        //         const {ZWID} = APIKEY
        //         return axios.get(`http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${ZWID}&address=${street}&citystatezip=Seattle%2C+WA`)
        //              .then((data)=>{
        //                 console.log(data)
        //             //    xml to json
        //                const json = parser.toJson(data.data);
        //                console.log("to json -> %s", json);

        //                })
        //              .catch((err)=>{
        //              console.log(err)
        //              })
        //        }

        //    })


        //    this.setState({data: JSON.parse(data)})


        new Promise((resolve, reject) => {
            resolve(storage)
        }).then((data) => {
            const info = JSON.parse(data)
            console.log('this promise:', info.address)
            const street = info.address.line1.replace(' ', '+')
            const cityState = info.address
            const config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };
            const { ZWID } = APIKEY
            return axios({
                method : 'GET',
                mode: 'no-cors',
                url : `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${ZWID}&address=${street}&citystatezip=NewYork%2C+NY`,
                headers: {'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/xml'},
                withCredentials: true,
                credentials: 'cross-origin'
            })
                .then((data) => {
                    //    xml to json
                    // const result2 = convert.xml2json(data, {compact: false, spaces: 4})
                    // console.log("to json -> %s", result2);

                })
                .catch((err) => {
                    console.log(err)
                })
        })
    }




    render() {
        return <div></div>
    }

}


export default Shopping