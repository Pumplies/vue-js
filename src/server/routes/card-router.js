import express from 'express';
import Item from '../models/items-model.js';
import Favorite from '../models/favorites-model.js';

const router = express.Router();

router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = req.body;
        const item = await Item.findByIdAndUpdate(id, updatedItem, { new: true });

        if (item.isFavorite) {
            const favoriteItem = new Favorite(updatedItem);
            await favoriteItem.save();
        }

        res.status(200).json(item);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
