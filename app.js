const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");

app.use(express.json());

app.get("/", async (req, res) => {
  res.send(
    `
  <h1>Users and Blogs REST API</h1>
  <h2>Available Routes</h2>
  <pre>
    / users 
    GET, POST /v1/users
    GET, PATCH, DELETE /v1/users/:id

    / blogs
    GET /v1/blogs = get all blogs
    GET /v1/blogs/filter = get filtered blogs
    GET /v1/blogs/:id = get single blog
    POST /v1/blogs/:id = post single blogs
    POST /v1/blogs/many = post many blogs
  </pre>
  `.trim()
  );
});

app.use("/v1/users", userRouter);
app.use("/v1/blogs", blogRouter);

app.listen(3000, () => {
  console.log("app is listenin on port 3000");
});
