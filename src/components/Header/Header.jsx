import './Header.css'
import Logo from '../Logo/Logo'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Logo />  
      </div>
      <nav className="menu">
        <button>Loja</button>
        <button>Jogos</button>
        <button>Inventário</button>
      </nav>
      <div>
        <button>Modo escuro</button>
      </div>
    </header>
  )
}
