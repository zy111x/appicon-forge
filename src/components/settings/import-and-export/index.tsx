import { SettingsContainer } from '@/components/ui/styled.ts'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button.tsx'
import { Import, Share } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { useStore } from '@/store'
import { useState } from 'react'
import { t } from 'i18next'
import {createColor} from "@/lib/utils.ts";

export const ImportAndExportSettings = () => {
  const cls = 'col-span-2 grid grid-cols-subgrid items-center'
  const [style, setStyle] = useStore((store) => store.styles)
  const [showData, setShowData] = useState('')
  const keys = ['backgroundColors', 'backgroundGradient', 'backgroundRotation', 'borderColors', 'borderGradient', 'borderRadius', 'borderRotation', 'borderWidth', 'iconColor', 'iconOffset', 'iconRotation', 'iconShadow', 'iconSize', 'insetShadows', 'padding', 'shadows', 'textColorRotation', 'textColors', 'textFont', 'textGradient', 'textItalic', 'textOffset', 'textRotation', 'textShadow', 'textSize', 'textValue', 'textWeight']
  return (
    <SettingsContainer>
      <div className={cls}>
        <Label>{t('export data')}</Label>
        <Button
          size={'icon'}
          onClick={() => {
              let data = []
              for (let i = 0; i < keys.length; i++) {
                  if (i === 0 || i === 3 || i === 17) {
                      let t = []
                      style[keys[i]].forEach(item => {
                          t.push(item.value)
                      })
                      data[i] = t
                  } else if (i === 11 || i === 13 || i === 15 || i === 23) {
                      let t = []
                      style[keys[i]].forEach(item => {

                          t.push([item[0], item[1], item[2], item[3], item[4].value])
                      })
                      data[i] = t
                  } else {
                      data[i] = style[keys[i]]
                  }
              }
              setShowData(JSON.stringify(data))
          }}>
          <Share />
        </Button>
      </div>
      <div className={cls}>
        <Label>{t('import data')}</Label>
        <Button
          size={'icon'}
          onClick={() => {
              let data = {}
              for (let i = 0; i < keys.length; i++) {
                  let item = JSON.parse(showData)[i]
                  if (i === 0 || i === 3 || i === 17) {
                      let t = []
                      item.forEach(item => {
                          t.push(createColor(item))
                      })
                      data[keys[i]] = t
                  } else if (i === 11 || i === 13 || i === 15 || i === 23) {
                      let t = []
                      item.forEach((item, index) => {
                          t[index] = item
                          t[index][4] = createColor(item[4])
                      })
                      data[keys[i]] = t
                  } else {
                      data[keys[i]] = item
                  }
              }
              setStyle(data)
          }}>
          <Import />
        </Button>
      </div>
      <div className={cls}>
        <Label>{t('data text')}</Label>
        <Textarea value={showData} size="3" onChange={e => setShowData(e.target.value)}/>
      </div>
    </SettingsContainer>
  )
}