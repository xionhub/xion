/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(test|spec).+(ts|tsx|js)'],
};
