import tinycolor from 'tinycolor2';

export default hash => {
  const [r, g, b] = hash
    .substr(0, 3)
    .toLowerCase()
    .split('')
    .map(char => (char.charCodeAt(0) > 255 ? 255 : char.charCodeAt(0)));
  return {
    color: tinycolor({ r, g, b })
      .saturate(30)
      .toHexString(),
    colorLighten: tinycolor({ r, g, b })
      .lighten(20)
      .saturate(30)
      .toHexString()
  };
};
