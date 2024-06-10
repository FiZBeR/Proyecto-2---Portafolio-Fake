import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Inicio } from '../components/InicioComponent/Inicio'
import { Portafolio } from '../components/PortafolioComponent/Portafolio'
import { Servicios } from '../components/ServiciosComponent/Servicios'
import { Curriculum } from '../components/CurriculumComponent/Curriculum'
import { Contacto } from '../components/ContactoComponent/Contacto'
import { HeaderNav } from '../components/LayoutComponents/HeaderNav'
import { FooterComponent } from '../components/LayoutComponents/FooterComponent'
import { Proyecto } from '../components/ProyectosComponent/Proyecto'

export const MisRutas = () => {
  return (
    <BrowserRouter>

        {/* Header y Navegacion */}
        <HeaderNav/>

        {/* Contenido Central */}
        <section className="content">
            <Routes>
                <Route path="/" element={<Navigate to="/inicio" />} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/portafolio" element={<Portafolio/>} />
                <Route path="/servicios" element={<Servicios/>} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/proyecto/:id" element={<Proyecto />} />
                <Route path="*" element={<h1 className="heading">Error 404</h1>} />
            </Routes>
        </section>

        {/* Footer */}
        <FooterComponent/>

    </BrowserRouter>
  )
}
