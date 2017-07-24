const db = require('../db');

module.exports = db.defineModel('users', {
  userid: db.STRING(300),
  username: {
    type: db.STRING(100)
  },
  password: db.STRING(200)
});