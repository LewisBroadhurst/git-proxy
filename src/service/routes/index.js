const express = require('express');
const auth = require('./auth');
const push = require('./push');
const home = require('./home');
const repo = require('./repo');
const users = require('./users');
const healthcheck = require('./healthcheck');
const config = require('./config');
const router = new express.Router();

router.use('/api', home);
router.use('/api/auth', auth);
router.use('/api/v1/healthcheck', healthcheck);
router.use('/api/v1/push', push);
router.use('/api/v1/repo', repo);
router.use('/api/v1/user', users);
router.use('/api/v1/config', config);

module.exports = router;
