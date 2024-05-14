import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { CargoPage, LoginPage, RegisterPage, SolicitudPage, } from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<LoginPage />} />
					<Route path='login' element={<LoginPage />} />
					<Route
						path='solicitud'
						element={
							<PrivateRoute>
								<SolicitudPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='cargo'
						element={
							<PrivateRoute>
								<CargoPage />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};