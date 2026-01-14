import { createContext, use, useEffect } from 'react'

import mitt from '@/lib/mitt'

const Mitt = mitt()

export const BusContext = createContext(Mitt)

export const useBus = () => use(BusContext)

export const emit = Mitt.emit

export function useListener(fn: (event: any) => void, events: string[]) {
  const bus = useBus()

  useEffect(() => {
    events.map(event => bus.on(event, fn))

    return () => {
      events.map(event => bus.off(event, fn))
    }
  }, [bus, fn, events])
}

export function BusProvider({ children}: { children: React.ReactNode }) {
  return (
    <BusContext value={Mitt}>
      {children}
    </BusContext>
  )
}
