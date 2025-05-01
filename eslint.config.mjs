// eslint.config.mjs
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    languageOptions: { globals: globals.browser },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "arrow-body-style": ["error", "as-needed"],
      "prefer-arrow-callback": "error",
    }
  },
  pluginReact.configs.flat.recommended,
  prettierConfig,
]);