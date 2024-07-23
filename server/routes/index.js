import express from 'express';
import { authController, productController, cartController, carouselController, userController } from '../controllers/index.js';

const router = express.Router();

// Auth routes
router.post('/register', authController.register);
router.post('/signin', authController.signin);
router.post('/otp', authController.sendOtp);
router.post('/reset-password', authController.resetPassword);
router.post('/update-profile', authController.updateProfile);

// Product routes
router.get('/getProducts/:productId', productController.getProductById);

// Cart routes
router.get('/cartdetails', cartController.getCartDetails);
router.post('/addtocart/:id', cartController.addToCart);
router.delete('/deletecart/:id', cartController.removeFromCart);
router.post('/update-cart', cartController.updateCartQuantity);

// Carousel routes
router.get('/getCarouselImages', carouselController.getCarouselImages);

// User routes
router.post('/user_add_address', userController.addAddress);

export default router;
