import { trabajos } from '../../data/trabajos'
import PropTypes from 'prop-types'
import '../PortafolioComponent/Portafolio.css'
import { Link } from 'react-router-dom';

export const ListadoTrabajos = ({limite}) => {
  return (
    <section className="works">
        {
          trabajos.slice(0, limite).map(trabajo => {
            return (
              <article key={trabajo.id} className="work-item">
                <div className="mask">
                  <img src={"/imagenes/"+trabajo.id+".png"} />
                </div>
                <span>{trabajo.categorias}</span>
                <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
                <h4>{trabajo.tecnologias}</h4>
              </article>
            );
          })
        }
    </section>
  )
}

ListadoTrabajos.propTypes = {
    limite: PropTypes.string
}