const users = require('./user')
const authentication = require('./authentication')

module.exports = {
    ...users,
    ...authentication
}