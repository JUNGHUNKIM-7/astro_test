import { writable } from 'svelte/store'

interface User {
    name: string
}

export const users = writable<User>({
    name: 'userName',
})
