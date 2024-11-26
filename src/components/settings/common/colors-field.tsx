import { ColorList } from '@/components/color-list'
import { StyleFieldSubgrid } from '@/components/ui/styled'

import type { StyleFieldProps } from './style-field'

export interface ColorsFieldProps extends Omit<StyleFieldProps, 'children'> {
  colorListClassName?: string
}

export const ColorsField = (props: ColorsFieldProps) => {
  const { colorListClassName, ...rest } = props
  return (
    <StyleFieldSubgrid {...rest}>
      <ColorList className={colorListClassName} />
    </StyleFieldSubgrid>
  )
}
