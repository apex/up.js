<img src="http://tjholowaychuk.com:6000/svg/title/UP/JS">

[Up](https://github.com/apex/up) application companion library for Node and the browser, providing out of the box solutions for authentication, logging, messaging and more.

## Installation

```
$ npm install up
```

## Logging

Up supports [structured logging](https://up.docs.apex.sh/#guides.mastering_logging.json) in the form of JSON written to stdout. To make this process a bit cleaner, up.js provides a `Logger` as shown here:

```js
const { Logger } = require('up')
const log = new Logger()

log.error('user login attempt failed', { user: 'tobi' })
log.info('user login', { user: 'tobi' })
log.info('user logout', { user: 'tobi' })
```

The following severity levels are available:

- `debug`
- `info`
- `warn`
- `error`
- `fatal`

---

[![Build Status](https://semaphoreci.com/api/v1/tj/up-js/branches/master/badge.svg)](https://semaphoreci.com/tj/up-js)
![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

<a href="https://apex.sh"><img src="http://tjholowaychuk.com:6000/svg/sponsor"></a>
