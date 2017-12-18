const conn = require('./conn')

const sync = () => conn.sync({ force: true })
// const seed = () => require('../seed')(User, Goal, Task, Category)

module.exports = {
  sync
}
