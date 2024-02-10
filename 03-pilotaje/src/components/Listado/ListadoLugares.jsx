import React from 'react'
import './ListadoLugares.css'

const ListadoLugares = () => {
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
				{/* .lugar 01 */}
				<div className="lugar">
					<img src="https://picsum.photos/1000/700" alt="Imagen favorito 02" />
					<div className="lugar__textos">
						<h3>Nombre Lugar 02</h3>
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
				{/* .lugar 02 */}
				<div className="lugar">
					<img src="https://picsum.photos/1000/700" alt="Imagen favorito 03" />
					<div className="lugar__textos">
						<h3>Nombre Lugar 03</h3>
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
				{/* .lugar 03 */}
				<div className="lugar">
					<img src="https://picsum.photos/1000/700" alt="Imagen favorito 04" />
					<div className="lugar__textos">
						<h3>Nombre Lugar 04</h3>
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
				{/* .lugar 04 */}
				<div className="lugar">
					<img src="https://picsum.photos/1000/700" alt="Imagen favorito 05" />
					<div className="lugar__textos">
						<h3>Nombre Lugar 05</h3>
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
				{/* .lugar 05 */}
				<div className="lugar">
					<img src="https://picsum.photos/1000/700" alt="Imagen favorito 06" />
					<div className="lugar__textos">
						<h3>Nombre Lugar 06</h3>
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
				{/* .lugar 06 */}
			</section>
		</main>
	)
}

export default ListadoLugares