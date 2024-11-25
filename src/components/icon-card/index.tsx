import { Icon } from '@iconify/react'
import { motion } from 'motion/react'

import {
  LIST_ICON_SIZE,
  PREVIEW_ICON_PADDING,
  PREVIEW_ICON_SIZE,
} from '@/constants/icon-size'
import {
  cn,
  colorToGradient,
  getBorderRadiusCSS,
  getShadowCSS,
  scaleShadow,
  scaleValue,
} from '@/lib/utils'
import { useStore } from '@/store'

import type { BorderRadius } from '@/store/interface'

export interface IconCardProps {
  className?: string
  iconName?: string
  inPreview?: boolean
  previewType?: 'icon' | 'text' | 'upload'
  ref?: React.RefObject<HTMLDivElement>
  uploadNode?: React.ReactNode
}

export const IconCard = (props: IconCardProps) => {
  const {
    className,
    iconName,
    inPreview,
    previewType = 'icon',
    ref,
    uploadNode,
  } = props

  const [styles] = useStore((store) => store.styles)

  const setComponentsState = useStore((store) => store.componentsState[1])

  const {
    backgroundColors,
    backgroundGradient,
    backgroundRotation,
    borderColors,
    borderGradient,
    borderRadius,
    borderRotation,
    borderWidth,
    iconColor,
    iconOffset,
    iconRotation,
    iconShadow: [iconShadow],
    iconSize,
    insetShadows,
    padding,
    shadows,
    textColorRotation,
    textColors,
    textFont,
    textGradient,
    textItalic,
    textOffset,
    textRotation,
    textShadow: [textShadow],
    textSize,
    textValue,
    textWeight,
  } = styles

  const paddingValue = inPreview && padding ? PREVIEW_ICON_PADDING : 0
  const sizeValue = inPreview ? PREVIEW_ICON_SIZE : LIST_ICON_SIZE
  const valueScale = inPreview
    ? padding
      ? (PREVIEW_ICON_SIZE - PREVIEW_ICON_PADDING) / LIST_ICON_SIZE
      : PREVIEW_ICON_SIZE / LIST_ICON_SIZE
    : 1

  const shadowCSS = getShadowCSS(shadows.map((v) => scaleShadow(v, valueScale)))
  const insetShadowCSS = getShadowCSS(
    insetShadows.map((v) => scaleShadow(v, valueScale)),
    true,
  )
  const iconShadowValue = scaleShadow(iconShadow, valueScale)
  const textShadowValue = scaleShadow(textShadow, valueScale)

  const setPreviewIconName = () => {
    if (inPreview || !iconName) return
    setComponentsState((draft) => {
      draft.previewIconName = iconName
    })
  }

  let content: React.ReactNode = null

  if (previewType === 'icon' || previewType === 'upload') {
    const styles = {
      color: iconColor,
      filter: `drop-shadow(${iconShadowValue[0]}px ${iconShadowValue[1]}px ${iconShadowValue[3]}px ${iconShadowValue[4]})`,
      height: scaleValue(iconSize, valueScale),
      transform: `rotate(${iconRotation}deg) translate(${scaleValue(iconOffset[0], valueScale)}px, ${scaleValue(iconOffset[1], valueScale)}px)`,
      width: scaleValue(iconSize, valueScale),
    }
    if (iconName) {
      content = <Icon icon={iconName} style={styles} />
    } else {
      content = <div style={styles}>{uploadNode}</div>
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  } else if (previewType === 'text') {
    content = (
      <span
        style={{
          fontFamily: textFont,
          fontSize: scaleValue(textSize, valueScale),
          fontStyle: textItalic ? 'italic' : 'normal',
          fontWeight: textWeight,
          textShadow: `${textShadowValue[0]}px ${textShadowValue[1]}px ${textShadowValue[3]}px ${textShadowValue[4]}`,
          transform: `rotate(${textRotation}deg) translate(${scaleValue(textOffset[0], valueScale)}px, ${scaleValue(textOffset[1], valueScale)}px)`,
          ...(textColors.length > 1
            ? {
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: colorToGradient(
                  textColors,
                  textColorRotation,
                  textGradient,
                ),
              }
            : {
                color: textColors[0],
              }),
        }}
      >
        {textValue}
      </span>
    )
  }

  return (
    <motion.div
      ref={ref}
      layoutId={iconName}
      style={{ height: sizeValue, padding: paddingValue, width: sizeValue }}
    >
      <div
        className={cn('size-full select-none', className)}
        role='button'
        style={{
          boxShadow: shadowCSS,
          padding: scaleValue(borderWidth, valueScale),
          backgroundImage: colorToGradient(
            borderColors,
            borderRotation,
            borderGradient,
          ),
          borderRadius: getBorderRadiusCSS(
            borderRadius.map((v) => scaleValue(v, valueScale)) as BorderRadius,
          ),
        }}
        tabIndex={0}
        onClick={setPreviewIconName}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setPreviewIconName()
          }
        }}
      >
        <div
          className='flex size-full items-center justify-center'
          style={{
            boxShadow: insetShadowCSS,
            backgroundImage: colorToGradient(
              backgroundColors,
              backgroundRotation,
              backgroundGradient,
            ),
            borderRadius: getBorderRadiusCSS(
              borderRadius.map((v) =>
                scaleValue(v - borderWidth, valueScale),
              ) as BorderRadius,
            ),
          }}
        >
          {content}
        </div>
      </div>
    </motion.div>
  )
}
