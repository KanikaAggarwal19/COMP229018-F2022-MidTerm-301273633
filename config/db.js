// Do not expose your credentials in your code.
//let atlasDB = "mongodb+srv://mongo:mongo@ac-69nuxmy-shard-00-02.0ssajof.mongodb.net/todo?retryWrites=true&w=majority";
let atlasDB = "mongodb+srv://mongo:aiNtzAAhEHGLMLcC@cluster0.0ssajof.mongodb.net/?retryWrites=true&w=majority";



// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}