import mongoose from 'mongoose';
mongoose.Promise = Promise;

const { Schema } = mongoose;

const schema = Schema({
  name: String,
  email: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

const User = mongoose.model('User', schema);

export default User;


