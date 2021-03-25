const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dbUser:dbPass@cluster0.cjv41.mongodb.net/dbMVT_POC?retryWrites=true&w=majority",
    {useNewUrlParser:true, useUnifiedTopology:true},
    (err) =>{
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error :"+err)
    }
)
