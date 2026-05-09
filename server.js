const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRouter = require('./controllers/user');
const profileRouter = require('./controllers/profile');
const productRouter = require('./controllers/product');
const categoryRouter = require('./controllers/category');
const orderRouter = require('./controllers/order');
const registerRouter = require('./controllers/register');
const loginRouter = require('./controllers/login');

const authMiddleware = require('./middlewares/auth');

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI).then(
  () => {
    console.log(`Database Connected Successfully On Localhost On Port 27017`);
  },
  (err) => {
    console.error(err);
  }
);

app.get('/', (req, res) => {
  res.send(`Welcome To E-Commerce Informatique`);
});

app.get('/me', (req, res) => {
  res.send(`Hello, It's Me`);
});

app.use('/user', authMiddleware, userRouter);
app.use('/profile', profileRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/order', authMiddleware, orderRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`You're Successfully Connected On Localhost On Port ${PORT}`);
});
