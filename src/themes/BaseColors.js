import Color from 'color';

export default {
  white: Color('#fff'),
  black: Color('#000'),
  clear: Color('rgba(0, 0, 0, 0)'),
  grey: {
    lightest: Color('#f0f0f0'),
    lighter: Color('#ccc'),
    normal: Color('#aaa'),
    darker: Color('#767676'),
    darkest: Color('#333333')
  },
  blue: {
    lightest: Color('#e6f5fb'),
    lighter: Color('#4fbbe4'),
    normal: Color('#049fd9'),
    darker: Color('#1679b5'),
    darkest: Color('#2b5592')
  },
  brown: {
    lightest: Color('#7F6600'),
    lighter: Color('#9A4500'),
    normal: Color('#7D1119')
  },
  green: {
    lightest: Color('#E9f6E3'),
    lighter: Color('#6CC04A'),
    normal: Color('#3F7428')
  },
  lightBlue: {
    lightest: Color('#E8f5FB'),
    lighter: Color('#64BBE3'),
    normal: Color('#3A7089')
  },
  orange: {
    lightest: Color('#FFEADD'),
    normal: Color('#FF7300')
    // clearer: Color('#FF7300').clearer(0.5)
  },
  pink: {
    normal: Color('#F9DEE0')
  },
  red: {
    lighter: Color('#faeaea'),
    darker: Color('#CF2030')
    // clearer: Color('#CF2030').clearer(0.5)
  },
  status: {
    success: Color('#6cc04a'),
    info: Color('#64bbe3'),
    minor: Color('#ffcc00'),
    major: Color('#ff7300'),
    critical: Color('#cf2030')
  },
  yellow: {
    lightest: Color('#FFF7DF'),
    normal: Color('#FFCC00')
    // clearer: Color('#FFCC00').clearer(0.5)
  }
};
