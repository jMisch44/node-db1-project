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

router.post("/", checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  try{
    const newAccount = await Account.create(req.body)
    res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
});

router.put("/:id",
 checkAccountId, 
 checkAccountPayload,
 checkAccountNameUnique, 
 async (req, res, next) => {
  try { 
    const updated = await Account.updateById(req.params.id, req.body)
    res.json(updated)
  } catch (err) {
    next(err)
  }
});

router.delete("/:id", checkAccountId, async (req, res, next) => {
  try{
    await Account.deleteById(req.params.id)
    res.json(req.account)
  } catch (err) {
    next(err)
  }
});

router.use((err, req, res, next) => {// eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
