const mongoose = require('mongoose');


mongoose.connect(
    // 'mongodb+srv://lilach123:lilach123@nahairstyle-wem4a.mongodb.net/<dbname>?retryWrites=true&w=majority',
    process.env.DB_URL,
 { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
  ).then(db => console.log('Datebase is Connected!'))
