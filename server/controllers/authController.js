import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { validationResult } from 'express-validator';
import { EMAIL_USER, EMAIL_PASS, ACCESS_TOKEN_SECRET } from '../config.js';

export const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, mobileNumber } = req.body;
    try {
        const alreadyUser = await User.findOne({ email });
        if (alreadyUser) {
            return res.status(401).json({ errors: "User Already Exists" });
        }

        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            mobileNumber,
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
};

export const signin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({ error: "Email or Password can't be empty" });
    }

    try {
        const userWithEmail = await User.findOne({ email });
        if (userWithEmail) {
            const compare = await bcrypt.compare(password, userWithEmail.password);
            if (!compare) {
                return res.status(400).json({ error: "Password Not Matched with Database" });
            }
            const jwtToken = jwt.sign({ email, id: userWithEmail._id }, ACCESS_TOKEN_SECRET);
            return res.status(201).json({ message: "Welcome Back!!", user: userWithEmail, token: jwtToken });
        } else {
            return res.status(402).json({ error: "Email not Found on Database" });
        }
    } catch (error) {
        return res.status(400).json({ error: "Email not Found on Database" });
    }
};

export const sendOtp = (req, res) => {
    const { name, email, oneTimePassword } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    const emailOptions = {
        from: EMAIL_USER,
        to: email,
        subject: "OTP Email",
        html: `
      <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Your Brand</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>${name} ,Thank you for choosing Your Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${oneTimePassword}</h2>
          <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Your Brand Inc</p>
            <p>1600 Amphitheatre Parkway</p>
            <p>California</p>
          </div>
        </div>
      </div>`,
    };

    transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
        } else {
            console.log("Email sent:", info.response);
        }
    });

    res.status(200).json({ message: "OTP sent by mail" });
};

export const getUser = async (req, res) => {
    if (req.cookies["_auth"]) {
        try {
            const decoded = await jwt.verify(req.cookies["_auth"], ACCESS_TOKEN_SECRET);
            const user = await User.findOne({ _id: decoded.id });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: "Failed to get user" });
        }
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
};

export const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(saltRounds));
        user.password = hashedPassword;

        await user.save();
        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update password" });
    }
};

export const updateProfile = async (req, res) => {
    if (req.cookies["_auth"]) {
        const { name, mobileNumber } = req.body;
        try {
            const decoded = await jwt.verify(req.cookies["_auth"], ACCESS_TOKEN_SECRET);
            const user = await User.findById(decoded.id);
            if (!user) return res.status(404).json({ error: "User not found" });

            user.name = name || user.name;
            user.mobileNumber = mobileNumber || user.mobileNumber;

            await user.save();
            res.status(200).json({ message: "Profile updated successfully", user });
        } catch (error) {
            res.status(500).json({ error: "Failed to update profile" });
        }
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
};