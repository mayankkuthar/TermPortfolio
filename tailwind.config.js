module.exports = {
  content: ["./src/**/**/*.{ts,tsx,js,jsx}"],
  theme: {
     extend: {
      colors: {
        'txtc' : '#a9b1d6',
        'primc': '#bb9af7',
        'secc' : '#2ac3de',
        'bbg'  : '#1a1b26',
        'mxim' : '#00CA4E',
        'minm' : '#FFBD44',
        'clcs' : '#FF605C',
      },
      fontFamily: {
        Fira: ['Fira Code', 'sans-serif'],
      },
      backgroundImage: {
        'background': "url('/4787158.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}