/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        100: 400,
        104: 416,
        108: 432,
        112: 448,
        116: 464,
        120: 480,
        124: 496,
        128: 512,
        132: 528,
        136: 544,
        140: 560,
        144: 576,
        148: 592,
        152: 608,
        156: 624,
        160: 640,
        164: 656,
        168: 672,
        172: 688,
        176: 704,
        180: 720,
        200: 800,
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};
