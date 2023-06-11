import { useState, useEffect } from 'react'

function App() {
  const [count, addCount] = useState(0)
  const [name, setName] = useState('ken')

  console.log(count)

  useEffect(() => {
    document.title = `${count}`
  })

  return (
    <>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => addCount(count + 1)}>addCount</button>
      <button onClick={() => setName('test')}>setName</button>
    </>
  )
}

export default App
