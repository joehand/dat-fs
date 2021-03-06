var countImport = require('hyperdrive-count-import')
var db = require('./lib/db')

module.exports = function (dir) {
  return {
    db: function (opts, cb) {
      return db(dir, opts, cb)
    },
    importFiles: function (archive, opts, cb) {
      return countImport(archive, dir, opts, cb)
    }
  }
}
