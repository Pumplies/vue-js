import express from 'express';
import Item from '../models/items-model.js';

const router = express.Router();

router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;