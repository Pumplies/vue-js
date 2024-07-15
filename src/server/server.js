import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/card-router.js';

const app = express();
const port = 3000;

const db = 'mongodb+srv://Pumplies:Maximka20051120@cluster0.dfi8dij.mongodb.net/vue?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connect'))
    .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});