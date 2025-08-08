import mongoose from "mongoose";

const Categoria_Schema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    isActive: { type: Boolean, default: true },
    createBy: { type: mongoose.Schema.Types.ObjectId, ref: "usuarios" }
}, { timestamps: true, })


export default mongoose.model('Categories', Categoria_Schema)