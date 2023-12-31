import { useState, useEffect } from 'react'

function useLocalStorage(key, defaultValue) {
  const [msg, setMsg] = useState(defaultValue)

  useEffect(() => {
    window.localStorage.setItem(key, msg)
  }, [key, msg])

  return [msg, setMsg]
}

export default useLocalStorage
