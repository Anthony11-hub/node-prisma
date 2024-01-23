const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const addBlog = async (req, res) => {
  const newBlog = await prisma.blog.create({ data: req.body });
  res.json(newBlog);
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
