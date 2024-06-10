import { Link } from 'react-router-dom'
import './Inicio.css'
import { ListadoTrabajos } from '../ListadoTrabajosComponent/ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola, soy <strong>Cristian Campos</strong> y soy desarrollador web en Bogotá, y ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo front-end</strong> en todo tipo de proyecto web.
      </h1>

      <h2>Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y relevancia en internet. 
        <Link to="/contacto">Contacta con migo.</Link> </h2>

      <section className="lasts-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrolo web.</p>

        <ListadoTrabajos limite="2"/>
      </section>
    </div>
  )
}
