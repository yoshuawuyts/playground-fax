# playground-fax

Fun little place to play with [fax][fax].
To make it work you must add the following to `node_modules/fax/node_modules/koa-compose`

```js
"browserify": {
  "transform": [
    "es6ify"
  ]
}
```

## Usage
```sh
make start
```


## License
[MIT](https://tldrlegal.com/license/mit-license)

[fax]: https://github.com/yoshuawuyts/fax
