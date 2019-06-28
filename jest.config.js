module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/src/__tests__/setup.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/__tests__/setup.js',
    '<rootDir>[/\\\\](build|docs|node_modules|scripts|dist)[/\\\\]'
  ]
};
