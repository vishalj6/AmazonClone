import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../config.js';
export const getCartDetails = async (req, res) => {
  try {
    const decoded = await jwt.verify(req.cookies["_auth"], process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (user && user.carts) {
      const finalCartItems = [];
      for (const cartItem of user.carts) {
        const item = await Mobile.findById(cartItem._id);
        if (item) {
          finalCartItems.push({ ...item.toObject(), quantity: cartItem.quantity });
        }
      }
      res.json(finalCartItems);
    } else {
      res.status(404).json({ message: "No Cart Items" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { id } = req.params;
    const decoded = await jwt.verify(req.cookies["_auth"], process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findOne({ email: decoded.email });

    let cartItem = { _id: id, quantity: 1 };
    if (user) {
      if (user.carts) {
        const existingCartItemIndex = user.carts.findIndex(item => item._id.toString() === id);
        if (existingCartItemIndex !== -1) {
          user.carts[existingCartItemIndex].quantity += 1;
        } else {
          user.carts.push(cartItem);
        }
      } else {
        user.carts = [cartItem];
      }
      await user.save();
      res.status(201).json({ message: "Item added to cart", cart: user.carts });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const decoded = await jwt.verify(req.cookies["_auth"], process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (user) {
      user.carts = user.carts.filter(item => item._id.toString() !== id);
      await user.save();
      res.status(200).json({ message: "Item removed from cart", cart: user.carts });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateCartQuantity = async (req, res) => {
  const { id, quantity } = req.body;
  if (req.cookies["_auth"]) {
    try {
      const response = await jwt.verify(req.cookies["_auth"], ACCESS_TOKEN_SECRET);
      const email = response.email;

      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ error: "User not found" });

      let cartItem = user.carts.find(item => item._id.toString() === id);
      if (cartItem) {
        cartItem.quantity = quantity;
        await user.save();
        res.status(201).json({ existingUser: user, cartItems: user.carts });
      } else {
        res.status(404).json({ error: "Item not found in cart" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};