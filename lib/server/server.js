require("babel-core/register")({
        "presets": ["es2015", "react"]
});
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Grid = require('../client/app/components/grid').GriddleDefault;
const app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Prerender'
    });
});

const griddle = renderToString(React.createFactory(Grid)({}));
app.get('/pre', (req, res) => {
    res.render('index', {
        title: 'Prerender',
        griddle: griddle
    });
});

app.get('/:rows', (req, res) => {
    res.render('index', {
        title: 'Prerender'
    });
});

app.listen('3000', () => console.log('Server started on port 3000'));