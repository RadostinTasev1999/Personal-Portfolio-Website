import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
//! -> These rules are applied to all of the files ESLint processes using this config file.
  {
    rules : {
      semi: 'error',
      'prefer-const': 'error'
    },
    languageOptions : {
      ecmaVersion: 'latest',
      
    }
  }, 
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]); // -> defineConfig returns a config array



export default eslintConfig;
