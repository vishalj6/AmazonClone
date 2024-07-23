import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'; // Adjust the path if necessary

export const addAddress = async (req, res) => {
  if (req.cookies["_auth"]) {
    const addressInfo = req.body;

    try {
      // Verify JWT token and get user's email
      const response = await jwt.verify(req.cookies._auth, process.env.ACCESS_TOKEN_SECRET);
      const email = response.email;

      // Fetch existing user data using Mongoose
      const existingUser = await User.findOne({ email });

      // Check if the user exists
      if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update address list
      if (addressInfo.defaultAddressCheck) {
        existingUser.address.forEach(addr => addr.defaultAddressCheck = false);
      }
      if (existingUser.address.length === 0 && !addressInfo.defaultAddressCheck) {
        addressInfo.defaultAddressCheck = true;
      }

      existingUser.address.push(addressInfo);

      // Save the updated user document
      await existingUser.save();

      res.status(201).json({ existingUser, updatedAddresses: existingUser.address });
    } catch (error) {
      console.error("Error adding address:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};