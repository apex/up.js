
/**
 * Logger is an Up specific logger, which has the
 * simply requirement of outputting JSON logs to
 * stdout, Up handles the rest.
 */

class Logger {
  constructor(w = process.stdout) {
    this.w = w
  }

  debug(message, fields = {}) {
    this.write({
      level: 'debug',
      message,
      fields
    })
  }

  info(message, fields = {}) {
    this.write({
      level: 'info',
      message,
      fields
    })
  }

  warn(message, fields = {}) {
    this.write({
      level: 'warn',
      message,
      fields
    })
  }

  error(message, fields = {}) {
    this.write({
      level: 'error',
      message,
      fields
    })
  }

  fatal(message, fields = {}) {
    this.write({
      level: 'fatal',
      message,
      fields
    })
  }

  write(log) {
    this.w.write(JSON.stringify(log))
  }
}


module.exports = Logger
