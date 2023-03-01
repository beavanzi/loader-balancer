const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let counter = 0;


function roundRobin() {
    if (counter === 0) {
        counter++;
        return 'http://localhost:3001';
    } else if (counter === 1) {
        counter++;
        return 'http://localhost:3002';
    } else if (counter === 2) {
        counter = 0;
        return 'http://localhost:3003';
    }
}

app.listen(3000, () => {
    console.log('Listening on port 3000');
});


app.get('/', async (req, res) => {
    const url = roundRobin();
    const request = await axios.get(url)
    return res.send(request.data)
})
