'use strict';
const url = require('url');
const AuthGot = require('pixiv-auth-got');

const ENDPOINT = 'https://app-api.pixiv.net/';

module.exports = (endpoint, opts) => {
	if (typeof endpoint !== 'string') {
		Promise.reject(new TypeError(`Expeted a string, got ${typeof endpoint}`));
	}

	opts = opts || {};

	if (!opts.username) {
		Promise.reject(new Error(`username required`));
	}

	if (!opts.password) {
		Promise.reject(new Error(`password required`));
	}

	endpoint = /http/.test(endpoint) ? endpoint : url.resolve(ENDPOINT, endpoint);

	const authGot = new AuthGot(opts.username, opts.password);
	return authGot.got(endpoint).then(res => res.body);
};
