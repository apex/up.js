const { test } = require('ava')
const Logger = require('./logger')

class TestWriter {
	constructor() {
		this.writes = []
	}

	write(s) {
		this.writes.push(s)
	}
}

test('Logger', t => {
	const w = new TestWriter
	const log = new Logger(w)

	log.error('user login attempt failed', { user: 'tobi' })
	log.info('user login', { user: 'tobi' })
	log.info('user logout', { user: 'tobi' })

	t.deepEqual(w.writes, [
		`{"level":"error","message":"user login attempt failed","fields":{"user":"tobi"}}`,
		`{"level":"info","message":"user login","fields":{"user":"tobi"}}`,
		`{"level":"info","message":"user logout","fields":{"user":"tobi"}}`
	])
})
