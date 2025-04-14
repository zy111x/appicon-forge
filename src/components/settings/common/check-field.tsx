import { Checkbox } from '@/components/ui/checkbox'
import { StyleFieldSubgrid } from '@/components/ui/styled'

import type { StyleFieldProps } from './style-field'

export type CheckFieldProps = Omit<StyleFieldProps, 'children'>

export const CheckField = (props: CheckFieldProps) => {
  return (
    <StyleFieldSubgrid
      {...props}
      eventName='onCheckedChange'
      valueName='checked'
    >
      <Checkbox />
    </StyleFieldSubgrid>
  )
}
