import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    html: true,
    css: true,
  },
  react: true,

  rules: {
    'node/prefer-global/process': 'off',
  },

  ignores: [
    'src-tauri/**',
    'dist/**',
  ],
})
