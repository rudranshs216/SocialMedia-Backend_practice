const Tweet = require("../models/tweetModel");
const User = require("../models/userModel");

const allTweet = async(req,res) => {

    const tweets = await Tweet.find({user: {$eq: req.user._id}}).populate("user")
    res.send(tweets);
    console.log(tweets);
}

const writeTweet = async (req,res) => {
    const tweet = {
        content: req.body.content,
        user: req.user._id
    }

    newTweet = await Tweet.create(tweet);
    await User.findByIdAndUpdate(req.user._id,{
        $push: { tweets: newTweet._id },
      },
      {
        new: true,
      })
    newTweet = await newTweet.populate("user").execPopulate();

    res.status(200).send(newTweet);

}

const likeTweet = async(req,res) => {
    const tweet = await Tweet.findByIdAndUpdate(req.body.tweetId, {
        $push: {like : req.user._id},
    },{
        new: true,
    });
    res.status(200).send(tweet);
}

  module.exports = {allTweet,writeTweet,likeTweet}