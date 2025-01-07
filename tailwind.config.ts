import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
        colors: {
            impart: {
                700: "rgb(37, 41, 48)",
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
