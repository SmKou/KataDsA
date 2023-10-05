import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Header />
    <Container />
    <Footer />
  </>
}

export default App
