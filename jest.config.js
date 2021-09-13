const path = require("path");
module.exports = {
  rootDir: path.resolve(__dirname),
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  // The alias set
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // The test file
  testMatch: ["<rootDir>/tests/unit/*.spec.ts?(x)"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
};
