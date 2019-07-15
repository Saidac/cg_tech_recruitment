module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:vue/recommended',
    // 'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 0,
    'import/no-unassigned-import': 0,
    semi: ['error', 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ]
  }
}
