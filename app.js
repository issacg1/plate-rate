const express = require('express');
const logger = require('morgan');
const path = require ('path');
const bodyParser = require('body-parser');

const app = express();

//sets the route to our view files
app.set('views', path.join(__dirname, 'views'));
//sets the type of view engine we are using
app.set('view engine', 'ejs');

//sets route to static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

const postRoutes = require('./routes/post-routes');
app.use('/posts', postRoutes);

const aboutmeRoutes = require('./routes/aboutme-routes');
app.use('/aboutme', aboutmeRoutes);

app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

app.get('/', (req, res) => {
    res.render('index')
})

app.get('*', (req, res) => {
    res.send('Not Found');
});