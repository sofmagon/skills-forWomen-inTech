import React from 'react'
import './Forms.css'

const EditarLugar = () => {
	return (
		<main className="registrar registrar__contenedor">
			<h1 className="registrar__heading">Cambiar información</h1>
			<form className="formulario">
				<img src="https://picsum.photos/1000/700" alt="Imagen sitio elegido" />
				<fieldset className="formulario__fielset formulario__fielset--editar">
					<legend>Edita los datos</legend>
					<div className="campo">
						<label htmlFor="nombre">Nombre:</label>
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
						<label htmlFor="estado">Fotografía:</label>
						<input type="file" id="fotografia" accept="image/png, image/jpeg" />
					</div>
				</fieldset>
				<input
					className="boton boton--form"
					type="submit"
					defaultValue="Realizar cambios"
				/>
			</form>
		</main>
	)
}

export default EditarLugar