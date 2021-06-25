const mongoose = require('mongoose');

module.exports.dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ylija.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,

      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log('DB connected');
  } catch (err) {
    console.log(err);
  }
};
