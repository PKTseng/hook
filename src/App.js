import { useState, useEffect } from 'react'

function App() {
  const [count, addCount] = useState(0)

  useEffect(() => {
    document.title = `${count}`
  })

  return (
    <>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => addCount(count + 1)}>addCount</button>
    </>
  )
}

export default App
