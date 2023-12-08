import config from './config/config.js'; 
import app from './server/express.js';
import mongoose from 'mongoose';
import express from 'express';

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.error(`Error connecting to the database. ${err}`);
});

// Request logging middleware
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Existing route handlers...

// Catch 404 and log it
app.use((req, res, next) => {
  console.error(`404 error. Resource not found: ${req.url}`);
  res.status(404).send('Resource not found');
});

app.listen(config.port, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`);
  } else {
    console.info(`Server started on port ${config.port}`);
  }
});
