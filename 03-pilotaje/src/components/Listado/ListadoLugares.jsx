import React, { useEffect, useState } from 'react'
import './ListadoLugares.css'
import axios from 'axios';

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

		// el efecto se ejecutará solo cuando la URL cambie, lo que garantiza que la solicitud HTTP se realice solo cuando sea necesario

	}, [url])

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
									<button className="boton boton--editar" href={`./editar/${id}`}>
										Editar
									</button>
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