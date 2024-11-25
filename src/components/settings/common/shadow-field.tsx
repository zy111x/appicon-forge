import { ShadowList } from '@/components/shadow-list'
import { StyleFieldSubgrid } from '@/components/ui/styled'

import type { StyleFieldProps } from './style-field'

export interface ShadowFieldProps extends Omit<StyleFieldProps, 'children'> {
  hideSize?: boolean
}

export const ShadowField = (props: ShadowFieldProps) => {
  const { hideSize, ...rest } = props
  return (
    <StyleFieldSubgrid {...rest}>
      <ShadowList hideSize={hideSize} />
    </StyleFieldSubgrid>
  )
}
