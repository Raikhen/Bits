import { Font } from 'expo';

const loadFonts = () => {
  const fonts = [
    { 'VT323': require('../assets/fonts/VT323.ttf') }
  ];

  return fonts.map((font) => Font.loadAsync(font));
};

export default function loadAssets() {
  return Promise.all([...loadFonts()]);
}
