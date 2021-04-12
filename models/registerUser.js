const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisterUserSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: true
    },
    dropOff: {
        type: String,
        trim: true,
        required: true
    },
    bikeType: {
        type: String,
        trim: true,
        required: true
    },
    selectedStartDate: {
        type: String,
        trim: true,
        required: true
    },
    selectedEndDate: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const RegisterUser = mongoose.model("RegisterUser", RegisterUserSchema);

module.exports = RegisterUser;