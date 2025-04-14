import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { StyleFieldSubgrid } from '@/components/ui/styled'

import type { Perspective } from '@/store/interface'

import type { StyleFieldProps } from './style-field'

interface PerspectiveSliderProps {
  onChange?: (value: Perspective) => void
  value?: Perspective
}

const PerspectiveSlider = (props: PerspectiveSliderProps) => {
  const { onChange, value = [] } = props

  const [ref] = useAutoAnimate()

  const onValueChange = (newValue: boolean | number, index: number) => {
    const newValues = [...value]
    newValues[index] = newValue
    onChange?.(newValues as Perspective)
  }

  const [enabled, x = 0, y = 0] = value

  return (
    <div ref={ref} className='space-y-2'>
      <Checkbox
        checked={enabled}
        onCheckedChange={(v) => onValueChange(v as boolean, 0)}
      />
      {enabled && (
        <div className='flex gap-4'>
          <Slider
            max={360}
            min={0}
            value={[x]}
            onValueChange={([v]) => onValueChange(v, 1)}
          />
          <Slider
            max={360}
            min={0}
            value={[y]}
            onValueChange={([v]) => onValueChange(v, 2)}
          />
        </div>
      )}
    </div>
  )
}

export type PerspectiveFieldProps = Omit<StyleFieldProps, 'children'>

export const PerspectiveField = (props: PerspectiveFieldProps) => {
  return (
    <StyleFieldSubgrid {...props} className='items-start'>
      <PerspectiveSlider />
    </StyleFieldSubgrid>
  )
}
