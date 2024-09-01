const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors'); 
const User = require('./mongo.js'); 

dotenv.config();

app.use(cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true, 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/signin', (req, res) => {
    res.send('Signup Page');
});

app.get('/login', (req, res) => {
    res.send('Login Page');
});

app.get('*', (req, res) => {
    res.status(404).send("404: Page Not Found");
});

app.post('/signin', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });
        await user.save();
  
        const { accessToken, refreshToken } = user.getSignedToken(res);
        res.status(201).json({ success: true, accessToken });
    } catch (error) {
        console.error('Signup Error:', error); 
        res.status(500).json({ success: false, message: 'Server error. Could not register user.' });
    }
});
  
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ success: false, message: 'User not found' });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid password' });

        const { accessToken, refreshToken } = user.getSignedToken(res);
        res.status(201).json({ success: true, accessToken });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ success: false, message: 'Server error. Could not log in.' });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
