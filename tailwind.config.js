
  /** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
      extend: {
        keyframes :{
            backgroundMove :{
                '0%' : {backgroundPosition : '0% 50%'},
                '100%' : {backgroundPosition : '100% 50%'}
            },
        },
        animation :{
            backgroundMove: 'backgroundMove 10s infinite alternate',    
        },
        fontFamily: {
            benguiat: ['ITC Benguiat', 'serif'],
          },
      },
    },
    plugins: [],
  };
  
  