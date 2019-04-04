import React from 'react';


class Shopping extends React.Component {

    state = {
        data: '',
        }


storage = () =>{
   const data = localStorage.getItem('home')
   this.setState({data: JSON.parse(data)})
}        
    
render(){
    console.log(this.state.data)
    return <span onClick={this.storage}>Hey Rich</span>
}

}


export default Shopping