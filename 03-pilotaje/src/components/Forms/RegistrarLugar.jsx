import React, { useState } from 'react'
import './Forms.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrarLugar = () => {
	const navegacion = useNavigate();

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

	return (
		<main className="registrar registrar__contenedor">
			<h1 className="registrar__heading">Registra tu lugar seguro</h1>
			<form className="formulario">
				<fieldset className="formulario__fielset">
					<legend>Ingresa los datos</legend>
					<div className="campo">
						<label htmlFor="nombre">Nombre del lugar:</label>
						<input type="text" id="nombre" name='nombre' required="" value={nombre} />
					</div>
					<div className="campo">
						<label htmlFor="descripcion">Descripción:</label>
						<textarea id="descripcion" name='descripcion' value={descripcion} />
					</div>
					<div className="campo">
						<label htmlFor="calle">Calle:</label>
						<input type="text" id="calle" name='calle' required="" value={calle} onChange={(e) => onInputChange(e)} />
					</div>
					<div className="campo">
						<label htmlFor="num">Número:</label>
						<input type="text" id="num" name='num' required="" value={numero} onChange={(e) => onInputChange(e)} />
					</div>
					<div className="campo">
						<label htmlFor="colonia">Colonia:</label>
						<input type="text" id="colonia" name='colonia' required="" value={colonia} />
					</div>
					<div className="campo">
						<label htmlFor="cp">Código Postal:</label>
						<input type="text" id="cp" name='cp' required="" value={cp} />
					</div>
					<div className="campo">
						<label htmlFor="ciudad">Ciudad:</label>
						<input type="text" id="ciudad" name='ciudad' required="" value={ciudad} />
					</div>
					<div className="campo">
						<label htmlFor="estado">Estado:</label>
						<input type="text" id="estado" name='estado' required="" value={estado} />
					</div>
					<div className="campo">
						<label htmlFor="fotografia">Fotografía:</label>
						<input type="file" id="fotografia" name='fotografia' accept="image/png, image/jpeg" />
					</div>
				</fieldset>
				<button className='boton boton--form'>Agregar lugar</button>
			</form>
		</main>
	)
}

export default RegistrarLugar