const RedisStrategy = require('./RedisStrategy');
const MemoryStrategy = require('./MemoryStrategy');
const SQLStrategy = require('./SQLStrategy');
const FirebaseStrategy = require('./FirebaseStrategy');

module.exports = {
	RedisStrategy,
	MemoryStrategy,
	SQLStrategy,
	FirebaseStrategy
};
