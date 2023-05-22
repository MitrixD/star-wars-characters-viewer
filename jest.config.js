module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!axios)', '\\.css$'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  extensionsToTreatAsEsm: ['.tsx', '.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
