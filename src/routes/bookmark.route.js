const express = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const feedValidation = require('../validations/feed.validation');
const feedController = require('../controllers/feeds.controller');
const upload = require('../middlewares/image.upload');

const router = express.Router();

// Token authentication for all routes defined in this file
router.use(auth());

router
    .route('/:feedId')
    .patch(feedController.BookmarkFeed)

module.exports = router;

