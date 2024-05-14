import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	const onLogout = () => {
		navigate('/login', { replace: true });
	};

	const onSoli = () => {
		navigate('/solicitud', {
			replace: true,
			state: { logged: true, name: state?.name } // Incluye el nombre del usuario en el estado
		});
	};
	
	const onCargo = () => {
		navigate('/cargo', {
			replace: true,
			state: { logged: true, name: state?.name } // Incluye el nombre del usuario en el estado
		});
	};
	
	return (
		<>
			<header>
				<h1>
					<Link to='/'>Logo</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<button className='btn-logout2' onClick={onCargo}>
							Cargo
						</button>
						<button className='btn-logout2' onClick={onSoli}>
							Solicitud
						</button>

						<span className='username'>{state?.name}</span>

						<button className='btn-logout2' onClick={onLogout}>
							Cerrar sesión
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};
