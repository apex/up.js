const { test } = require('ava')
const { Logger } = require('./')

test('index', t => {
	t.truthy(Logger, 'expose Logger')
})
