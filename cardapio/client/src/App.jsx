import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { Card } from './components/card/Card'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main className='main'>
        <h2>Produtos</h2>
        <Card 
        imagem="http://localhost:3232/assets/salada-jacare.png"
        nome="Salada de Jacaré"
        descricao="Mix de folhas coloridas, tomate cereja,croutôns, palmito e lascas de jacaré salteadas, regadas ao molho balsâmico, oliva e mel."
        valor={49}
        tempoPreparo='10 min'
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
