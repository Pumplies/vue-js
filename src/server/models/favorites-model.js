import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
    title: String,
    price: Number,
    imageUrl: String,
    isFavorite: Boolean
});

const Favorite = mongoose.model('favorites', favoriteSchema);

export default Favorite;
