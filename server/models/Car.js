import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
    {
        make: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: Number, required: true },
        price: { type: Number, required: true },
        imgUrl: { type: String, required: true, default: '//placehold.it/300x300' },
        description: { type: String, minLength: 3, maxLength: 100 }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;