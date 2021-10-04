const router = require("express").Router();

const Account = require("./accounts-model.js");
const {
  checkAccountId, 
  checkAccountPayload, 
  checkAccountNameUnique 
} = require('./accounts-middleware')

router.get("/", async (req, res, next) => {
  try {
    const accounts = await Account.getAll()
    res.status(200).json(accounts)
  } catch (err) {
    next(err)
  }
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  res.json(req.account)
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
