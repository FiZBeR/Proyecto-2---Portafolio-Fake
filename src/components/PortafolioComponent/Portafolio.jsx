import { ListadoTrabajos } from '../ListadoTrabajosComponent/ListadoTrabajos'
import './Portafolio.css'

export const Portafolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portafolio</h1>
      
      <ListadoTrabajos />
    </div>
    
  )
}
