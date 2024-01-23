const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");

app.use(express.json());

app.use("/v1/users", userRouter);
app.use("/v1/blogs", blogRouter);

app.listen(3000, () => {
  console.log("app is listenin on port 3000");
});
