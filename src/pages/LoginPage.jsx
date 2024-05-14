import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';

export const LoginPage = () => {
	const navigate = useNavigate();

	const { name, email, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			email: '',
			password: '',
		});

	const onLogin = e => {
		e.preventDefault();

		navigate('/solicitud', {
			replace: true,
			state: {
				logged: true,
				name,
			},
		});

		onResetForm();
	};

	return (
		<div className='wrapper'>
			<form onSubmit={onLogin}>
			<div className='tarjetaBorde'>

				<h1 className='Title'>Iniciar Sesión</h1>


				<div className='input-group'>
					<label className='name'>Nombre:</label>

					<input
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={onInputChange}
						required
						autoComplete='off'
						placeholder='Nombre'
					/>
				</div>

				<div className='input-group'>
					<label className='name'>Email:</label>

					<input
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={onInputChange}
						required
						autoComplete='off'
						placeholder='Email'
					/>
				</div>
				<div className='input-group'>
					<label className='name'>Contraseña:</label>

					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
						placeholder='Contraseña'
					/>
				</div>

				<button className='btn-navegar'>Entrar</button>
				</div>
			</form>
		</div>
	);
};
