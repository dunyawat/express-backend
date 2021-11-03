
exports.index = (req, res, next) => {
    res.status(200).json({
      message:"Hello User"
    })
}

exports.login = (req, res, next) => {
    res.status(200).json({
      message:"Hello User login"
    })  
  }