var argv = require('yargs').argv;
var concat = require('./lib/concatenate-hosts.js');

if (argv.concat) {

    concat.concat();

}
