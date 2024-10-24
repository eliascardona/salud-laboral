import { Routes, Route } from 'react-router-dom'
import { AuthFirstLayerProvider } from '../redux/slices/auth/layerOne/AuthFirstLayerContext'
import Navbar from '../components/ui/navigation/Navbar'
import NotFoundPage from '../app/notFound/NotFoundPage'

import HomePage from './home/HomePage'
import Prueba from '../app/prueba/Prueba'
import QueriesPage from './queries/QueriesPage'

import '../assets/css/global.css'
import SignUpPage from './signUp/SignUpPage'
import SignInPage from './signIn/SignInPage'


export default function Page() {
	const pagesDirectory = {
		homePage: <HomePage/>,
		queriesPage: <QueriesPage/>,
		prueba: <Prueba />,
		signUp: <SignUpPage />,
		signIn: <SignInPage />,
		notFound: <NotFoundPage />,
	}

	return (
		<div className="body">
			<AuthFirstLayerProvider>
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
						<Route 
							path="/signUp"
							element={pagesDirectory.signUp}
						/>
						<Route 
							path="/signIn"
							element={pagesDirectory.signIn}
						/>
						{/*  for not found routes  */}
						<Route 
							path="*"
							element={pagesDirectory.notFound}
						/>
					</Routes>
				</Navbar>
			</AuthFirstLayerProvider>
		</div>
	)
}

