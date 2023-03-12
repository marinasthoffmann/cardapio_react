import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main className='main'>
        <h2>Produtos</h2>
      </main>
      <Footer />
    </div>
  )
}

export default App
