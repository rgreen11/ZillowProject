import React from 'react';
import './PropertySearch.css';

const HomeSearchComponent = (props) => {
    console.log(props)
    if(!props.data.property){
        return <h1>Pending data</h1>
    } else{
        console.log(props)
        // return <h1>HI</h1>
       return props.data.property.map((e)=>{
            console.log(e)
           return (<div class="content-wrapper wrap">
           <img src='https://source.unsplash.com/featured/?house'/>
           <div class="text-wrapper">
             <h2>{e.address.oneLine}</h2> 
           </div>
         </div> 
           )
        })
    } 
}



export default HomeSearchComponent;