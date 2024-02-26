import React, { useEffect, useState } from 'react'
import './ListadoLugares.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListadoLugares = () => {

	const url = 'https://sofmagon-fakeapi.vercel.app/lugares';
	const [lugares, setLugares] = useState([]);

	// realizar la solicitud a la API una vez que el componente se monte
	useEffect(() => {

		const obtenerLugares = async () => {
			try {
				// la respuesta se asigna a resultado
				const resultado = await axios.get(url);
				// actualizar el estado
				setLugares(resultado.data);
			} catch (error) {
				console.error('ERROR AL OBTENER LUGARES', error);
			}
		}

		obtenerLugares()
	}, [])

	const handleEliminarLugar = async (id) => {
		try {
			await axios.delete(`${url}/${id}`);
			// Después de eliminar el lugar, actualizar la lista de lugares
			const nuevosLugares = lugares.filter(lugar => lugar.id !== id);
			setLugares(nuevosLugares);
		} catch (error) {
			console.error('ERROR AL ELIMINAR LUGAR', error);
		}

		obtenerLugares()
	}

	return (
		<main className="todos todos__contenedor">
			<h1 className="todos__heading">Listado completo</h1>
			<section className="todos__grid">
				{
					lugares.map(({ id, nombre, descripcion, calle, numero, colonia, cp, ciudad, estado, foto }) => (

						<div key={id} className="lugar">
							<img src={foto} alt={`Imagen: ${nombre}`} />
							<div className="lugar__textos">
								<h3>{nombre}</h3>
								<p>{descripcion}</p>

								<p className='lugar__datos'>{`${calle} ${numero}, ${colonia}, C.P. ${cp}`}</p>

								<p className='lugar__datos'>{`${ciudad}, ${estado}`}</p>

								<div className="botones">
									<Link to={`/editar/${id}`} className="boton boton--editar" >
										Editar
									</Link>
									<button className="boton boton--borrar" onClick={() => handleEliminarLugar(id)}>
										Borrar
									</button>
								</div>
							</div>
						</div>
					))
				}
			</section>
		</main>
	)
}

export default ListadoLugares