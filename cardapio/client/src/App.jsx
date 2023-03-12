import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { Produtos } from './pages/Produtos/Produtos'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main className='main'>
        <Produtos />
      </main>
      <Footer />
    </div>
  )
}

export default App
