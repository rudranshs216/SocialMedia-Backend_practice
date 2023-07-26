const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const tweetRoutes = require("./routes/tweetRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB();
const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/tweet", tweetRoutes);

  app.get("/", (req, res) => {
    res.send("API is running..");
  });

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(3000,()=>{
    console.log("server running on 3000");
})