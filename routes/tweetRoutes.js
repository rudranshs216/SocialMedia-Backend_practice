const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { allTweet, writeTweet, likeTweet } = require("../controllers/TweetController");

const router = express.Router();

router.route("/").get(protect, allTweet);
router.route("/").post(protect, writeTweet);
router.route("/like").post(protect, likeTweet);

module.exports = router;
