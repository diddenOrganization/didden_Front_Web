import type { Config } from 'tailwindcss';

const range = (start: number, end: number) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
};

const makeNum = () =>
  range(1, 1000).reduce((acc: any, size) => {
    acc[size] = size + 'px';
    return acc;
  }, {});

const config: Config = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: makeNum(),
      spacing: makeNum(),
      borderWidth: makeNum(),
      borderRadius: makeNum(),
      borderSpacing: makeNum(),
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
