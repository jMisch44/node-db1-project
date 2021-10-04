const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  try {
    const { name, budget } = req.body
    if(name === undefined, budget === undefined) {
      next({ 
        status:400, 
        message: "name and budget are required" 
      })
    } else if (typeof name !== "string") {
      next({ 
        status:400, 
        message: "name of account must be a string" 
      })
    } else if (name.trim() <= 3 || name.trim() >= 100) {
      next({ 
        status:400, 
        message: "name of account must be between 3 and 100" 
      }) 
    } else if (typeof budget !== "number") {
        next({
          status: 400,
          message: "budget of account must be a number"
        })
      } else if (budget > 1000000 || budget < 0) {
        next({
          status: 400,
          message: "budget of account is too large or too small"
        })
      } else {
        next()
      }
  } catch (err) {
    next(err)
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const accounts = await Account.getAll()
    const filteredNames = accounts.filter(account => account.name === req.body.name.trim())
    if(filteredNames.length >= 1) {
      next({
        status: 400, message:  "that name is taken"
    })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id)
    if(!account) {
      next({status:404, message:'account not found'})
    } else {
      req.account = account
      next()
    }
  } catch (err) {
    next(err)
  }
}
