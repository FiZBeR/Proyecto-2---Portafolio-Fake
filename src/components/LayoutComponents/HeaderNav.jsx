import { NavLink } from 'react-router-dom'
import './StylesLayout.css'

export const HeaderNav = () => {
  return (
    <header className="header-nav">
        <div className="logo">
            <span>C</span>
            <h3>Cristian Campos Web</h3>
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>  
                <li>
                    <NavLink to="/portafolio" className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>
                </li>    
                <li>
                    <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : ""}>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum" className={({isActive}) => isActive ? "active" : ""}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/Contacto" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
                </li>         
            </ul>
        </nav>
    </header>
  )
}
