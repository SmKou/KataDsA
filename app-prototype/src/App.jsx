import { useState } from 'react'

const Pages = {
    Home: 'home',
    Kata: 'kata',
    DataStructures: 'data-structures',
    Algorithms: 'algorithms',
    Login: 'login',
    Register: 'register'
}

function App() {
  const [page, setPage] = useState(Pages.Home)

  return <>
    <Header page setPage pages={Pages} />
    <Container />
    <Footer />
  </>
}

export default App
