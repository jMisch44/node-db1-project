const db = require("../../data/db-config");

const getAll = () => {
  return db("account")
};

const getById = (id) => {
  // DO YOUR MAGIC
  return "connected";
};

const create = (account) => {
  // DO YOUR MAGIC
  return "connected";
};

const updateById = (id, account) => {
  // DO YOUR MAGIC
  return "connected";
};

const deleteById = (id) => {
  // DO YOUR MAGIC
  return "connected";
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
