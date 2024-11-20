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

// Allow the Express server to read the body of a POST request.
app.use(express.urlencoded({ extended: true }));


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

// ---------------------------------------------------Login---------------------------------------------------

// Check if the user is logged in
function checkAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        // User is logged in
        return next();
    }
    // User is not logged in, redirect to login page
    res.redirect('/sign_in');
}

// Apply to all routes except `/` and `/sign_in`
app.use((req, res, next) => {
    if (req.path === '/' || req.path === '/sign_in') {
        return next();
    }
    checkAuthenticated(req, res, next);
});

// POST /sign_in - Authenticate user and start session
app.post('/sign_in', (req, res) => {
    const { email, password } = req.body;

    // Static credentials for admin user
    const adminEmail = "admin";
    const adminPassword = "admin";

    if (email === adminEmail && password === adminPassword) {
        req.session.user = { email }; // Store user info in session
        return res.redirect('/forum'); // Redirect to forum after successful login
    }

    // If authentication fails, redirect back to login with a failure message
    res.render('pages/log_in', {
        title: 'Sign In',
        errorMessage: 'Invalid email or password. Please try again.',
    });
});

// Add reply helper function
function addReplyToReplies(replies, replyId, newReply) {
    for (let reply of replies) {
        if (reply.id === replyId) {
            reply.replies.push(newReply);
            return true;
        }
        if (reply.replies.length > 0) {
            const added = addReplyToReplies(reply.replies, replyId, newReply);
            if (added) return true;
        }
    }
    return false;
}


// --------------------------------------------------- EXPRESS ROUTES --------------------------------------------------

// ----------------------------------------------------- GET ROUTES ----------------------------------------------------

// GET /
app.get('/', function(req, res) {
    res.render('index');
});

// GET /sign_in
app.get('/sign_in', function(req, res) {
    res.render('pages/log_in', { title: 'Sign In' });
});

// GET /forum
app.get('/forum', function(req, res) {
    res.render('pages/forum', { title: 'Forum', locations: locations, postsByLocation: postsByLocation });
});


// ---------------------------------------------------- POST ROUTES ----------------------------------------------------

// POST /forum/post - Add a post to a specific location
app.post('/forum/post', function(req, res) {
    const { location, title, content } = req.body;
    if (postsByLocation[location]) {
        postsByLocation[location].push({
            id: crypto.randomUUID(),
            title,
            content,
            replies: []
        });
    }
    res.redirect('/forum');
});

// POST /forum/reply/:location/:postId - Add a reply to a specific post or reply
app.post('/forum/reply/:location/:postId', function(req, res) {
    const { location, postId } = req.params;
    const { parentReplyId, replyContent } = req.body;

    if (postsByLocation[location]) {
        const post = postsByLocation[location].find(p => p.id === postId);
        if (post) {
            const newReply = { id: crypto.randomUUID(), content: replyContent, replies: [] };

            if (parentReplyId) {
                // Add reply to an existing reply
                addReplyToReplies(post.replies, parentReplyId, newReply);
            } else {
                // Add reply to the post itself
                post.replies.push(newReply);
            }
        }
    }

    res.redirect('/forum');
});
