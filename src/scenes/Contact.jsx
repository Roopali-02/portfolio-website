import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Collapse, Grid, Alert, useMediaQuery } from '@mui/material';

const Contact = () => {
	const aboveMobileScreen = useMediaQuery('(min-width:768px)');
	const [formStatus, setFormStatus] = useState(null);
	const { register, trigger, handleSubmit, formState: { errors } } = useForm();
	console.log(process.env.REACT_APP_FORM_SUBMIT_URL);

	const onSubmit = async (e) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault(); // Prevent submission if the form is invalid
			return;
		}
		setFormStatus('success');
	};

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const status = queryParams.get('status');

		if (status === 'success') {
			setFormStatus('success');
			setTimeout(() => {
				document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
			}, 1000);
		} else if (status === 'error') {
			setFormStatus('error');
		}
		const timer = setTimeout(() => {
			setFormStatus(null);
			window.history.replaceState(null, '', window.location.pathname);
		}, 5000);

		// Cleanup timer on component unmount
		return () => clearTimeout(timer);
	}, []);


	return (
		<Box id="contact" className={`${aboveMobileScreen ? 'px-24' : 'px-8'} bg-slate-100 py-12`}>
			<Box className="font-bold text-4xl mb-5 flex gap-x-2">Contact Me</Box>
			<Collapse in={formStatus === 'success'}>
				<Alert severity="success" className='my-2'>Thank you! Your message has been sent.</Alert>
			</Collapse>
			<Collapse in={formStatus === 'error'}>
				<Alert severity="error" className='my-2'>Oops! Something went wrong. Please try again.</Alert>
			</Collapse>
			<Box className={`flex ${aboveMobileScreen?'flex-row':'flex-col'} justify-start items-start w-full`}>
				<Box className='basis-2/5 py-3 pr-10 font-semibold  text-neutral-600'> 
					<Box className='mb-3'> 
					If you have any questions, feedback, or just want to say hi, feel free to reach out to me using the form below. I'll get back to you as soon as possible!
					</Box>
					<Box>
						<Box className="font-bold mr-1" sx={{ color:'#FF416C'}} component='span'>Thank You</Box> for visiting my portfolio. I look forward to hearing from you!
					</Box>
				</Box>
				<Box className='basis-3/5 p-2'>
					<form
						target='_blank'
						onSubmit={onSubmit}
						action="https://formsubmit.co/roopalip169@gmail.com"
						method="POST"
					>
						<input type="hidden" name="_next" value="https://portfolio-website-obsidian.vercel.app/?status=success" />
						<Grid container spacing={4}>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									label="Name"
									variant="outlined"
									name='name'
									{...register('name', { required: 'Name is required' })}
									error={!!errors.name}
									helperText={errors.name ? errors.name.message : ''}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									label="Email"
									variant="outlined"
									name='email'
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
											message: 'Invalid email address'
										}
									})}
									error={!!errors.email}
									helperText={errors.email ? errors.email.message : ''}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label="Message"
									variant="outlined"
									name='message'
									multiline
									rows={4}
									{...register('message', { required: 'Message is required' })}
									error={!!errors.message}
									helperText={errors.message ? errors.message.message : ''}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button type="submit" variant="contained" sx={{background:'#000'}}>
									Send
								</Button>
							</Grid>
						</Grid>
						
					</form>
				</Box>
			</Box>
		</Box>
	);
};

export default Contact;
