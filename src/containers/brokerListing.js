import React from 'react';
import Image from '../components/image';
import ImageService from '../services/images';

export default class BrokersListing extends React.Component {

  constructor(props) {
    super(props);

    ImageService.init();
    const imagesArray = ImageService.getImages();

    this.state = {
      images: imagesArray
    }
  }

  render() {
    const { images } = this.state; 
    return (
      <div className='container'>
        {
          images.map((e, i) => {
            return <Image image={e.url} timestamp={e.timestamp} key={i} />
          })
        }
      </div>
    );
  }
}