const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

const name = {
  name: 'Tito',
  foods: ['all the food!', 'Thai', 'Indian', 'Mexican', 'Spicy', 'Eggs'],
  drink: 'water',
  alcohol: 'tequila'
};

app.get('/', (req, res) => {
  res.render('index', name);
});

app.listen(port, () => {
  console.log('listening at port: ', port);
});
