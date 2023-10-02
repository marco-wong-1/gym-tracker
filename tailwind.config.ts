import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const plugin = require('tailwindcss/plugin');
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }: any) => {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
};
export default config;
