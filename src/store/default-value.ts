import { Gradient } from './constants'

import type { Styles } from './interface'

export const defaultBackgroundColor = '#F5F5F5'
export const defaultBorderColor = '#D1D1D1'
export const defaultTextColor = '#000'
export const defaultShadowColor = 'rgba(0, 0, 0, 0.1)'
export const defaultIconColor = '#333'
export const defaultTextFont = 'sans-serif'
export const defaultTextShadowAndIconShadowColor = 'rgba(0, 0, 0, 0.5)'

export const defaultStyles: Styles = {
  backgroundColors: [defaultBackgroundColor],
  backgroundGradient: Gradient.Linear,
  backgroundRotation: 180,
  borderColors: [defaultBorderColor],
  borderGradient: Gradient.Linear,
  borderRadius: [64, 64, 64, 64],
  borderRotation: 180,
  borderWidth: 0,
  iconColor: defaultIconColor,
  iconOffset: [0, 0],
  iconRotation: 0,
  iconShadow: [[0, 0, 0, 0, defaultTextShadowAndIconShadowColor]],
  iconSize: 128,
  insetShadows: [[0, 0, 0, 0, defaultShadowColor]],
  padding: true,
  shadows: [[0, 0, 0, 0, defaultShadowColor]],
  textColorRotation: 0,
  textColors: [defaultTextColor],
  textFont: defaultTextFont,
  textGradient: Gradient.Linear,
  textItalic: false,
  textOffset: [0, 0],
  textRotation: 0,
  textShadow: [[0, 0, 0, 0, defaultTextShadowAndIconShadowColor]],
  textSize: 128,
  textValue: '',
  textWeight: '400',
}
