import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['700'],
    },
    {
      name: 'Lato',
      styles: ['400', '400i', '600', '600i'],
    },
  ],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 600,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
})

export default typography