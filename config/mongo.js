const mongoose = require("mongoose");

// Configura la opción strictQuery
mongoose.set('strictQuery', false);

// Resto de tu código
const DB_URI = process.env.DB_URI;

module.exports = () => {
  const connect = async () => {
    try {
      await mongoose.connect(DB_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to db');
    } catch (error) {
      console.error('Error connecting to db:', error);
    }
  };

  connect();
};
