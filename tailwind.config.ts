import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
        height: {
            firstPage: "calc(100vh - 89px)",
        },
        colors: {
            impart: {
                600: "rgb(37, 41, 48)",
                700: "rgb(33, 34, 41)",
                800: "rgb(29, 30, 35)",
                900: "rgb(26, 27, 31)",
                background: "rgb(26, 27, 31)",
            }
        },
        screens: {
            'xs': '400px',
        },
    }
  },

  plugins: [typography]
} satisfies Config;
