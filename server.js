const express = require('express');

/* Since we set up the routes the way we did, we don't have to worry about importing multiple
 files for different endpoints. The router instance in routes/index.js collected everything 
 for us and packaged them up for server.js to use */
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});