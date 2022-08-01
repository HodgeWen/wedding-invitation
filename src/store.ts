import { writable } from 'svelte/store'
import { INVITATION_OPENED, local } from './cache'

/** 请帖是否已经打开 */
export const invitationOpened = writable(local.get(INVITATION_OPENED, false))

export const enter = () => {
  invitationOpened.set(true)
  local.set(INVITATION_OPENED, true)
}
