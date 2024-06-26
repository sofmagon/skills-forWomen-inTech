import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	// Recuperar los datos del usuario desde el local storage
	const user = JSON.parse(localStorage.getItem('user'));

	// Definir los tipos de usuario que tienen permitido el acceso
	const allowedUserTypes = ['superadmin', 'admin', 'auxiliar', 'emprendimiento'];

	// Si el usuario existe y su tipo está dentro de los permitidos, renderizar los componentes hijos
	if (user && allowedUserTypes.includes(user.userType)) {
		return children;
	} else {
		// Si la condición falla, redirigir a la página de inicio de sesión
		return <Navigate to="/signin" />;
	}
};

export default PrivateRoute