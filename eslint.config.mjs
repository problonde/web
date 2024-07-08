import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(compat.extends("plugin:react/recommended", "airbnb")),
  {
    plugins: {
      react: fixupPluginRules(react),
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 13,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      "import/resolver": {
        typescript: {},
      },
    },

    rules: {
      "no-use-before-define": "off",

      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
        },
      ],

      quotes: ["error", "double"],

      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".tsx"],
        },
      ],

      "import/prefer-default-export": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "jsx-a11y/media-has-caption": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],

      "react/jsx-props-no-spreading": [
        "error",
        {
          exceptions: ["ContentNode"],
        },
      ],

      "react/require-default-props": "off",
    },
  },
];
