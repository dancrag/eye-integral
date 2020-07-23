const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eye-integral-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})  
    .then(db => console.log('DB is contected'))
    .catch(err  => console.error(err));
