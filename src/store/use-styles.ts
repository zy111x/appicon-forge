import { startTransition, useEffect, useRef } from 'react'

import { debounce } from 'lodash-es'
import { useImmer, type Updater } from 'use-immer'

import { defaultStyles } from './default-value'

import type { Styles } from './interface'

const storageKey = 'appicon-forge-config'

export const useStyles = () => {
  const [styles, setStyles] = useImmer(defaultStyles)
  const isMountRef = useRef(false)

  const setStorageDebounce = useRef(
    debounce((value) => {
      localStorage.setItem(storageKey, JSON.stringify(value))
    }, 1000),
  ).current

  const transitionSetStyles: Updater<Styles> = (newStyles) => {
    startTransition(() => {
      setStyles(newStyles)
    })
  }

  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true
      const storageString = localStorage.getItem(storageKey)
      if (storageString) {
        transitionSetStyles(JSON.parse(storageString))
      }
    } else {
      setStorageDebounce(styles)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [styles])

  return [styles, transitionSetStyles] as const
}
