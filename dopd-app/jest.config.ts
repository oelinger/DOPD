import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom', // Verwende das manuell installierte jsdom
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json',
        },
    },
};

export default config;
