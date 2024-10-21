const router = require('express').Router();
const apiRoutes = require('./api');

// Direct all /api requests to our API routes
router.use('/api', apiRoutes);

// Catch-all route for any unmatched routes
router.use((req, res) => {
  res.status(404).send("<h1>Oops! Page not found.</h1>");
});

module.exports = router;