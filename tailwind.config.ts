import { Config } from 'tailwindcss';
import daysyui from 'daisyui';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#646EE4',
        'column': '#f8f8f8',
        'dcolumn': '#101204',
        'card': '#ffffff',
        'dcard': '#22272B',
        'dbg': '#1D232A',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [daysyui],
  darkMode: "class",
}

export default config;