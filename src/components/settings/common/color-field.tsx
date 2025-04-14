import { ColorPicker } from '@/components/ui/color-picker'
import { StyleFieldSubgrid } from '@/components/ui/styled'

import type { StyleFieldProps } from './style-field'

export type ColorFieldProps = Omit<StyleFieldProps, 'children'>

export const ColorField = (props: ColorFieldProps) => {
  return (
    <StyleFieldSubgrid
      normalizeValueFromEvent={(event) => `${event}`}
      {...props}
    >
      <ColorPicker />
    </StyleFieldSubgrid>
  )
}
