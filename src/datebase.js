const mongoose = require('mongoose');
require('dotenv').config({path : 'variables.env'})


mongoose.connect(process.env.DB_URL, {
   useUnifiedTopology: true, 
   useNewUrlParser: true,
    // useFindAndModify: false 
  }
  ).then(db => console.log('Datebase is Connected!'))

    // 'mongodb+srv://lilach123:lilach123@nahairstyle-wem4a.mongodb.net/<dbname>?retryWrites=true&w=majority',
    
