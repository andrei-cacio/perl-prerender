require("babel-core/register")({
        "presets": ["es2015", "react"]
});
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const grid = require('../client/app/components/grid');
const app = express();
const Griddle = grid.GriddleComp;
const fakeData = grid.data;

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Prerender'
    });
});

app.get('/pre', (req, res) => {
    res.render('index', {
        react: renderToString(React.createElement(Griddle, { results: fakeData, resultsPerPage: 20 }))
    });
});

app.get('/:rows', (req, res) => {
    res.render('index', {
        title: 'Prerender'
    });
});

app.listen('3000', () => console.log('Server started on port 3000'));