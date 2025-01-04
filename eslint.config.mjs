import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Apply to relevant file types
    rules: {
      "no-unused-vars": "off", // Disable the base rule
      "@typescript-eslint/no-unused-vars": [
        "warn", // Set to 'warn'
        {
          vars: "all", // Check all variables
          args: "after-used", // Ignore unused arguments if they're after used ones
          ignoreRestSiblings: true, // Ignore destructured rest siblings
        },
      ],
    },
  },
]

export default eslintConfig
