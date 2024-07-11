import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    title: String,
    price: Number,
    imageUrl: String,
});

const Item = mongoose.model('sneakers', itemSchema);

export default Item;