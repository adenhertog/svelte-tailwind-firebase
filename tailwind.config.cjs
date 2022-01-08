module.exports = {
  content: [
    './src/**/*.svelte'
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  // darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {}
  },
  plugins: []
}
