import { useTranslation } from 'react-i18next'

import { GradientSelect } from '@/components/gradient-select'
import { StyleFieldSubgrid } from '@/components/ui/styled'

interface GradientSelectFieldProps {
  path: string
}

export const GradientSelectField = (props: GradientSelectFieldProps) => {
  const { t } = useTranslation()
  return (
    <StyleFieldSubgrid label={t('settings.gradient.text')} path={props.path}>
      <GradientSelect />
    </StyleFieldSubgrid>
  )
}
