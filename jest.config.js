module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  // setupTestFrameworkScriptFile: '<rootDir>src/setupTests.js',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
