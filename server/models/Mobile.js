import mongoose from 'mongoose';


const mobileSchema = new mongoose.Schema({
  id: String,
  productTitle: String,
  bylineInfo: String,
  bylineInfoLink: String,
  Ratings: String,
  RatingsCount: String,
  answeredQuestions: String,
  off: String,
  price: String,
  mrp: String,
  vatMessage_feature_div: String,
  Images: [String],
  changedImages: [String],
  CarouselImages: [String],
  productSpecs: [String],
  cameraImages: [String],
  productServicesImages: [{
    Name: String,
    Image: String,
  }],
  offers: [{
    Title: String,
    ParaText: String,
    aTag: String,
  }],
  smallPreviewImages: [String],
  sizeVariants: [String],
  aboutThisItemList: [String],
  prodTechDetails: [String],
  productDetails1: [[String]],
  productDetails2Name: String,
  productDetails2: [[String]],
  defaultSize: String,
  basicDetails: [{
    Field: String,
    Value: String,
  }],
  ratingsSection: [String],
  quantity: {
    type: Number,
    default: 1
  }
});

const Mobile = mongoose.model('Mobile', mobileSchema);

export default Mobile;
