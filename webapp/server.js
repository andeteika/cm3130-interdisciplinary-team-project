// ---------------------------------------------------- DEPENDENCIES ---------------------------------------------------
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const crypto = require('crypto');
const path = require('path');

// --------------------------------------------------- INITIALISATION --------------------------------------------------
// Initialise Dotenv
dotenv.config();
// Retrieve the ATLAS_URI for the MongoDB Connection.
const ATLAS_URI = process.env.ATLAS_URI;
// Retrieve the SECRET for the Express Session.
const SECRET = process.env.SECRET;

// Initialise Express.
const app = express();
// Port where the Express server will be running.
const port = 8080;
// Sets the public folder for the Express server.
app.use('/public', express.static(__dirname + "/public"));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
// Sets the view engine for the Express server.
app.set('view engine', 'ejs');

// Initialise Express Session.
app.use(cookieParser());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}));

// Initialise MongoDB
let users;
const client = new MongoClient(ATLAS_URI);

(async function connect() {
    // MongoDB connection code (optional based on requirements)
    app.listen(port, () => console.log(`Express server running on port ${port}.`));
    console.log(`Express server running on http://localhost:${port}.`);
})();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Public folder accessed by EJS (e.g. Bootstrap files)
app.use(express.static(path.join(__dirname, 'public')));
// Use the contents of 'bootstrap/dist/' which is placed in your node_modules folder as if it is in your '/styles/css' directory.
app.use("/bootstrap/", express.static(path.join(__dirname, "node_modules/bootstrap/")));

// --------------------------------------------------- EXPRESS ROUTES --------------------------------------------------

// Location-based post management
const locations = [
    "NHS Ayrshire & Arran",
    "NHS Borders",
    "NHS Dumfries & Galloway",
    "NHS Fife",
    "NHS Forth Valley",
    "NHS Grampian",
    "NHS Greater Glasgow & Clyde",
    "NHS Highland",
    "NHS Lanarkshire",
    "NHS Lothian",
    "NHS Orkney",
    "NHS Shetland",
    "NHS Tayside",
    "NHS Western Isles"
];

let postsByLocation = {};
locations.forEach(location => {
    postsByLocation[location] = [];
});

// ----------------------------------------------------- GET ROUTES ----------------------------------------------------

// GET /
app.get('/', function(req, res) {
    res.render('index');
});

// GET /sign_in
app.get('/sign_in', function(req, res) {
    res.render('pages/log_in', { title: 'Sign In' });
});

// GET /form - Render form with location-based posts
app.get('/form', function(req, res) {
    res.render('pages/form', { title: 'Form', locations, postsByLocation });
});

// ---------------------------------------------------- POST ROUTES ----------------------------------------------------
// Allow the Express server to read the body of a POST request.
app.use(express.urlencoded({ extended: true }));

// POST /form/post - Add a post to a specific location
app.post('/form/post', function(req, res) {
    const { location, title, content } = req.body;
    if (postsByLocation[location]) {
        postsByLocation[location].push({ title, content, replies: [] });
    }
    res.redirect('/form');
});

// POST /form/reply/:location/:id - Add a reply to a specific post in a specific location
app.post('/form/reply/:location/:id', function(req, res) {
    const { location, id } = req.params;
    const replyContent = req.body.reply;

    if (postsByLocation[location] && postsByLocation[location][id]) {
        postsByLocation[location][id].replies.push(replyContent);
    }

    res.redirect('/form');
});
