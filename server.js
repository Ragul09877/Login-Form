const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// GET route to serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET route to serve the login form
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// POST route to handle form submission
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Sending a response back to the client with username and password
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Successful</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="container">
                <div id="success-message">
                    <h2>Login successful! Welcome, ${username}.</h2>
                    <p>Your username is: ${username}</p>
                    <p>Your password is: ${password}</p>
                </div>
                <footer>&copy; 2024 Our Website</footer>
            </div>
        </body>
        </html>
    `);
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});