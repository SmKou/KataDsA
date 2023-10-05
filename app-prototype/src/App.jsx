import { useState } from 'react'
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'

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

  return <main className="h-screen">
    <Header page={page} setPage={setPage} pages={Pages} />
    <Container />
    <Footer />
  </main>
}

export default App
