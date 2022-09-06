module.exports = {
  roots: [
    '.',
  ],
  verbose: true,
  testMatch: [
    '**/dummy.test.ts',
  ],
  testEnvironment: 'node',
  transform: {
    '\\.ts$': 'ts-jest',
  },
  setupFilesAfterEnv: [
    './test/jest.setup.js',
  ],
  preset: 'ts-jest',
};