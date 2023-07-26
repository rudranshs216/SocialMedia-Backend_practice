const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    like: [
      {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
      }
    ]
  },
  { timestamps: true }
);

const Tweet = mongoose.model("tweets", tweetSchema);
module.exports = Tweet;
