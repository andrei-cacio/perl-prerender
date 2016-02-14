const express = require('express');
const contentGrabber = require('./content-grabber');
const app = express();

const _WEB_APP_LOCATION = 'http://localhost:3000/';

app.get('/', (req, res) => {
    contentGrabber.grab(_WEB_APP_LOCATION, { clean: true }).then((content) => {
        res.send(content);
    });
});

app.get('/:rows', (req, res) => {
    contentGrabber.grab(_WEB_APP_LOCATION + req.params.rows, { clean: true }).then((content) => {
        res.send(content);
    });
});

app.listen('3001', () => console.log('Prerender server started on 3001'));
