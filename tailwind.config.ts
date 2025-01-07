import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
        colors: {
            impart: {
                background: "rgb(26, 27, 31)",
            }
        }
    }
  },

  plugins: [typography]
} satisfies Config;
