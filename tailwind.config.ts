import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bill-background': "url('../resource/image/bill.jpg')",
      },
      keyframes: {
        rolling: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(calc(-100% * 15))',
          },
        },
        heartbeat: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.8)',
          },
        },
      },
      animation: {
        rolling: 'rolling 0.5s linear infinite',
        breaking: 'rolling 2s linear infinite',
        heartbeat: 'heartbeat 0.5s linear 2',
      },
    },
  },
  plugins: [],
};
export default config;
