

export const addToken = (token: string): void => localStorage.setItem('token', token)

export const getToken = (): string | null =>  localStorage.getItem('token')