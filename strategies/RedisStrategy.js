const util = require('util');
const redis = require('redis');

module.exports = class RedisStrategy {
	constructor(redisConfig) {
		const client = redis.createClient(redisConfig);

		this.client = {
			hgetall: util.promisify(client.hgetall).bind(client),
			hmset: util.promisify(client.hmset).bind(client)
		};
	}

	storeShop({ shop, accessToken }) {
		Promise.resolve(this.client.hmset(shop, { accessToken }));

		return { accessToken };
	}

	getShop({ shop }) {
		return Promise.resolve(this.client.hgetall(shop) || {});
	}
};
