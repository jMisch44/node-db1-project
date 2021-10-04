const router = require("express").Router();

const Accounts = require("./accounts-model.js");
const {
  checkAccountId, 
  checkAccountPayload, 
  checkAccountNameUnique 
} = require('./accounts-middleware')

router.get("/", async (req, res, next) => {
  try {
    console.log(await Accounts.getAll())
  } catch (err) {
    next(err)
  }
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  // try {
  //   const account = await Accounts.getById(req.params.id)
  //   res.status(200).json(account)
  // } catch (err) {
  //   next(err)
  // }
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {// eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
