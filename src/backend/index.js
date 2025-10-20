import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.json({
        message: `API corriendo correctamente en el puerto ${PORT}`
    });
});

//Rutas que manejan usuaios
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log('𒆜🆂🅴🆁🆅🅸🅳🅾🆁 🅲🅾🆁🆁🅸🅴🅽🅳🅾 🅴🆇🅸🆃🅾🆂🅰🅼🅴🅽🆃🅴 🖥️');
})
