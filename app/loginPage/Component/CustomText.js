import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function CustomText({children, style, ...props}: Props) {
  const fontWeight = style ? StyleSheet.flatten(style).fontWeight : undefined;
  return (
    <Text
      style={[
        style,
        {
          fontFamily: getFontFamily(fontWeight),
          fontWeight: undefined,
        },
      ]}
      {...props}>
      {children}
    </Text>
  );
}
export function getFontFamily(
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900',
) {
  let fontFamily: string;
  switch (fontWeight) {
    case '100':
    case '200':
    case '300':
    case '400':
    case 'normal':
      fontFamily = 'Samim';
      break;
    case '500':
    case '600':
      fontFamily = 'Samim-Medium';
      break;
    case '700':
    case 'bold':
    case '800':
    case '900':
      fontFamily = 'Samim-Bold';
      break;
    default:
      fontFamily = 'Samim';
  }
  return fontFamily;
}
