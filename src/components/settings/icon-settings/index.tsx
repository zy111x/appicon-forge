import { useTranslation } from 'react-i18next'

import { SettingsContainer } from '@/components/ui/styled'

import { ColorField } from '../common/color-field'
import { PerspectiveField } from '../common/perspective-field'
import { PointField } from '../common/point-field'
import { SliderField } from '../common/slider-field'

export const IconSettings = () => {
  const { t } = useTranslation()
  return (
    <SettingsContainer>
      <SliderField
        label={t('settings.icon.size')}
        max={256}
        min={64}
        path='iconSize'
      />
      <SliderField
        label={t('settings.icon.rotation')}
        max={360}
        path='iconRotation'
      />
      <PerspectiveField
        label={t('settings.icon.perspective')}
        path='iconPerspective'
      />
      <PointField label={t('settings.icon.offset')} path='iconOffset' />
      <ColorField label={t('settings.icon.color')} path='iconColor' />
    </SettingsContainer>
  )
}
