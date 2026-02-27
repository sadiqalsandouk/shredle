const nextCoreWebVitals = require("eslint-config-next/core-web-vitals")
const nextTypescript = require("eslint-config-next/typescript")

module.exports = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]
