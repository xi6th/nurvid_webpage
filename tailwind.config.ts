import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(1200px)',
    },
    extend: {
      colors: {
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
    },
    darkMode: "class",
    plugins: [
      require('tailwindcss-filters'),
      nextui()
    ]
  },
  plugins: [],
}
export default config
