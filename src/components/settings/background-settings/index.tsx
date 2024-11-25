import { useTranslation } from 'react-i18next'

import { SettingsContainer } from '@/components/ui/styled'
import { useStore } from '@/store'
import { Gradient } from '@/store/constants'

import { ColorsField } from '../common/colors-field'
import { GradientSelectField } from '../common/gradient-select-field'
import { SliderField } from '../common/slider-field'

export const BackgroundSettings = () => {
  const { t } = useTranslation()
  const [{ backgroundColors, backgroundGradient }] = useStore(
    (store) => store.styles,
  )
  const isGradient = backgroundColors.length !== 1

  return (
    <SettingsContainer className='grid-cols-[auto_1fr]'>
      <ColorsField
        label={t('settings.background.colors')}
        path='backgroundColors'
      />
      {isGradient && <GradientSelectField path='backgroundGradient' />}
      {backgroundGradient !== Gradient.Radial && isGradient && (
        <SliderField
          label={t('settings.background.rotation')}
          max={360}
          path='backgroundRotation'
        />
      )}
    </SettingsContainer>
  )
}
