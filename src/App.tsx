import { DarkToggleProvider } from 'dark-toggle/react'

import { MainContent } from './components/main-content'
import { Sidebar } from './components/sidebar'
import { ClientProvider } from './providers/client'
import { StoreProvider } from './store'

export function App() {
  return (
    <ClientProvider>
      <StoreProvider>
        <DarkToggleProvider>
          <main className='grid h-screen w-screen grid-cols-[minmax(auto,400px)_1fr] grid-rows-1 gap-4 p-4'>
            <Sidebar />
            <MainContent />
          </main>
        </DarkToggleProvider>
      </StoreProvider>
    </ClientProvider>
  )
}
