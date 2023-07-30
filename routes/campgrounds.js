const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const campgrounds = require('../controllers/campgrounds')

const { isLoggedIn, isAuthor,validateCamp } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const Campground = require('../models/campground');

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'), validateCamp, catchAsync(campgrounds.createCampgrounds));

router.get('/new', isLoggedIn, campgrounds.renderNewForm)


router.route('/:id')
    .get(catchAsync(campgrounds.showCampgrounds))
    .put(isLoggedIn,isAuthor ,upload.array('image'),  validateCamp, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn,isAuthor,catchAsync(campgrounds.deleteCampground))







router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEdit))





module.exports = router;