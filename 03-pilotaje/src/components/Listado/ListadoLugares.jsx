import React, { useEffect, useState } from 'react'
import './ListadoLugares.css'

const ListadoLugares = () => {

	const url = 'https://sofmagon-fakeapi.vercel.app/lugares';
	const [lugares, setLugares] = useState([]);

	// realizar la solicitud a la API una vez que el componente se monte
	useEffect(() => {

	})

	return (
		<main className="todos todos__contenedor">
			<h1 className="todos__heading">Listado completo</h1>
			<section className="todos__grid">
				<div className="lugar">
					<img src="https://picsum.photos/1000/700" alt="Imagen favorito 01" />
					<div className="lugar__textos">
						<h3>Nombre Lugar 01</h3>
						<p>
							DESCRIPCIÓN. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto aliquam possimus ut commodi sit error.
						</p>
						<p>
							DOMICILIO con todo lo que implica desde la base de datos: Calle y
							Número. Colonia. Códgio Postal. Ciudad. Estado.
						</p>
						<div className="botones">
							<a className="boton boton--editar" href="./editar.html">
								Editar
							</a>
							<a className="boton boton--borrar" href="#">
								Borrar
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default ListadoLugares