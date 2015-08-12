# simple-host-config

## Installation

### `sudo npm install -g simple-host-config --unsafe`

Install requires using the --unsafe flag. This is because it requires super use privs for it's postinstall script which can be seen [here](https://github.com/dick-clark/simple-host-config/blob/master/lib/postinstall.js). This is because it creates a folder called `/etc/hosts.d/` and copies your `/etc/hosts` file to `/etc/hosts.d/10-default.conf`.

## Usage

### `sudo simple-host-config`

This will concatenate all `.conf` files within `/etc/hosts.d/` and output the stream to `/etc/hosts`.
