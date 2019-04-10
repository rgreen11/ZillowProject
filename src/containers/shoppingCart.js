import React from 'react';


class Shopping extends React.Component {

    state = {
        data: '',
        }


storage = () =>{
   const data = localStorage.getItem('home')
   if(!data){
       return <h1>Your cart is empty</h1>
   } else 
   this.setState({data: JSON.parse(data)})
}        
    
render(){
    console.log(this.state.data)
    return <span onClick={this.storage}>Hey Rich</span>
}

}


export default Shopping