const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('/portfolio', function (req, res) {
    res.render('portfolio', {
        name: req.query.name,
    })
})

app.listen(8080, () => {
    console.log("The Server is running at 8080 port")
})