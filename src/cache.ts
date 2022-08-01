import { cacheKey, WebCache } from 'fe-dk'

export const local = WebCache.create('local')

/** 请帖是否已打开 */
export const INVITATION_OPENED = cacheKey<boolean>('INVITATION_OPENED')