# pixiv-cui [![Build Status](https://travis-ci.org/akameco/pixiv-cui.svg?branch=master)](https://travis-ci.org/akameco/pixiv-cui)

> pixiv app api for cui


## Install

```
$ npm install --global pixiv-cui
```


## Usage

```
$ pixiv --help
  pixiv app api for cui

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
```


Caching username & password.

Can be set globally with the `PIXIV_USERNAME` & `PIXIV_PASSWORD` environment variable.

## License

MIT © [akameco](http://akameco.github.io)
