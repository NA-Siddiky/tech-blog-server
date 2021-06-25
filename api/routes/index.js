const express = require('express');

const blogRoutes = require('./blogs')

const router = express.Router();

router.use('/blogs', blogRoutes);

module.exports = router;
