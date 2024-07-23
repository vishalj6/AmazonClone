import mongoose from 'mongoose';

const carouselImageSchema = new mongoose.Schema({
    imageName: String,
    path: String,
});
const CarouselImages = mongoose.model('CarouselImages', carouselImageSchema);

export default CarouselImages;