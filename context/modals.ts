import { createDomain } from 'effector'

const modal = createDomain()

export const openMenu = modal.createEvent()
export const closeMenu = modal.createEvent()

export const $menuIsOpen = modal
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false)
