export * from './login'
export * from './notebooks'
export * from './notes'

export let token = null

export const setToken = newToken => {
  token = `bearer ${newToken}`
  console.log('current token is', token)
}
