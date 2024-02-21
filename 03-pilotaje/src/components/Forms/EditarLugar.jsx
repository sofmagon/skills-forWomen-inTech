import React, { useState } from 'react'
import './Forms.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditarLugar = () => {
	const url = 'https://sofmagon-fakeapi.vercel.app/lugares';

	const [lugar, setLugar] = useState({
		nombre: '',
		descripcion: '',
		calle: '',
		numero: '',
		colonia: '',
		cp: '',
		ciudad: '',
		estado: '',
		foto: ''
	})

	const { nombre, descripcion, calle, numero, colonia, cp, ciudad, estado, foto } = lugar;

	// Obtener el ID de la URL
	const { id } = useParams();

	const navegacion = useNavigate();

	return (
		<main className="registrar registrar__contenedor">
			<h1 className="registrar__heading">Cambiar información</h1>
			<form className="formulario">
				<img src="https://picsum.photos/1000/700" className='img__editar' alt="Imagen sitio elegido" />
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
				<button className='boton boton--form'>Realizar cambios</button>
			</form>
		</main>
	)
}

export default EditarLugar