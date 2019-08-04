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
    ts: `eslint --ext .js,.ts,.tsx ${tsFiles} ${jsFiles}`,
    export: `no-unused-export ${tsFiles}`,
    commit: `commitlint --from=HEAD~1`,
    markdown: `markdownlint README.md`,
    typeCoverage: 'type-coverage -p src --strict'
  },
  test: [
    'tsc -p spec',
    'jasmine'
  ],
  fix: `eslint --ext .js,.ts,.tsx ${tsFiles} ${jsFiles} --fix`,
  screenshot: [
    new Service(`http-server -p 8000`),
    `tsc -p screenshots`,
    `node screenshots/index.js`
  ]
}
