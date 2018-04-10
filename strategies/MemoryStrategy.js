module.exports = class MemoryStrategy {
	constructor() {
		this.store = {};
	}

	storeShop({ shop, accessToken }) {
		this.store[shop] = { accessToken };

		return Promise.resolve({ accessToken });
	}

	getShop({ shop }) {
		return Promise.resolve(this.store[shop]);
	}
};
