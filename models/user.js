import {Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    email: {
      unique: [true, 'Email already exists!'],
      required: [true, 'Email is required!'],
      type: String,
    },
    username: {
      required: [true, 'Username is required!'],
      match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
      type: String,
    },
    image: {
      type: String,
    },
});

//NextJS stores all the users in models and first check the models 
//for user, if not present then create a new model
const User = models.User || model('User', UserSchema);

export default User;