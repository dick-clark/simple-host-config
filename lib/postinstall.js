var fs = require('fs');
var conf = require('../conf.js');

if (!fs.existsSync(conf.CONF_FOLDER)) {
    // Create hots.d conf folder
    fs.mkdirSync(conf.CONF_FOLDER);
}

if (!fs.existsSync(conf.CONF_FOLDER + conf.DEFAULT_CONF)) {
    // Copy existing hosts file to .conf directory
    fs.createReadStream('/etc/hosts')
      .pipe(fs.createWriteStream(conf.CONF_FOLDER + conf.DEFAULT_CONF));
}
