import { useImmer } from 'use-immer'

import { Gradient } from './constants'
import {
  defaultBackgroundColor,
  defaultBorderColor,
  defaultIconColor,
  defaultShadowColor,
  defaultTextColor,
  defaultTextFont,
  defaultTextShadowAndIconShadowColor,
} from './default-value'

import type { Styles } from './interface'

export const useStyles = () => {
  const [styles, setStyles] = useImmer<Styles>({
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
  })
  return [styles, setStyles] as const
}
