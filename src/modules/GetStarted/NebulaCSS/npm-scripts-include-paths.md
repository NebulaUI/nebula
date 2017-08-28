Next add Sass compilation to your NPM scripts.

The following example should be modified to match your `src/` and `dist/` directories.

```json
"scripts": {
  "sass": "node-sass --include-path ./node_modules/nebula-css/ -o dist src/scss/main.scss"
}
```

You will also likely want to use Autoprefixer to add in any necessary vendor prefixes e.g.
We recommend that you configure Autoprefixer with [browserslist](https://www.npmjs.com/package/browserslist)


Your NPM scripts may then look like the following

```json
"scripts": {
  "sass": "node-sass --include-path ./node_modules/nebula-css/ -o dist src/scss/main.scss"
  "autoprefixer": "postcss -u autoprefixer -r dist/main.css"
  "build:styles": "npm run sass && npm run autoprefixer"
}
```

