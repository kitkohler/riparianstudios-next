import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
        slab:  ['var(--font-roboto-slab)', 'serif'],
        mono:  ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        accent: '#B8935A',
        dark:   '#1A1408',
        teal:   '#00535C',
        cream:  '#F4EFE6',
        body:   '#373942',
        muted:  '#6B6B6E',
      },
    },
  },
  plugins: [],
};
export default config;
