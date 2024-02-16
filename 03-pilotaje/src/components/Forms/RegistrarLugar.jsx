import React from 'react'
import './Forms.css'

const RegistrarLugar = () => {
	return (
		<main className="registrar registrar__contenedor">
			<h1 className="registrar__heading">Registra tu lugar seguro</h1>
			<form className="formulario">
				<fieldset className="formulario__fielset">
					<legend>Ingresa los datos</legend>
					<div className="campo">
						<label htmlFor="nombre">Nombre del lugar:</label>
						<input type="text" id="nombre" required="" />
					</div>
					<div className="campo">
						<label htmlFor="descripcion">Descripción:</label>
						<textarea id="descripcion" defaultValue={""} />
					</div>
					<div className="campo">
						<label htmlFor="callenum">Calle y Número:</label>
						<input type="text" id="callenum" required="" />
					</div>
					<div className="campo">
						<label htmlFor="colonia">Colonia:</label>
						<input type="text" id="colonia" required="" />
					</div>
					<div className="campo">
						<label htmlFor="cp">Código Postal:</label>
						<input type="text" id="cp" required="" />
					</div>
					<div className="campo">
						<label htmlFor="ciudad">Ciudad:</label>
						<input type="text" id="ciudad" required="" />
					</div>
					<div className="campo">
						<label htmlFor="estado">Estado:</label>
						<input type="text" id="estado" required="" />
					</div>
					<div className="campo">
						<label htmlFor="fotografia">Fotografía:</label>
						<input type="file" id="fotografia" accept="image/png, image/jpeg" />
					</div>
				</fieldset>
				<button className='boton boton--form'>Agregar lugar</button>
			</form>
		</main>
	)
}

export default RegistrarLugar