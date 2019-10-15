module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', "prettier"],
  extends: ['plugin:@typescript-eslint/recommended'],
  "rules": {
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/camelcase": "off",
    "prettier/prettier": "error"
  }
}