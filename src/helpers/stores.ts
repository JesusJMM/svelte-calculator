import { writable } from 'svelte/store'

export const windowFocus = writable(true)
export const globalKeyDown = writable({key: ""})
