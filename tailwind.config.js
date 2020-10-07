module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flipy: {
          '0%': { transform: 'rotateY(0deg)' },
          '20%': { transform: 'rotateY(359deg)' },
          '100%': { transform: 'rotateY(359deg)' }
        },
        flipx: {
          '0%': { transform: 'rotateX(0deg)' },
          '20%': { transform: 'rotateX(359deg)' },
          '100%': { transform: 'rotateX(359deg)' }
        },
        rotary: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(359deg)' },
          '100%': { transform: 'rotate(359deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-stop': 'rotary 5s linear infinite',
        'bounce-slow': 'bounce 5s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'flipY': 'flipy 10s ease-in-out infinite',
        'flipX': 'flipx 10s ease-in-out infinite',
      }
    }
  },
  variants: {},
  plugins: [],
}