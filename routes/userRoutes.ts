// routes/userRoutes.ts
const express = require('express');
const { updateUserData, fetchUserData } = require('../controller/api');

const router = express.Router();

router.put('/:id', updateUserData);
router.get('/:id', fetchUserData);

module.exports = router;
