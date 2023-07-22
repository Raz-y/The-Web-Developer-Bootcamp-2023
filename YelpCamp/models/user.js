const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocaMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocaMongoose);
module.exports = mongoose.model('User', UserSchema);