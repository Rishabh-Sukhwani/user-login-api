const express = require('express');

//utilities
const connectDB = require('./db/connect');

//routes
const authRouter = require('./routes/auth');
const dashboardRouter = require('./routes/dashboard');

//middleware
const bodyParser = require('body-parser');
const authenticateUser = require('./middleware/authentication');

require('dotenv').config();

const app = express();

//add middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

//define routes
app.use('/', authRouter);
app.use('/test', authenticateUser, dashboardRouter);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();