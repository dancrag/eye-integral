const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const { allowedNodeEnvironmentFlags } = require('process');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const methodOverride = require('method-override');
const session = require('express-session');

//Initilizations
const app = express();
require('./database');  

//Settings
app.set('port', process.env.PORT || 8080)
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Midlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))

//Global Variables


//Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/myservices'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server Init
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});