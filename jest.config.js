/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(test|spec).+(ts|tsx|js)'],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/*stub*/**',
    '!**/*is-server*.{ts,tsx}',
    '!**/*is-client*.{ts,tsx}',
  ],
};
