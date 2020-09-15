module.exports = function (options = {}) {
  return function authorize (req, res, next) {
    req.feathers = { ...req.feathers, headers: req.headers }
    next()
  }
}
