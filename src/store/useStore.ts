import { create } from 'zustand'

interface State {
  lenis: any
  setLenis: (lenis: any) => void
  overflow: boolean
  setOverflow: (overflow: boolean) => void
  isExplored: boolean
  setExplored: (isExplored: boolean) => void
}

export const useStore = create<State>((set) => ({
  lenis: undefined,
  setLenis: (lenis) => set({ lenis }),
  overflow: true,
  setOverflow: (overflow) => set({ overflow }),
  isExplored: false,
  setExplored: (isExplored) => set({ isExplored }),
}))
