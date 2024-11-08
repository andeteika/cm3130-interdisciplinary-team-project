// Import packages
const express = require('express');
const path = require('path');


// Express server
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Public folder accessed by EJS (e.g. Bootstrap files)
app.use(express.static(path.join(__dirname, 'public')));

// TIP: Use res.render to load up an EJS view file

// Homepage
app.get('/', function(req, res) {
    res.render('index', {message: "Hello World"});
});

// Start the server on port 8080
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
    console.log(`Developer note: if the servers has been start on a local machine, the easy access URL is http://localhost:${PORT}`);
})