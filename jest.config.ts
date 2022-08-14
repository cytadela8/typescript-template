import { resolve } from "path";

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/lib/**",
    "!**/vendor/**",
  ],
  testTimeout: 60000,
  moduleNameMapper: {
    "^@/(.*)$": resolve(__dirname, "./src/$1"),
    "^@test/(.*)$": resolve(__dirname, "./test/$1"),
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
};
