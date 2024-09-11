module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/testData/mockScss.js'
  }
};