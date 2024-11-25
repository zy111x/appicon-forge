import { SettingsContainer } from '@/components/ui/styled'

import { ShadowField } from '../common/shadow-field'

interface ShadowSettingsProps {
  hideSize?: boolean
  path: string
}

export const ShadowSettings = (props: ShadowSettingsProps) => {
  const { hideSize, path } = props

  return (
    <SettingsContainer className='grid-cols-1 px-0 py-2'>
      <ShadowField
        className='col-span-full grid-cols-1'
        hideSize={hideSize}
        path={path}
      />
    </SettingsContainer>
  )
}
