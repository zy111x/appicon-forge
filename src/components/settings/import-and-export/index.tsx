import { useState } from 'react'

import { t } from 'i18next'
import { Import, Share } from 'lucide-react'

import { Button } from '@/components/ui/button.tsx'
import { Label } from '@/components/ui/label'
import { SettingsContainer } from '@/components/ui/styled.ts'
import { Textarea } from '@/components/ui/textarea'
import { createColor } from '@/lib/utils.ts'
import { useStore } from '@/store'

import type { Color } from '@/store/interface'

export const ImportAndExportSettings = () => {
  const cls = 'col-span-2 grid grid-cols-subgrid items-center'
  const [style, setStyle] = useStore((store) => store.styles)
  const [showData, setShowData] = useState('')
  const keys = [
    'backgroundColors',
    'backgroundGradient',
    'backgroundRotation',
    'borderColors',
    'borderGradient',
    'borderRadius',
    'borderRotation',
    'borderWidth',
    'iconColor',
    'iconOffset',
    'iconRotation',
    'iconShadow',
    'iconSize',
    'insetShadows',
    'padding',
    'shadows',
    'textColorRotation',
    'textColors',
    'textFont',
    'textGradient',
    'textItalic',
    'textOffset',
    'textRotation',
    'textShadow',
    'textSize',
    'textValue',
    'textWeight',
  ]
  return (
    <SettingsContainer>
      <div className={cls}>
        <Label>{t('export data')}</Label>
        <Button
          size='icon'
          onClick={() => {
            const data = []
            for (let i = 0; i < keys.length; i++) {
              if (i === 0 || i === 3 || i === 17) {
                const t: any[] = []
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                style[keys[i]].forEach((item: { value: any }) => {
                  t.push(item.value)
                })
                data[i] = t
              } else if (i === 11 || i === 13 || i === 15 || i === 23) {
                const t: any[][] = []
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                style[keys[i]].forEach((item: { value: any }[]) => {
                  t.push([item[0], item[1], item[2], item[3], item[4].value])
                })
                data[i] = t
              } else {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                data[i] = style[keys[i]]
              }
            }
            setShowData(JSON.stringify(data))
          }}
        >
          <Share />
        </Button>
      </div>
      <div className={cls}>
        <Label>{t('import data')}</Label>
        <Button
          size='icon'
          onClick={() => {
            const data = {}
            for (let i = 0; i < keys.length; i++) {
              const item = JSON.parse(showData)[i]
              if (i === 0 || i === 3 || i === 17) {
                const t: Color[] = []
                item.forEach((item: string) => {
                  t.push(createColor(item))
                })
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                data[keys[i]] = t
              } else if (i === 11 || i === 13 || i === 15 || i === 23) {
                const t: Color[][] = []
                item.forEach((item: any, index: number) => {
                  t[index] = item
                  t[index][4] = createColor(item[4])
                })
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                data[keys[i]] = t
              } else {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                data[keys[i]] = item
              }
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setStyle(data)
          }}
        >
          <Import />
        </Button>
      </div>
      <div className={cls}>
        <Label>{t('data text')}</Label>
        <Textarea
          value={showData}
          onChange={(e) => setShowData(e.target.value)}
        />
      </div>
    </SettingsContainer>
  )
}
