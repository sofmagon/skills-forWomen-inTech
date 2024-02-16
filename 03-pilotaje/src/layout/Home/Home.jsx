import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import num1 from '../../assets/numero-1.png'
import num2 from '../../assets/numero-2.png'
import num3 from '../../assets/numero-3.png'
import imgBienvenida from '../../assets/mujeres_2.png'
import './Home.css'
import axios from 'axios'

const Home = () => {
	const url = 'https://sofmagon-fakeapi.vercel.app/lugares';
	const [favoritos, setFavoritos] = useState([]);

	useEffect(() => {

	})

	return (
		<>
			<div className='__contenedor'>
				<div className="header__grid">
					<div className="header__textos">
						<h1 className="header__heading header__gradiente">
							Bienvenida a tu espacio seguro
						</h1>
						<p className="header__descripcion">
							Enfrentemos la necesidad urgente de garantizar la seguridad de las mujeres
							en entornos públicos y privados.
						</p>
						<Link to={'/registrar'} className="boton">
							Registrar lugar
						</Link>
					</div>
					<div className="header__grafico">
						<img
							src={imgBienvenida}
							alt="Imagen mujeres bienvenida"
							className="header__imagen"
						/>
					</div>
				</div>
			</div>

			<section className="funciona contenedor">
				<h2 className="funciona__heading">Nuestra Propuesta</h2>
				<div className="funciona__iconos">
					<div className="icono">
						<img src={num1} alt="Imagen icono paso 1" />
						<h3>Date de alta</h3>
						<p className="icono__texto">
							Tus datos no se verán comprometidos. Esto nos ayuda a mantener un mejor
							control.
						</p>
					</div>
					<div className="icono">
						<img src={num2} alt="Imagen icono paso 2" />
						<h3>Registra tus lugares</h3>
						<p className="icono__texto">
							Cualquier sitio que te haga sentir protegida ante cualquier situación es
							válido.
						</p>
					</div>
					<div className="icono">
						<img src={num3} alt="Imagen icono paso 3" />
						<h3>Comenta</h3>
						<p className="icono__texto">
							Retro alimenta esta red de sitios para que otras mujeres conozcan
							diversas experiencias.
						</p>
					</div>
				</div>
			</section>

			<section className="sobre">
				<div className="sobre__grid contenedor">
					<div className="sobre__textos">
						<h2 className="sobre__heading">¿Quiénes somos?</h2>
						<p>
							Lugares Seguros es una iniciativa creada por un grupo apasionado de
							mujeres en tecnología con la misión de empoderar a otras mediante la
							creación de una plataforma exclusiva.
						</p>
					</div>
				</div>
			</section >

			<main className="favoritos contenedor">
				<h2 className="favoritos__heading">Nuestros Favoritos</h2>
				<div className="listado-favoritos">
					<div className="favorito">
						<img src="https://picsum.photos/1000/700" alt="Imagen favorito 01" />
						<div className="favorito__textos">
							<h3>Nombre Lugar 01</h3>
							<p>
								Aquí vamos a mostrar su descripción. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Architecto aliquam possimus ut commodi sit
								error veniam..
							</p>
							<p>
								Y aquí el domicilio. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Autem, in?
							</p>
						</div>
					</div>
					{/* .favorito 01 */}
					<div className="favorito">
						<img src="https://picsum.photos/1000/700" alt="Imagen favorito 02" />
						<div className="favorito__textos">
							<h3>Nombre Lugar 02</h3>
							<p>
								Aquí vamos a mostrar su descripción. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Architecto aliquam possimus ut commodi sit
								error veniam voluptatem provident tempora totam.
							</p>
							<p>
								Y aquí el domicilio. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Autem, in?
							</p>
						</div>
					</div>
					{/* .favorito 02 */}
					<div className="favorito">
						<img src="https://picsum.photos/1000/700" alt="Imagen favorito 03" />
						<div className="favorito__textos">
							<h3>Nombre Lugar 03</h3>
							<p>
								Aquí vamos a mostrar su descripción. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Architecto aliquam possimus ut commodi sit
								error veniam voluptatem provident tempora totam.
							</p>
							<p>
								Y aquí el domicilio. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Autem, in?
							</p>
						</div>
					</div>
					{/* .favorito 03 */}
					<div className="favorito">
						<img src="https://picsum.photos/1000/700" alt="Imagen favorito 04" />
						<div className="favorito__textos">
							<h3>Nombre Lugar 04</h3>
							<p>
								Aquí vamos a mostrar su descripción. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Architecto aliquam possimus ut commodi sit
								error veniam voluptatem provident tempora totam.
							</p>
							<p>
								Y aquí el domicilio. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Autem, in?
							</p>
						</div>
					</div>
					{/* .favorito 04 */}
					<div className="favorito">
						<img src="https://picsum.photos/1000/700" alt="Imagen favorito 05" />
						<div className="favorito__textos">
							<h3>Nombre Lugar 05</h3>
							<p>
								Aquí vamos a mostrar su descripción. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Architecto aliquam possimus ut commodi sit
								error veniam voluptatem provident tempora totam.
							</p>
							<p>
								Y aquí el domicilio. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Autem, in?
							</p>
						</div>
					</div>
					{/* .favorito 05 */}
					<div className="favorito">
						<img src="https://picsum.photos/1000/700" alt="Imagen favorito 06" />
						<div className="favorito__textos">
							<h3>Nombre Lugar 06</h3>
							<p>
								Aquí vamos a mostrar su descripción. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Architecto aliquam possimus ut commodi sit
								error veniam voluptatem provident tempora totam.
							</p>
							<p>
								Y aquí el domicilio. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Autem, in?
							</p>
						</div>
					</div>
					{/* .favorito 06 */}
				</div>
				<Link className="boton boton--secundario" to={'/verTodos'}>
					Ver Todos
				</Link>
			</main>
		</>
	)
}

export default Home