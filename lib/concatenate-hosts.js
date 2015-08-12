var conf = require('../conf.js');
var fs = require('fs');
var dir = require('node-dir');
var streamBuffers = require('stream-buffers');

module.exports = {

    'concat': function concat() {
        'use strict';
        var buffer = new streamBuffers.WritableStreamBuffer({
            'initialSize': (100 * 1024),
            'incrementAmount': (10 * 1024)
        });

        buffer.write('# Generated using simple-host-config\n\n');

        dir.readFiles(conf.CONF_FOLDER, {
                'match': /.conf/,
            },
            this.readFileToBuffer.bind(buffer),
            this.writeBuffer.bind(buffer)
        );
    },

    'readFileToBuffer': function readFileToBuffer(error, content, next) {
        'use strict';
        if (error) {
            throw error;
        }
        this.write(content);
        next();
    },

    'writeBuffer': function writeBuffer(error, files) {
        'use strict';
        if (error) {
            throw error;
        }
        fs.writeFileSync('/etc/hosts', this.getContentsAsString());
    }

};
