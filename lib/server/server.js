const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', (reg, res) => {
    res.render('index', {
        title: 'Prerender'
    });
});

app.get('/:rows', (reg, res) => {
    res.render('index', {
        title: 'Prerender'
    });
});

app.listen('3000', () => console.log('Server started on port 3000'));