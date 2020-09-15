import React from 'react'
import {getRandomFruit} from '../../utils/misc'

const changeFavicon = (origin = 'https://ramonmorcillo.com') => {
  const head = document.head ?? document.getElementsByTagName('head')[0]
  const faviconName = getRandomFruit()
  const oldLink = document.querySelectorAll(`[href*='/favicon']`)[0]

  const link = document.createElement('link')
  link.className = 'dynamic-favicon'
  link.rel = 'shortcut icon'
  link.href = `${origin}/images/favicon/${faviconName}.png`

  oldLink && head.removeChild(oldLink)
  head.appendChild(link)
}

export const useDynamicFavicon = () => {
  if (typeof window !== 'undefined') {
    const location = window?.location
    React.useEffect(() => {
      changeFavicon(location.origin)
    }, [location.pathname])
  }
}
