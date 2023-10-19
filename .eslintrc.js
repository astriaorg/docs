module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:mdx/recommended',
  ],
  settings: {
    "mdx/code-blocks": true,
    "mdx/language-mapper": {}
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.mdx'],
      rules: {
        'no-unused-expressions': 'off',
      }
    },
    {
      files: ['*.md'],
      parser: 'eslint-plugin-markdownlint/parser',
      extends: ['plugin:markdownlint/recommended'],
      rules: {
        'markdownlint/md001': "off",
        'markdownlint/md013': [ 'error', {
          code_block_line_length: 120,
          tables: false
        }],
        'markdownlint/md032': "off",
      }
    },
  ],
};
