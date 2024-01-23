const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  const finduser = await prisma.user.findMany();
  res.json(finduser);
};

const getSingleUser = async (req, res) => {
  const id = req.params.id;
  const findsingleuser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  res.json(findsingleuser);
};

const addUser = async (req, res) => {
  const newUser = await prisma.user.create({ data: req.body });
  res.json(newUser);
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const editUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: req.body,
    });
    res.json(editUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  res.json(deletedUser);
};

module.exports = {
  getUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
};
