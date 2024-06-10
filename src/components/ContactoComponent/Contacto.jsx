import './Contacto.css'

export const Contacto = () => {
  return (
    <div>
      <h1 className="heading">Contacto</h1>

      <form className="contact" action='mailto:ccv234567@gmail.com'>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Motivo de contacto" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
