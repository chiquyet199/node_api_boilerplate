const noteRoutes = require('./notes')

module.exports = function(app, db) {
  noteRoutes(app, db)
}
