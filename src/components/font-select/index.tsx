import { useEffect, useState } from 'react'

import { CheckIcon, ChevronsUpDownIcon, Loader2Icon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn, detectFontAvailability } from '@/lib/utils'

export interface FontSelectProps {
  onChange?: (value: string) => void
  value?: string
}

export const FontSelect = (props: FontSelectProps) => {
  const { onChange, value } = props

  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

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

    // google fonts
    ...loadTemporaryFonts(),
  ])
  const { t } = useTranslation()

  useEffect(() => {
    const fonts = availableFonts.filter(([font]) =>
      detectFontAvailability(font),
    )
    setAvailableFonts(fonts)

    if (value) {
      const savedValueAvailable = fonts.some(
        ([fontValue]) => fontValue === value,
      )

      if (!savedValueAvailable) {
        setSearch(value)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClickAddFont = async () => {
    setLoading(true)
    setOpen(false)
    try {
      const fontName = await loadGoogleFont(search)
      setAvailableFonts([...availableFonts, [fontName, fontName]])
      toast.success(t('settings.text.font.add.success'))
      onChange?.(fontName)
    } catch {
      toast.error(t('settings.text.font.add.error'))
    } finally {
      setLoading(false)
      setSearch('')
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className='w-[200px] justify-between'
          disabled={loading}
          role='combobox'
          variant='outline'
        >
          {value
            ? (availableFonts.find(([fontValue]) => fontValue === value)?.[1] ??
              t('settings.text.font.invalid'))
            : t('settings.text.font.placeholder')}
          {loading ? (
            <Loader2Icon className='ml-2 size-4 animate-spin' />
          ) : (
            <ChevronsUpDownIcon className='opacity-50' />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput
            placeholder={t('settings.text.font.search')}
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            <CommandEmpty className='p-1'>
              <Button
                className='w-full justify-start'
                size='sm'
                variant='ghost'
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={onClickAddFont}
              >
                {t('settings.text.font.add.text')}
              </Button>
            </CommandEmpty>
            <CommandGroup>
              {availableFonts.map(([fontValue, fontName]) => (
                <CommandItem
                  key={fontValue}
                  value={fontValue}
                  onSelect={(currentValue) => {
                    onChange?.(currentValue)
                    setOpen(false)
                  }}
                >
                  {fontName}
                  <CheckIcon
                    className={cn(
                      'ml-auto',
                      value === fontValue ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function loadGoogleFont(fontName: string): Promise<string> {
  const formattedFontName = fontName.replace(/\s+/g, '+')
  const url = `https://fonts.googleapis.com/css2?family=${formattedFontName}&display=swap`

  const link = document.createElement('link')
  link.id = `custom-font-${fontName}`
  link.rel = 'stylesheet'
  link.crossOrigin = 'anonymous'
  link.href = url
  document.head.appendChild(link)

  return new Promise((resolve, reject) => {
    link.onload = () => {
      resolve(fontName)
    }
    link.onerror = (error) => {
      reject(error)
    }
  })
}

function loadTemporaryFonts() {
  const links = document.querySelectorAll(`link[id^='custom-font-']`)
  const fontNames = Array.from(links).map((link) => {
    const font = link.id.replace('custom-font-', '')
    return [font, font]
  })

  return fontNames
}
