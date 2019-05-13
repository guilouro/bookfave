// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: [
    'src/global.styles.js',
    'src/index.js',
    'src/store.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/.test-config/index.js']
}
