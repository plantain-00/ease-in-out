const tsFiles = `"src/**/*.ts"`

export default {
  build: [
    'rimraf dist/',
    'tsc -p src',
    'rollup --config rollup.config.js'
  ],
  lint: {
    ts: `eslint --ext .js,.ts,.tsx ${tsFiles}`,
    export: `no-unused-export ${tsFiles}`,
    markdown: `markdownlint README.md`,
    typeCoverage: 'type-coverage -p src --strict'
  },
  test: [],
  fix: `eslint --ext .js,.ts,.tsx ${tsFiles} --fix`
}
