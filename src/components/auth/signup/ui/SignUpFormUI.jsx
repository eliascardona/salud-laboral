import '../styles/SignUp.css'

export default function SignUpFormUI({ handleCustomerName, handleUserEmail, handleUserPass }) {
	return (
		<div className='SignUp__inputGroup'>
			<span className='SignUp__formTitle'>
				Account info
			</span>
			<span className='SignUp__inputLine'>
				<div className='SignUp__inputLineLy'>
					<span className='SignUp__dGrid'>
						<label className='SignUp__label'>{"  "}First name</label>
						<input type='text' placeholder='First name' className='SignUp__input' onChange={handleCustomerName} />    			    
					</span>
					<span className='SignUp__dGrid'>
						<label className='SignUp__label'>{"  "}Last name</label>
						<input type='text' placeholder='Last name' className='SignUp__input' />
					</span>
				</div>
			</span>

			<span className='SignUp__inputLine'>
				<label className='SignUp__label'>{"  "}Email</label>
				<input type='email' placeholder='doe@example.com' className='SignUp__input' onChange={handleUserEmail} />
			</span>


			<span className='SignUp__inputLine'>
				<label className='SignUp__label'>{"  "}Password</label>
				<input type='password' placeholder='S3CURE@PASSWORD' className='SignUp__input' onChange={handleUserPass} />
			</span>


			<span className='SignUp__inputLine'>
				<label className='SignUp__label'>{"  "}Repeat your password</label>
				<input type='password' placeholder='S3CURE@PASSWORD' className='SignUp__input' />
			</span>
		</div>
	)
}

