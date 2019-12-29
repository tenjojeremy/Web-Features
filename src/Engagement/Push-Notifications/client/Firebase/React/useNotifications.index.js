import React, { useState, useEffect, createContext, useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/messaging'

const messaging = firebase.messaging()

export const NotificationsContext = createContext(null)

export const NotificationsProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(null)
  const [token, setToken] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const hasPermission = Notification.permission === 'granted'
    if (isSupported() && hasPermission) {
      setNotificationListener()
      setInitialized(true)
    }
  }, [])

  const isSupported = () =>
    'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window

  const init = async () => {
    if (isSupported() && !initialized) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') setNotificationListener()
    }
    setInitialized(true)
  }

  const setNotificationListener = async () => {
    const token = await messaging.getToken()
    token && setToken(token)
    messaging.onMessage((payload) => setMessage(payload))
  }

  return (
    <NotificationsContext.Provider value={{ isSupported, init, token, message }}>
      {children}
    </NotificationsContext.Provider>
  )
}

export default () => useContext(NotificationsContext)