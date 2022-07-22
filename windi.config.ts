import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  shortcuts: {
    // 'border-1': 'border border-solid border-base-3'
  },
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    backgroundSize: {
      // my: '100% auto'
    },
    screens: {
      xs: '480px',
      sm: '501px',
      md: '771px',
      lg: '981px',
      xl: '1200px',
      xll: '1440px'
    },
    colors: {
      base: {
        0: '#0071dc',
        1: '#ffffff'
      },
      regular: {
        0: '#CECCD6'
      },
      rarly: {
        0: '#f1f3f8',
        1: '#f5f5f5',
        2: '#d9dee3',
        3: '#031f42'
      },
      rare: {
        0: '#ddd',
        1: '#333333'
      }
    },
    fontFamily: {
      // dela: ['Dela Gothic One', 'cursive']
    },
    boxShadow: {
      0: '0 0 10px rgb(0 0 0 / 10%);',
      1: '0 10px 26px rgb(0 0 0 / 5%)'
    },
    extend: {
      fontSize: {
        // 14: {}
      },
      backgroundImage: theme => ({
        // 'img-0': 'url("@/assets/img/home/bg.png")'
      })
    }
  },
  plugins: []
})
