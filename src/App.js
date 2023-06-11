import useLocalStorage from './hook/localStorage.jsx'

function App() {
  const [msg, setMsg] = useLocalStorage('key', 'test')

  return (
    <div>
      <h1>{msg}</h1>
      <input onChange={() => setMsg('user')}></input>
    </div>
  )
}

export default App
