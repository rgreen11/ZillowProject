const ImageService = {};

ImageService.init = () => {
  if (localStorage.getItem('images') === null) {
    localStorage.setItem('images', JSON.stringify([]));
  }
}

ImageService.getImages = () => {
  const imageArrayString = localStorage.getItem('images');
  const imageArray = JSON.parse(imageArrayString);
  return imageArray;
}

ImageService.saveImage = (url, timestamp) => {
  const newImage = { url, timestamp };
  console.log('newImage:',newImage)
  const oldImages = ImageService.getImages();
  console.log('oldImages:',oldImages)
    if(!oldImages){
    localStorage.setItem('images', JSON.stringify([newImage]))
        return newImage
    } else {
        oldImages.unshift(newImage);
         console.log(oldImages)
        localStorage.setItem('images', JSON.stringify(oldImages));
        return oldImages;
    }
}

export default ImageService;