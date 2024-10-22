import { Routes, Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import QueriesPage from './queries/QueriesPage'
import '../assets/css/global.css'
import Navbar from '../components/ui/navigation/Navbar'
import Prueba from '../app/prueba/Prueba'
import NotFoundPage from '../app/notFound/NotFoundPage'


export default function Page() {
	const pagesDirectory = {
		homePage: <HomePage/>,
		queriesPage: <QueriesPage/>,
		prueba: <Prueba />,
		notFound: <NotFoundPage />,
	}

	return (
		<div className="body">
			<Navbar>
				<Routes>
					<Route 
						path="/"
						exact
						element={pagesDirectory.homePage}
					/>
					<Route 
						path="/consultas"
						element={pagesDirectory.queriesPage}
					/>
					<Route 
						path="/prueba"
						element={pagesDirectory.prueba}
					/>
					{/*  for not found routes  */}
					<Route 
						path="*"
						element={pagesDirectory.notFound}
					/>
					
				</Routes>
			</Navbar>
		</div>
	)
}

