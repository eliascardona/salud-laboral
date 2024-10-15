import '../styles/SignIn.css'

export default function SignInFormUI({ handleCustomerName, handleCustomerEmail, handleCustomerPass }) {
	return (
		<div className='inputGroup'>
			<span className='formTitle'>
				Account info
			</span>
			<span className='inputLine'>
				<div className='inputLineLy'>
					<span className='dGrid'>
						<label className='label'>{"  "}First name</label>
						<input type='text' placeholder='First name' className='input' onChange={handleCustomerName} />    			    
					</span>
					<span className='dGrid'>
						<label className='label'>{"  "}Last name</label>
						<input type='text' placeholder='Last name' className='input' />
					</span>
				</div>
			</span>

			<span className='inputLine'>
				<label className='label'>{"  "}Email</label>
				<input type='email' placeholder='doe@example.com' className='input' onChange={handleCustomerEmail} />
			</span>


			<span className='inputLine'>
				<label className='label'>{"  "}Password</label>
				<input type='password' placeholder='S3CURE@PASSWORD' className='input' onChange={handleCustomerPass} />
			</span>


			<span className='inputLine'>
				<label className='label'>{"  "}Repeat your password</label>
				<input type='password' placeholder='S3CURE@PASSWORD' className='input' />
			</span>
		</div>
	)
}

