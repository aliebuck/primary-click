import js from "@eslint/js";
import pluginVitest from "@vitest/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import configPrettier from "eslint-config-prettier/flat";
import globals from "globals";

export default defineConfig([
  globalIgnores(["coverage", "dist"]),
  js.configs.recommended,
  configPrettier,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["**/*.test.js", "**/__tests__/**/*.js"],
    extends: [pluginVitest.configs.recommended],
  },
]);
