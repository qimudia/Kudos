const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


//creating a server
const app = express();

// Set PORT to 3000
var PORT = process.env.PORT || 3000;
const MONGODB_URI = require("./config/keys");
   

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
//app.use(express.static("./public"));
app.use(express.static(path.join(__dirname, './public')));


// Connecting to mongoose
mongoose.connect(MONGODB_URI || 'mongodb://localhost/kudos', { useNewUrlParser: true });

// Routes
// -----------------

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Starts the server...
app.listen(PORT, function(){
    console.log(`Server is listening on PORT: ${PORT}`);
});