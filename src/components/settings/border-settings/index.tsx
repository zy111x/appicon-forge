import { useTranslation } from 'react-i18next'

import { SettingsContainer } from '@/components/ui/styled'

import { RadiusField } from '../common/radius-field'
import { SliderField } from '../common/slider-field'

export const BorderSettings = () => {
  const { t } = useTranslation()
  return (
    <SettingsContainer className='grid-cols-[auto_1fr_1fr_auto]'>
      <RadiusField className='col-span-4 grid-cols-subgrid' />
      <SliderField
        className='col-span-4'
        label={t('settings.border.width')}
        path='borderWidth'
        sliderClassName='col-span-2'
      />
    </SettingsContainer>
  )
}