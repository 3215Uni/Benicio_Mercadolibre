const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    const pathHome = path.join(__dirname, 'public/views/home.html');
    res.sendFile(pathHome);
});

app.get('/login', (req, res) => {
    const pathLogin = path.join(__dirname, 'public/views/login.html');
    res.sendFile(pathLogin);
});

app.get('/register', (req, res) => {
    const pathRegister = path.join(__dirname, 'public/views/register.html');
    res.sendFile(pathRegister);
});

// Public (static) Listen Server
app.listen(3007, () => console.log(`Server up on PORT:  http://localhost:3007`));
