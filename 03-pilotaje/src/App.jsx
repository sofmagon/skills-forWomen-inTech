import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navigation/Navbar'
import Home from './layout/Home/Home'
import Footer from './layout/Footer/Footer'
import ListadoLugares from './components/Listado/ListadoLugares'
import RegistrarLugar from './components/Forms/RegistrarLugar'
import EditarLugar from './components/Forms/EditarLugar'

function App() {

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/verTodos' element={<ListadoLugares />} />
				<Route exact path='/registrar' element={<RegistrarLugar />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App