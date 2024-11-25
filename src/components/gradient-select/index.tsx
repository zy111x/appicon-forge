import { useTranslation } from 'react-i18next'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Gradient } from '@/store/constants'

export interface GradientSelectProps {
  onChange?: (value: Gradient) => void
  value?: Gradient
}

export const GradientSelect = (props: GradientSelectProps) => {
  const { onChange, value } = props

  const { t } = useTranslation()

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={Gradient.Linear}>
          {t('settings.gradient.linear')}
        </SelectItem>
        <SelectItem value={Gradient.Radial}>
          {t('settings.gradient.radial')}
        </SelectItem>
        <SelectItem value={Gradient.Conic}>
          {t('settings.gradient.conic')}
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
