const bunyan = require('bunyan');
let logger = bunyan.createLogger({name: 'myapp'});
module.exports = logger;