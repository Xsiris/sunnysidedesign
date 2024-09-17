/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      'sm' : '375px',
      'md' : '768px',
      'lg' : '1200px'
    },
    extend: {
      colors:{
        'sunnySoftRed': 'hsl(7, 99%, 70%)',
        'sunnyYellow': 'hsl(51, 100%, 49%)',
        'sunnyDarkDesaturatedCyan': 'hsl(167, 40%, 24%)',
        'sunnyDarkBlue': 'hsl(198, 62%, 26%)',
        'sunnyDarkModerateCyan': 'hsl(168, 34%, 41%)',
        'sunnyVeryDarkDesaturatedBlue': 'hsl(212, 27%, 19%)',
        'sunnyVeryDarkGrayishBlue': 'hsl(213, 9%, 39%)',
        'sunnyDarkGrayishBlue': 'hsl(232, 10%, 55%)',
        'sunnyGrayishBlue': 'hsl(210, 4%, 67%)',
        'sunnySkyBlue': 'hsl(200, 100%, 62%, 1)',
        'sunnySkyBlueHover': 'hsl(200, 100%, 62%, 0.5)',
        'sunnyOffWhite': 'hsla(20, 100%, 99%, 1)',
        'sunnyLightGreen': 'hsl(168, 45%, 70%, 1)',
        'sunnyLightGreenBG': 'hsl(166, 46%, 73%, 1)'
      },
      backgroundImage:{
        'sunnyBgOrange' : "url('/src/img/mobile/image-header.jpg')",
        'sunnyBgCherry' : "url('/src/img/mobile/image-graphic-design.jpg')",
        'sunnyBgPhotos' : "url('/src/img/mobile/image-photography.jpg')",
        'sunnyBgOrangeDesktop' : "url('/src/img/desktop/image-header.jpg')",
        'sunnyBgCherryDesktop' : "url('/src/img/desktop/image-graphic-design.jpg')",
        'sunnyBgPhotosDesktop' : "url('/src/img/desktop/image-photography.jpg')"
      }
    },
    fontFamily:{
      'Barlow' : ['Barlow'],
      'Fraunces' : ['Fraunces']
    }
  },
  plugins: [],
}

