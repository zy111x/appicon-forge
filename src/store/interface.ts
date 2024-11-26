import type { APIv2Collection } from '@/services/iconify'

import type { Gradient, Settings, Tab } from './constants'

export type Point = [number, number]
export type Shadow = [
  x: number,
  y: number,
  blur: number,
  spread: number,
  color: string,
]
export type BorderRadius = [number, number, number, number]

export interface Styles {
  // Background
  backgroundColors: string[]
  backgroundGradient: Gradient
  backgroundRotation: number
  // Border
  borderColors: string[]
  borderGradient: Gradient
  borderRadius: BorderRadius
  borderRotation: number
  borderWidth: number
  // Icon
  iconColor: string
  iconOffset: Point
  iconRotation: number
  iconShadow: Shadow[]
  iconSize: number
  // Inset Shadow
  insetShadows: Shadow[]
  // Padding -> only works in preview
  padding: boolean
  // Shadow
  shadows: Shadow[]
  // Text
  textColorRotation: number
  textColors: string[]
  textFont: string
  textGradient: Gradient
  textItalic: boolean
  textOffset: Point
  textRotation: number
  textShadow: Shadow[]
  textSize: number
  textValue: string
  textWeight: string
}

export interface IconCollectionWithPrefix extends APIv2Collection {
  prefix: string
}

export interface ComponentsState {
  // Image Size -> only works in preview
  imageSize: number
  isSeparateBorderRadius: boolean
  previewIconName: null | string
  selectedCollection: IconCollectionWithPrefix | null
  selectedSettings: Settings
  selectedTab: Tab
}
