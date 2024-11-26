import { useTranslation } from 'react-i18next'

import { SettingsContainer } from '@/components/ui/styled'
import { useStore } from '@/store'
import { Gradient } from '@/store/constants'

import { ColorsField } from '../common/colors-field'
import { GradientSelectField } from '../common/gradient-select-field'
import { RadiusField } from '../common/radius-field'
import { SliderField } from '../common/slider-field'

export const BorderSettings = () => {
  const { t } = useTranslation()
  const [{ borderColors, borderGradient }] = useStore((store) => store.styles)
  const isGradient = borderColors.length !== 1
  return (
    <SettingsContainer className='grid-cols-[auto_1fr_1fr_auto]'>
      <RadiusField className='col-span-4 grid-cols-subgrid' />
      <SliderField
        className='col-span-4'
        label={t('settings.border.width')}
        path='borderWidth'
        sliderClassName='col-span-2'
      />
      <ColorsField
        className='col-span-4'
        colorListClassName='col-span-3'
        label={t('settings.border.colors')}
        path='borderColors'
      />
      {isGradient && (
        <>
          {borderGradient !== Gradient.Radial && (
            <SliderField
              className='col-span-4'
              label={t('settings.border.rotation')}
              max={360}
              path='borderRotation'
              sliderClassName='col-span-2'
            />
          )}
          <GradientSelectField path='borderGradient' />
        </>
      )}
    </SettingsContainer>
  )
}
