import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      screens: {
        "xs": "400px",
      },
    },
  },

  plugins: [typography],
} satisfies Config;
