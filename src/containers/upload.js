import React from 'react';
import ImageService from '../services/images';
import firebase from '../firebase';
import axios from 'axios';


export default class Home extends React.Component {

    state = {
        sellers_id: '1',
        cost: '',
        address:'',
        yearbuilt:'',
        heating: '',
        cooling:'',
        parking:'',
        numday: '',
        type: '',
    }
    // sellers_id, cost, address, yearbuilt, heating, cooling, parking, numDay, type, url

    saveImage = (url) => {
        const date = Date();
        ImageService.saveImage(url, date);
    }

    handleFileInput = async (e) => {
        const firstFile = e.target.files[0];
        const root = firebase.storage().ref()
        const newImage = root.child(firstFile.name);
        // newImage.put(firstFile)
        //   .then((snapshot) => {
        //     return snapshot.ref.getDownloadURL()
        //   })
        //   .then((url) => {
        //     console.log(url)
        //     this.saveImage(url);
        //   })
        try {
            const snapshot = await newImage.put(firstFile);
            console.log(snapshot)
            const url = await snapshot.ref.getDownloadURL();
            this.saveImage(url);
        }
        catch (err) {
            console.log(err);
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit = (e) => {
        e.preventDefault();

        const url = ImageService.getImages()[0].url;

        const {sellers_id, cost, address, yearbuilt, heating, cooling, parking, numDay, type} = this.state;
        // console.log(sellers_id, cost, address, yearbuilt, heating, cooling, parking, numDay, type, url)
        axios.post('/listings/create',{sellers_id, cost, address, yearbuilt, heating, cooling, parking, numDay, type, url})
             .then((data)=>{console.log("THE DATA WAS ADDED here", data)})
             .catch((err) => console.log(err)) 
      }


    render() {

        const {cost,address,yearbuilt,heating,cooling,parking,numday,type} = this.state;
        return (
            <div className='container'>
                <div className="input-group mb-3">
                <div className="custom-file">
                        <input type="file" className="custom-file-input" onChange={this.handleFileInput} />
                        <label className="custom-file-label">Upload Image</label>
                    </div>
                <form>
                    <input type='text' placeholder='cost' name='cost' value={cost} onChange={this.handleChange}></input>
                    <input type='text' placeholder='address' name='address' value={address} onChange={this.handleChange}></input>
                    <input type='text' placeholder='yearbuilt' name='yearbuilt' value={yearbuilt} onChange={this.handleChange}></input>
                    <input type='text' placeholder='heating' name='heating' value={heating} onChange={this.handleChange}></input>
                    <input type='text' placeholder='cooling' name='cooling' value={cooling} onChange={this.handleChange}></input>
                    <input type='text' placeholder='parking' name='parking' value={parking} onChange={this.handleChange}></input>
                    <input type='text' placeholder='numday' name='numday' value={numday} onChange={this.handleChange}></input>
                    <input type='text' placeholder='type' name='type' value={type} onChange={this.handleChange}></input>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}