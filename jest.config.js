const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './components' })
const customJestConfig = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    moduleDirectories: ['node_modules', 'components'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}

module.exports = createJestConfig(customJestConfig)