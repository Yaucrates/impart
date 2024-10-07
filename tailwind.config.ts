import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
        colors: {
            blurple: {
                800: "rgb(2, 73, 213)",
                900: "rgb(1, 63, 193)",
            },
            impart: {
                background: "rgb(26, 27, 31)",
            }
        },
        screens: {
            'xs': '400px',
        }
    }
  },

  plugins: [require("@tailwindcss/typography")]
} as Config;
