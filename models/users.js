import mongoose from "mongoose"
const usuarios = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, },
    password: { type: String },
    avatar: { type: String },
    phone: { type: String },
    globalRole: {
        type: String,
        default:"usuario"
    },
    isActive: { type: Boolean, default: true },
    isEmailVerified: { type: Boolean,  },
    lastLogin: { type: Date },
}, { timestamps: true, versionKey: false })


export default mongoose.model('usuarios', usuarios);