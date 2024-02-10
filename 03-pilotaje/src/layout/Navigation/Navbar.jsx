import React from 'react'
import { Link } from 'react-router-dom'
import logotipo from '../../assets/ls-logo.png'
import './Navbar.css'

const Navbar = () => {
	return (
		<header className="header">
			<div className="header__contenedor">
				<div className="header__barra">
					<div className="header__logo">
						<Link to={'/'}>
							<img src={logotipo} alt="Imagen logotipo" />
						</Link>
					</div>
					<nav className="navegacion">
						<Link to={'/'} className="navegacion__link">
							Inicio
						</Link>
						<Link to={'/verTodos'} className="navegacion__link">
							Ver todos
						</Link>
						<Link to={'/registrar'} className="navegacion__link">
							Registrar Lugar
						</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Navbar