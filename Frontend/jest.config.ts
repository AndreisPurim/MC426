import type { Config } from '@jest/types';

module.exports = {
    roots: ['<rootDir>/src/A5tests'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: "jsdom",
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: "coverage",
};
