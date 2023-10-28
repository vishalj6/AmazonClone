const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // Import bcryptjs
const jwt = require("jsonwebtoken");
const cp = require("cookie-parser");
const nodemailer = require("nodemailer");
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

const { validationResult } = require("express-validator");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cp());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Anshu:Anshu@amazon.nr6l1uy.mongodb.net/Amazon-Clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobileNumber: String,
  address: Array,
  carts: Array
});


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
  quantity:
  {
    type: Number,
    defaultValue: 1
  }
});

const carouselImages = new mongoose.Schema({
  imageName: String,
  path: String,
});

const CarouselImages = mongoose.model("CarouselImages", carouselImages);
const User = mongoose.model("User", userSchema);
const Mobile = mongoose.model("Mobile", mobileSchema);


app.get("/getCarouselImages", (req, res) => {
  CarouselImages.find({}).then((data) => {
    res.json(data);
  });
});

app.get("/getProducts/:productId", (req, res) => {
  Mobile.find({ "_id": req.params.productId }).then((data) => {
    res.json(data);
  });
});

app.post("/register", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, mobileNumber } = req.body;
  console.log(name);
  const alreadyUser = await User.findOne({ email });
  if (alreadyUser) {
    return res.status(401).json({ errors: "User Already Exist" });
  }
  else {
    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(
      password,
      bcrypt.genSaltSync(saltRounds)
    );

    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Store the hashed password
      mobileNumber,
    });

    newUser
      .save()
      .then(() => {
        console.log("User saved to MongoDB");
        res.status(201).json({ message: "User created successfully" });
      })
      .catch((error) => {
        console.error("Error saving user to MongoDB:", error);
        res.status(500).json({ error: "An error occurred" });
      });
  }

});


