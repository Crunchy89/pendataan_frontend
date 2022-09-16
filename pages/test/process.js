function preprocessImage(canvas) {
    const ctx = canvas.getContext('2d');
    const image = ctx.getImageData(0,0,canvas.width, canvas.height);
    thresholdFilter(image.data, 0.5);
    return image;
}

  
 
 export default preprocessImage
