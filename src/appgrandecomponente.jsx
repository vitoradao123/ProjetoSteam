import Header from './components/Header/Header.jsx'
import Carrinho from './components/Carrinho/Carrinho.jsx'
import cs2img from './assets/carrinhoimgcs2.jpg'
import forzaimg from './assets/carrinhoimgforza.jpg'
import './appgrandecomponente.css'

export default function App() {
  return (
   <div>
     <Header></Header>
     <div className='produtos-container'>
      <Carrinho nome="Counter-Strike" imagem={cs2img} />
      <Carrinho nome="Forza Horizon" imagem={forzaimg} />
      </div>
   </div>
  )  
}
  