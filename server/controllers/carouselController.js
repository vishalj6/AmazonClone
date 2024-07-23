import CarouselImages from '../models/CarouselImages.js';

// Get all carousel images
export const getCarouselImages = async (req, res) => {
  try {
    const images = await CarouselImages.find({});
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
