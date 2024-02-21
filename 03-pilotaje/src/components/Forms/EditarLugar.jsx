import React, { useEffect, useState } from 'react'
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

	// este hook se ejecuta al cargar la app una vez ,[]
	useEffect(() => {
		cargarLugares();
	}, [])

	const cargarLugares = async () => {
		// id proviene de useParams
		const resultado = await axios.get(`${url}/${id}`);
		setLugar(resultado.data);
	}

	// para cada input en su atributo onChange
	const onInputChange = (e) => {
		// función set: 1.- spread operator para expandir los atributos del objeto lugar. 2.- para el evento que se generó: recuperar el elemento que lo disparó y su valor.

		// si coincide con alguna de las propiedades del objeto lugar, se modificará su valor y se actualizará el objeto automáticamente
		setLugar({ ...lugar, [e.target.name]: e.target.value })
	}

	const enviarDatos = async (e) => {
		e.preventDefault();
		// url/:id y el objeto actualizado por la función set
		await axios.put(`${url}/${id}`, lugar);
		// una vez hecho, redirigir al inicio
		navegacion('/');
	}

	return (
		<main className="registrar registrar__contenedor">
			<h1 className="registrar__heading">Cambiar información</h1>
			<form onSubmit={(e) => enviarDatos(e)} className="formulario">
				<img src="https://picsum.photos/1000/700" className='img__editar' alt="Imagen sitio elegido" />
				<fieldset className="formulario__fielset formulario__fielset--editar">
					<legend>Edita los datos</legend>
					<div className="campo">
						<label htmlFor="nombre">Nombre:</label>
						<input type="text" id="nombre" name='nombre' required="" value={nombre} onChange={(e) => onInputChange(e)} />
					</div>
					<div className="campo">
						<label htmlFor="descripcion">Descripción:</label>
						<textarea id="descripcion" name='descripcion' value={descripcion} onChange={(e) => onInputChange(e)} />
					</div>
					<div className="campo">
						<label htmlFor="calle">Calle:</label>
						<input type="text" id="calle" name='calle' required="" onChange={(e) => onInputChange(e)} />
					</div>
					<div className="campo">
						<label htmlFor="num">Número:</label>
						<input type="text" id="num" name='num' required="" onChange={(e) => onInputChange(e)} />
					</div>
					<div className="campo">
						<label htmlFor="colonia">Colonia:</label>
						<input type="text" id="colonia" name='colonia' required="" onChange={(e) => onInputChange(e)} />
					</div>
					<div className="campo">
						<label htmlFor="cp">Código Postal:</label>
						<input type="text" id="cp" name='cp' required="" onChange={(e) => onInputChange(e)} />
					</div>
					<div className="campo">
						<label htmlFor="ciudad">Ciudad:</label>
						<input type="text" id="ciudad" name='ciudad' required="" onChange={(e) => onInputChange(e)} />
					</div>
					<div className="campo">
						<label htmlFor="estado">Estado:</label>
						<input type="text" id="estado" name='estado' required="" onChange={(e) => onInputChange(e)} />
					</div>
					<div className="campo">
						<label htmlFor="estado">Fotografía:</label>
						<input type="file" id="fotografia" name='fotografia' accept="image/png, image/jpeg" onChange={(e) => onInputChange(e)} />
					</div>
				</fieldset>
				<button type='submit' className='boton boton--form'>Realizar cambios</button>
			</form>
		</main>
	)
}

export default EditarLugar