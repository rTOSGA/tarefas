module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        "img-tarefas": "url('/images/to-do-image.jpg')"
      })
    },
  },
  plugins: [],
}