import { Routes, Route } from 'react-router-dom'
import MainHeader from '../components/ui/headers/MainHeader'
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
			<MainHeader />
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
				{/*  for not found routes  */}
				<Route 
					path="*"
					element={pagesDirectory.notFound}
				/>
			</Routes>
		</div>
	)
}

