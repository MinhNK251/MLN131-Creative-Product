import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: ["react-refresh"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error"
        {
          argsIgnorePattern: "^_", // ignore unused function args starting with _
          varsIgnorePattern: "^_", // ignore unused variables starting with _
          caughtErrorsIgnorePattern: "^_", // ignore unused catch(err)
        },
      ],
      "react-refresh/only-export-components": "off",
    },
  },
];

export default eslintConfig;
