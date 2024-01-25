const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

const PORT = process.env.PORT || 3000;

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

  <form action="/v1/blogs" method="POST" enctype="multipart/form-data">
    <input type="text" name="title"  />
    <input type="text" name="content"  />
    <input type="text" name="authorId"  />
    <input type="text" name="viewerId"  />
    <input type="file" name="image" id="image" />
    <input type="submit" value="submit" />
  </form>
  `.trim()
  );
});

app.use("/v1/users", userRouter);
app.use("/v1/blogs", blogRouter);

app.listen(PORT, () => {
  console.log(`app is listenin on port ${PORT}`);
});
