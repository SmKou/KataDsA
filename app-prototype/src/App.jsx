import { useState } from 'react'
import { Inter } from 'next/font/google'

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

  return <main className={inter.className}>
    <Header page setPage pages={Pages} />
    <Container />
    <Footer />
  </main>
}

export default App
