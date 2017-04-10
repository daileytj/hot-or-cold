const express = require('express');
const cors = require('cors')
const jsonParser = require('body-parser').json();

const highScore = require('./models');

const app = express();
const router = express.Router();

app.use(jsonParser, cors());

let highScore = null;

app.get('/fewest-guesses/', (req, res) => {
    res.json({
        highScore: highScore
    });
});

app.put('/fewest-guesses/', jsonParser, (req, res) => {
    if (highScore === null || req.body.highScore < highScore) {
        highScore = req.body.highScore;
    }
    res.status(201).json({
        highScore: highScore
    });
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
