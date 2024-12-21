import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true, // 컨테이너를 항상 화면 중앙에 배치
        padding: '2rem', // 기본 padding을 2rem으로 설정
      },
    },
  },
  plugins: [],
};
export default config;
