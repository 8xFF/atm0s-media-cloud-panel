import cookie from 'js-cookie'

export const setCookie = (name: string, value: any, days?: number) => {
  cookie.set(name, value, { path: '/', expires: days })
}

export const removeCookie = (name: string) => {
  cookie.remove(name)
}

export const getCookie = (name: string) => {
  return cookie.get(name)
}

export const getCookieJson = (name: string) => {
  try {
    const value = getCookie(name)
    if (value) {
      return JSON.parse(value)
    }
    return null
  } catch (e) {
    return null
  }
}

export const setCookieJson = (name: string, value: any, days?: number) => {
  setCookie(name, JSON.stringify(value), days)
}
