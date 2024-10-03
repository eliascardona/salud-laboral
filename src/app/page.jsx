import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/ui/navigation/Navbar'
import HomePage from './home/HomePage'
import QueriesPage from './queries/QueriesPage'
import '../assets/css/global.css'

function NotFoundPage() {
	return (
		<div>404 - ruta no valida</div>
	)
}

export default function Page() {
	const pagesDirectory = {
		homePage: <HomePage/>,
		queriesPage: <QueriesPage/>,
		notFound: <NotFoundPage />,
	}

	return (
		<div className="body">
			<Navbar />
			<Routes>
				<Route 
					path="/"
					exact
					element={pagesDirectory.homePage}
				/>
				<Route 
					path="/queries"
					element={pagesDirectory.queriesPage}
				/>
				{/*  for not found routes  */}
				<Route 
					path="*"
					element={pagesDirectory.notFound}
				/>
			</Routes>
		</div>
	)
}

