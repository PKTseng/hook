import { useState } from 'react'

function Counter(props) {
  const [count, addCount] = useState(() => props.count)

  return <button onClick={() => addCount(count + 1)}>{count}</button>
}

function App() {
  return (
    <div>
      <Counter count={10} />
      <Counter count={20} />
    </div>
  )
}

export default App
