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
		axios.get(url)
			.then(respuesta => {
				// extraer los datos de la respuesta y asignar a datos: array de objetos
				const datos = respuesta.data;
				// Tomar sólo 6 del array de objetos
				const favAleatorios = getFavAleatorios(datos, 6);
				// actualiazando el estado
				setFavoritos(favAleatorios);
			})
			.catch(error => {
				console.error('Error al obtener datos de la API:', error);
			});

		// un array vacío como segundo argumento: el efecto solo se ejecutará una vez después de que el componente se monte.
	}, [])

	// devuelve una selección aleatoria de elementos del array original sin modificarlo
	function getFavAleatorios(array, cantidad) {
		// Clonar el array original para evitar modificarlo
		const copiaArray = [...array];
		// Método .sort() con una función de comparación que genera un valor entre -0.5 y 0.5 para mezclar aleatoriamente los elementos del array.
		copiaArray.sort(() => Math.random() - 0.5);
		// Devolver los primeros 6 elementos del array mezclado
		return copiaArray.slice(0, cantidad)
	}

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

			<section className="funciona __contenedor">
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
				<div className="sobre__grid __contenedor">
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

			<main className="favoritos __contenedor">
				<h2 className="favoritos__heading">Nuestros Favoritos</h2>
				<div className="listado-favoritos">
					{
						favoritos.map(({ id, nombre, descripcion, calle, numero, colonia, cp, ciudad, estado, foto }) => (
							<div className="favorito">
								<img src={foto} alt={`Imagen ${nombre}`} />
								<div className="favorito__textos">
									<h3>{nombre}</h3>
									<p>{descripcion}</p>

									<p className='lugar__datos'>{`${calle} ${numero}, ${colonia}, C.P. ${cp}`}</p>

									<p className='lugar__datos'>{`${ciudad}, ${estado}`}</p>
								</div>
							</div>
						))
					}
				</div>
				<Link className="boton boton--secundario" to={'/verTodos'}>
					Ver Todos
				</Link>
			</main>
		</>
	)
}

export default Home