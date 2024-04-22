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
        'markdownlint/md013': "off",
        'markdownlint/md024': ['error', {
          allow_different_nesting: true
        }
        ],
        'markdownlint/md041': "off",
      }
    },
  ],
};
