const { Service } = require('clean-scripts')

const tsFiles = `"src/**/*.ts" "spec/**/*.ts" "screenshots/**/*.ts"`
const jsFiles = `"*.config.js"`

module.exports = {
  build: [
    'rimraf dist/',
    'tsc -p src',
    'rollup --config rollup.config.js'
  ],
  lint: {
    ts: `tslint ${tsFiles}`,
    js: `standard ${jsFiles}`,
    export: `no-unused-export ${tsFiles}`,
    commit: `commitlint --from=HEAD~1`,
    markdown: `markdownlint README.md`
  },
  test: [
    'tsc -p spec',
    'jasmine'
  ],
  fix: {
    ts: `tslint --fix ${tsFiles}`,
    js: `standard --fix ${jsFiles}`
  },
  screenshot: [
    new Service(`http-server -p 8000`),
    `tsc -p screenshots`,
    `node screenshots/index.js`
  ]
}
