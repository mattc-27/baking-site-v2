// Setup express
const express = require('express');

// Import middleware
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5000',
    methods: 'GET, POST, PUT',
    allowedHeaders: 'Content-Type,Authorization'
};

// Create express app
const app = express();

// Implement middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

//app.use(express.static(path.join(__dirname, '/')));

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser())

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get(`/api/backend_test`, async (req, res) => {
    try {
        res.send(JSON.stringify({ Express: 'Back end is connected' }));
    } catch (error) {
        console.error(error.message);
    }
});

// test route
/* 
app.get('/api/test/weather', async (req, res) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=Denver`)
        const data = await response.json();
            
        res.send(data)
    
    } catch (error) {
        console.error(error.message)
    }
});


*/


// main weather route
/* 
app.get(`/api/weather/:searchUrl`, async (req, res) => {
    const { searchUrl } = req.params;
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${searchUrl}&days=3`)
      const data = await response.json();
      res.send(data)
      console.log(data)
    } catch (error) {
      console.error(error.message)
    }
});


*/



// fetch background photo from unsplash api
/* 
app.get(`/api/weather/:searchUrl`, async (req, res) => {
    const { searchUrl } = req.params;
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${searchUrl}&days=3`)
      const data = await response.json();
      res.send(data)
      console.log(data)
    } catch (error) {
      console.error(error.message)
    }
})s


*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });


// Setup default port
app.set('port', process.env.PORT || 5000);

// Start express app
app.listen(app.get('port'), () => {
    console.log(`Server running at port: ${app.get('port')}`)
});