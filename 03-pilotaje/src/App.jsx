import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navigation/Navbar'
import Home from './layout/Home/Home'
import Footer from './layout/Footer/Footer'

function App() {

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/verTodos' />
				<Route exact path='/registrar' />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App