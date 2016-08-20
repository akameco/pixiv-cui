#!/usr/bin/env node
'use strict';
const meow = require('meow');
const Conf = require('conf');
const pixivCui = require('./');

const cli = meow(`
	Usage
	  $ pixiv [input]

	Options
	  --username,-u  pixiv yourname
	  --password,-p  pixiv password

	Examples
	  $ pixiv -u user -p pass /v1/illust/ranking?mode=day
	  $ pixiv /v1/illust/ranking?mode=day

	APIs
	  v1/user/detail?user_id=?
	  v1/user/illusts?user_id=?&type=?
	  v1/user/bookmarks/illust?restrict=?&user_id=?
	  v2/illust/follow?restrict=?
	  v1/illust/comments?include_total_comments=true&illust_id=?
	  v1/illust/related?illust_id=?
	  v1/illust/recommended?include_ranking_label=true&content_type=?
	  v1/illust/ranking?mode=?
	  v1/trending-tags/illust
	  v1/search/illust?word=?&sort=date_desc&search_target=partial_match_for_tags
	  v2/illust/bookmark/detail?illust_id=?
	  v1/user/bookmark-tags/illust?restrict=?
`, {
	alias: {
		username: 'u',
		password: 'p'
	}
});

const env = process.env;
const config = new Conf();

const opts = cli.flags;
opts.username = opts.username || env.PIXIV_USERNAME || config.get('username');
opts.password = opts.password || env.PIXIV_PASSWORD || config.get('password');

pixivCui(cli.input[0], cli.flags).then(body => {
	console.log(JSON.stringify(body, null, 2));
}).catch(err => {
	console.log(err);
	process.exit(1);
});

config.set('username', opts.username);
config.set('password', opts.password);
