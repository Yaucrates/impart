import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
        colors: {
            blurple: {
                700: "rgb(4, 83, 233)",
                800: "rgb(2, 73, 213)",
                900: "rgb(1, 63, 193)",
                950: "rgb(0, 53, 173)",
            },
            impart: {
                background: "rgb(26, 27, 31)",
            },
            magnificent: {
                600: "rgb(45, 52, 61)",
                700: "rgb(37, 41, 48)",
                800: "rgb(29, 30, 35)",
                900: "rgb(26, 27, 31)",
                950: "rgb(21, 19, 22)"
            }
        },
        screens: {
            'xs': '400px',
        }
    }
  },

  plugins: [require("@tailwindcss/typography")]
} as Config;
