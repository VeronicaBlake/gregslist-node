import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
    {
        bedrooms: { type: String, required: true },
        bathrooms: { type: String, required: true },
        levels: { type: Number, required: true },
        year: { type: Number, required: true },
        price: { type: Number, required: true },
        description: { type: String, minLength: 3, maxLength: 100 },
        imgUrl: { type: String, required: true, default: '//placehold.it/300x300' }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default House;