const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const addBlog = async (req, res) => {
  try {
    const { title, content, authorId, viewerId } = req.body;

    // Check if the required fields are present
    if (!title || !content || !authorId || !viewerId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Get the file details
    const { filename, path } = req.file;

    // Save the blog details and image information in the database
    const newBlog = await prisma.blog.create({
      data: {
        title,
        content,
        authorId,
        viewerId,
        imageUrl: path, // You may want to store the full path or URL to the image
      },
    });

    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addManyBlogs = async (req, res) => {
  const manyBlogs = await prisma.blog.createMany({ data: req.body });
  res.json(manyBlogs);
};

const getSingleBlog = async (req, res) => {
  const id = req.params.id;
  const findsingleblog = await prisma.blog.findUnique({
    where: {
      id: id,
    },
    include: {
      author: true,
      viewer: true,
    },
  });
  res.json(findsingleblog);
};

const getAllBlogs = async (req, res) => {
  const findallblogs = await prisma.blog.findMany({
    include: {
      author: true,
      viewer: true,
    },
  });
  res.json(findallblogs);
};

const filter = async (req, res) => {
  const filter = await prisma.blog.findMany({
    where: {
      author: {
        age: {
          lte: 23,
        },
      },
    },
    include: {
      author: true,
      viewer: false,
    },
  });
  res.json(filter);
};

module.exports = {
  addBlog,
  addManyBlogs,
  getSingleBlog,
  getAllBlogs,
  filter,
};
