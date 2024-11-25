import { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { detectFontAvailability } from '@/lib/utils'

export interface FontSelectProps {
  onChange?: (value: string) => void
  value?: string
}

export const FontSelect = (props: FontSelectProps) => {
  const { onChange, value } = props

  const [availableFonts, setAvailableFonts] = useState(() => [
    ['Arial', 'Arial'],
    ['Verdana', 'Verdana'],
    ['Tahoma', 'Tahoma'],
    ['Trebuchet MS', 'Trebuchet MS'],
    ['Helvetica', 'Helvetica'],
    ['Helvetica Neue', 'Helvetica Neue'],
    ['Segoe UI', 'Segoe UI'],
    ['Roboto', 'Roboto'],
    ['San Francisco', 'San Francisco'],
    ['Courier New', 'Courier New'],
    ['Lucida Console', 'Lucida Console'],
    ['Lucida Sans Unicode', 'Lucida Sans Unicode'],
    ['Monaco', 'Monaco'],
    ['Consolas', 'Consolas'],
    ['Georgia', 'Georgia'],
    ['Times New Roman', 'Times New Roman'],
    ['Palatino', 'Palatino'],
    ['Palatino Linotype', 'Palatino Linotype'],
    ['Impact', 'Impact'],
    ['Comic Sans MS', 'Comic Sans MS'],
    ['Gill Sans', 'Gill Sans'],
    ['Futura', 'Futura'],
    ['Franklin Gothic Medium', 'Franklin Gothic Medium'],
    ['Century Gothic', 'Century Gothic'],
    ['Optima', 'Optima'],
    ['Candara', 'Candara'],
    ['Geneva', 'Geneva'],
    ['sans-serif', 'Sans-serif'],
    ['serif', 'Serif'],

    ['Microsoft YaHei', '微软雅黑'],
    ['SimSun', '宋体'],
    ['SimHei', '黑体'],
    ['PingFang SC', '苹方-简'],
    ['PingFang TC', '苹方-繁'],
    ['Hiragino Sans GB', '冬青黑体-简'],
    ['Hiragino Sans TC', '冬青黑体-繁'],
    ['WenQuanYi Micro Hei', '文泉驿微米黑'],
    ['WenQuanYi Zen Hei', '文泉驿正黑'],
    ['Noto Sans CJK SC', '思源黑体-简'],
    ['Noto Serif CJK SC', '思源宋体-简'],
    ['Source Han Sans SC', '思源黑体'],
    ['Source Han Serif SC', '思源宋体'],
    ['Droid Sans Fallback', 'Droid Sans Fallback'],
    ['Songti SC', '宋体-简'],
    ['KaiTi', '楷体'],
    ['FangSong', '仿宋'],
    ['MingLiU', '细明体'],
    ['PMingLiU', '新细明体'],
    ['Microsoft JhengHei', '微软正黑体'],
    ['Meiryo', '明瞭体'],
    ['Yu Gothic', '游ゴシック'],
    ['Malgun Gothic', '맑은 고딕'],
    ['Apple LiGothic', '苹果丽中黑'],
    ['Apple LiSung', '苹果丽中明'],
    ['华文细黑', 'STXihei'],
    ['华文楷体', 'STKaiti'],
    ['华文宋体', 'STSong'],
    ['华文中宋', 'STZhongsong'],
    ['方正舒体', 'FZShuTi'],
    ['方正姚体', 'FZYaoti'],

    ['Noto Sans', 'Noto Sans'],
    ['Noto Serif', 'Noto Serif'],
    ['Nanum Gothic', 'Nanum Gothic'],
    ['Nanum Myeongjo', 'Nanum Myeongjo'],
    ['PingFang HK', '苹方-港'],
    ['Hiragino Kaku Gothic Pro', '冬青角黑 Pro'],
    ['Hiragino Mincho Pro', '冬青明朝 Pro'],
    ['Yu Mincho', '游明朝'],
  ])
  const { t } = useTranslation()

  useEffect(() => {
    setAvailableFonts(
      availableFonts.filter(([font]) => detectFontAvailability(font)),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={t('settings.text.font.placeholder')} />
      </SelectTrigger>
      <SelectContent>
        {availableFonts.map(([font, label]) => (
          <SelectItem key={font} value={font}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
