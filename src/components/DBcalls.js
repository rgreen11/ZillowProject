import axios from 'axios';


const createUser = (props)=>{
    const {first_name, last_name, phone_number, email, company, token, userId} = this.state;
    axios.post('http://localhost:3001/seller/create', {
      id: userId,
      email: email
    })
    .then(response => response.data )
    .then(data => {
      console.log(data);
    })
  }

  export default {
      createUser,
  }