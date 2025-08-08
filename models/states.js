import mongoose from "mongoose";

const EstadosSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    type: { type: String },
    isActive: { type: Boolean, default: true },
}, { timestamps: true , versionKey: false})

export default mongoose.model('States', EstadosSchema)