app.post("/otp", (req, res) => {

  const { name, email, oneTimePassword } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ninbolt960@gmail.com",
      pass: "zuwxfmbkdtpeokgl",
    },
  });

  const emailOptions = {
    from: "ninbolt960@gmail.com", // Sender's email address
    to: email, // Recipient's email address
    subject: "OTP Email", // Email subject
    text: "Two Factor Authentication Email", // Plain text content
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
    </div>`, // HTML content (optional)
  };

  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });

  console.log("OTP sent by mail");
})

app.get("/images/:imgPath", (req, res) => {
  const imgPath = req.params.imgPath;
  res.sendFile(__dirname + "/src/images/" + imgPath);
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ error: "Email or Password can't be empty" })
  };

  try {
    const userWithEmail = await User.findOne({ email });
    if (userWithEmail) {
      const compare = await bcrypt.compare(password, userWithEmail.password);
      if (!compare) {
        return res.status(400).json({ error: "Password Not Matched with Database" });
      }
      else {
        console.log("Password Matched", compare);
        const jwtToken = jwt.sign({ email, id: userWithEmail._id }, process.env.ACCESS_TOKEN_SECRET);
        return res.status(201).json({ message: "Welcome Back!!", user: userWithEmail, token: jwtToken });
      }
    }
    else {
      return res.status(402).json({ error: "Email not Found on Database" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Email not Found on Database" });
  }
});

app.post("/user_add_address", async (req, res) => {
  if (req.cookies["_auth"]) {
    var addressInfo = req.body;

    const response = await jwt.verify(req.cookies._auth, process.env.ACCESS_TOKEN_SECRET);
    const email = response.email;

    const client = await MongoClient.connect("mongodb+srv://Anshu:Anshu@amazon.nr6l1uy.mongodb.net/Amazon-Clone", { useNewUrlParser: true });
    const db = client.db()

    const existingUser = await db.collection('users').findOne({ email });
    // check if given address is default addr
    if (addressInfo.defaultAddressCheck) {
      for (let i in existingUser.address) {
        existingUser.address[i] = { ...existingUser.address[i], defaultAddressCheck: false }
      }
    }
    if (existingUser.address.length === 0 && !addressInfo.defaultAddressCheck) {
      addressInfo = { ...addressInfo, defaultAddressCheck: true }
    }

    // console.log("IN LAST ADDRESS",addressInfo);

    const updatedAddresses = [...existingUser.address, addressInfo];
    await db.collection('users').updateOne(
      { email }, // Find the user by email
      {
        $set: {
          address: updatedAddresses
        },
      }
    )
    res.status(201).json({ existingUser, updatedAddresses })
  };
});


app.get("/get_user", async (req, res) => {
  if (req.cookies["_auth"]) {
    const decoded = await jwt.verify(req.cookies["_auth"], process.env.ACCESS_TOKEN_SECRET);
    // console.log("decoded", decoded)
    await User.findOne({ _id: decoded.id }).then((user) => {
      res.json(user);
    });
  }
});

app.post("/remove_address", async (req, res) => {
  var { index } = req.body;
  const response = await jwt.verify(req.cookies._auth, process.env.ACCESS_TOKEN_SECRET);
  const email = response.email;
  const client = await MongoClient.connect("mongodb+srv://Anshu:Anshu@amazon.nr6l1uy.mongodb.net/Amazon-Clone", { useNewUrlParser: true });
  const db = client.db()
  const existingUser = await db.collection('users').findOne({ email });

  if (existingUser.address[index].defaultAddressCheck == true) {
    return res.status(420).json({ Message: "Can't delete default Address" })
  }
  else {
    const updatedAddresses = existingUser.address;
    updatedAddresses.splice(index, 1)
    // console.log("UpdatedADD",updatedAddresses)

    const result = await db.collection('users').updateOne(
      { email },
      {
        $set: {
          address: updatedAddresses
        },
      }
    )
    return res.status(201).json({ existingUser, updatedAddresses });
  }
});

app.get("/addtocart/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const client = await MongoClient.connect("mongodb+srv://Anshu:Anshu@amazon.nr6l1uy.mongodb.net/Amazon-Clone", { useNewUrlParser: true });
    const db = client.db();

    // const cart = await Mobile.findOne({ _id: id });

    const decoded = await jwt.verify(req.cookies["_auth"], process.env.ACCESS_TOKEN_SECRET);
    const UserWithCarts = await db.collection('users').findOne({ email: decoded.email });

    let cartItem = { "_id": id, "quantity": 1 };

    if (UserWithCarts) {
      if (UserWithCarts.carts) {
        const existingCartItemIndex = UserWithCarts.carts.findIndex(item => item._id === id);
        if (existingCartItemIndex !== -1) {
          // Item already exists in the cart, increment its quantity
          UserWithCarts.carts[existingCartItemIndex].quantity += 1;
        } else {
          // Item is not in the cart, add it
          UserWithCarts.carts.push(cartItem);
        }
      } else {
        UserWithCarts.carts = [cartItem];
      }

      const result = await db.collection('users').updateOne(
        { email: decoded.email },
        {
          $set: {
            carts: UserWithCarts.carts,
          },
        }
      );
      return res.status(201).json({ UserWithCarts, updatedCarts: UserWithCarts.carts });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/cartdetails", async (req, res) => {
  try {
    const decoded = await jwt.verify(req.cookies["_auth"], process.env.ACCESS_TOKEN_SECRET);
    const buyuser = await User.findOne({ email: decoded.email });

    if (buyuser && buyuser.carts) {
      // Create an array to store the final cart items
      const finalcartItems = [];

      for (const cartItem of buyuser.carts) {
        const oneItem = await Mobile.findOne({ _id: cartItem._id });

        if (oneItem) {
          // Add the item details to the final cart items array along with the quantity
          finalcartItems.push({
            ...oneItem.toObject(),
            quantity: cartItem.quantity
          });
        }
      }
      // Send the final cart items in the response
      res.status(200).json(finalcartItems);
    } else {
      // No cart items found
      res.status(404).json({ message: "No Cart Items" });
    }
  } catch (error) {
    console.log("Error for cart details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.delete("/deletecart/:id", async (req, res) => {
  try {
    const decoded = await jwt.verify(req.cookies["_auth"], process.env.ACCESS_TOKEN_SECRET);
    const userId = await User.findOne({ email: decoded.email });
    if (userId) {
      const itemId = req.params.id;
      const updatedCarts = userId.carts.filter(cartItem => cartItem._id.toString() !== itemId);

      // Update the user's carts with the filtered cart items
      const result = await User.findOneAndUpdate(
        { email: decoded.email },
        {
          $set: { carts: updatedCarts }
        },
        { new: true }
      );
      if (result) res.status(200).json({ updatedCarts, message: "Item removed from cart" });
    }
    else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log("Error while removing item from cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
