import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    title: String,
    price: Number,
    imageUrl: String,
    isFavorite: Boolean
});

const Item = mongoose.model('sneakers', itemSchema);

export default Item;