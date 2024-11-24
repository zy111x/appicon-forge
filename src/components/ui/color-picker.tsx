import ColorPickerPanel, {
  ColorBlock,
  type ColorPickerProps as ColorPickerPanelProps,
} from '@rc-component/color-picker'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export interface ColorPickerProps extends ColorPickerPanelProps {
  colorBlockRender?: (node: React.ReactNode) => React.ReactNode
}

export const ColorPicker = (props: ColorPickerProps) => {
  const { colorBlockRender: renderColorBlock, value, ...rest } = props

  const colorBlock = value && (
    <PopoverTrigger className='w-min'>
      <ColorBlock color={value as string} prefixCls='appicon-color-picker' />
    </PopoverTrigger>
  )

  const renderNode = renderColorBlock?.(colorBlock) ?? colorBlock

  return (
    <Popover>
      {renderNode}
      <PopoverContent>
        <ColorPickerPanel
          {...rest}
          prefixCls='appicon-color-picker'
          value={value}
        />
      </PopoverContent>
    </Popover>
  )
}
