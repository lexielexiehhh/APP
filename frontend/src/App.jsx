import { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('Connecting to backend…')

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => {
        if (!response.ok) throw new Error('Backend request failed')
        return response.json()
      })
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Could not connect to backend.'))
  }, [])

  return (
    <main>
      <h1>Hello World from the frontend!</h1>
      <p>{message}</p>
    </main>
  )
}
