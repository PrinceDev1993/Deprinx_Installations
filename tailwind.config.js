module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fonttwo: ['Open Sans']
      },
      backgroundImage: theme => ({
      'hero-pattern': "url('/dist/img/twelve.jpg')",
      'small-hero': "url('/dist/img/new.jpg')"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
