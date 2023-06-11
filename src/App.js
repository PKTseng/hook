import useWindowScroll from './hook/scroll.jsx'

function App() {
  const scrollY = useWindowScroll()

  return (
    <div style={{ height: '1200px' }}>
      <h1>{scrollY}</h1>
    </div>
  )
}

export default App
