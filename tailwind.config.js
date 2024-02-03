
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      rotate: {
        '90': '270deg',
      },
      colors: {
        primary: "#003e34",
        secondary: "#0ff7d1",
        op3: "#0369cc",
        four: "#014554",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        'shadow1': '5px 5px rgba(0, 98, 90, 0.4)',
        'shadow2': '10px 10px rgba(0, 98, 90, 0.3)',
        'shadow3': '15px 15px rgba(0, 98, 90, 0.2)',
        'shadow4': '20px 20px rgba(0, 98, 90, 0.1)',
        'shadow5': '25px 25px rgba(0, 98, 90, 0.05)',
      },
      screens: {
        xs: "320px",
        xm: "375px",
        sm: "450px",
        'tablet': '640px',
        'laptop': '1024px',
        'phones':{'max':'1023px'},
        'pc': '1024px',
        'xPc': '1280px',
      },
      backdropBlur: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      backgroundImage: {
        "bg-style":'linear-gradient(to left bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
        "test": "url('/src/assets/bgpic.png')",
        "bg": "url('/src/assets/bg.jpg')",
        "backTwo": "url('/src/assets/bg2.jpg')",
        "backOne": "conic-gradient(at center top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
        "background": "url('/src/assets/background.jpg')",
      
        "bgBlob": "url('/src/assets/bgBlob.svg')",
        'wg': 'linear-gradient(to bottom, #ffffff, #f2f2f2)', // #e5e7eb is the color for grey-200 in Tailwind CSS
        'gradient-custom': 'radial-gradient(rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))',
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive']
    }
  },
  plugins: [],
};