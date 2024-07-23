import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  pinCode: { type: String, required: true },
  firstAddressField: { type: String, required: true },
  secondAddressField: { type: String },
  thirdAddressField: { type: String },
  townCity: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  defaultAddressCheck: { type: Boolean, default: false }
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobileNumber: String,
  address: [addressSchema],
  carts: Array
});

const User = mongoose.model('User', userSchema);

export default User;
