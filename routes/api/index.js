
/* In user-routes.js we didn't use the word users in any routes.
 That's because in this file we take those routes and implement them
 to another router instance, prefixing them with the path /users at that time. */
const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;