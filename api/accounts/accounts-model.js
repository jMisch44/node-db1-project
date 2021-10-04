const db = require("../../data/db-config");

const getAll = () => {
  return db("accounts")
};

const getById = (id) => {
  return db("accounts").where('id', id).first()
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
