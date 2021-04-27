import React, { Component } from 'react'
import classes from './Auth.module.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

function validateEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
}

export default class Auth extends Component {

	state = {
		isFormValid: false,
		formControls: {
			email: {
				value: '',
				type: 'email',
				label: 'Email',
				errorMessage: 'Email is incorrect',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			password: {
				value: '',
				type: 'password',
				label: 'Password',
				errorMessage: 'Password is incorrect',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6
				}
			}
		}
	}

	loginHandler = () => {
		
	}

	registerHandler = () => {
		
	}

	submitHandler = event => {
		
	}

	validateControl(value, validation) {
		if (!validation) {
			return true
		}

		let isValid = true

		if (validation.required) {
			isValid = value.trim() !== '' && isValid
		}

		if (validation.email) {
			isValid = validateEmail(value) && isValid
		}

		if (validation.minLength) {
			isValid = value.trim().length >= validation.minLength && isValid
		}

		return isValid
	}

	onChangeHandler = (event, controlName) => {
		const formControls = { ...this.state.formControls }
		const control = { ...formControls[controlName] }

		control.value = event.target.value
		control.touched = true
		control.valid = this.validateControl(control.value, control.validation)

		formControls[controlName] = control

		let isFormValid = true

		Object.keys(formControls).forEach(controlName => {
			isFormValid = formControls[controlName].valid && isFormValid
		})

		this.setState({
			formControls,
			isFormValid
		})
	}

	renderInputs() {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName]
			return (
				<Input
					key={controlName + index}
					type={control.type}
					value={control.value}
					label={control.label}
					errorMessage={control.errorMessage}
					valid={control.valid}
					touched={control.touched}
					validation={control.validation}
					shouldValidate={!!control.validation}
					onChange={event => this.onChangeHandler(event, controlName)}
				/>
			)
		})
	}

	render() {
		return (
			<div className={classes.Auth}>
				<div>
					<h1>Sign up</h1>

					<form onSubmit={this.submitHandler} className={classes.AuthForm}>

						{this.renderInputs()}

						<Button
							type="success"
							onClick={this.loginHandler}
							disabled={!this.state.isFormValid}
						>
							Sign in
						</Button>

						<Button
							type="primary"
							onClick={this.registerHandler}
							disabled={!this.state.isFormValid}
						>
							Sign up
						</Button>
					</form>
				</div>
			</div>
		)
	}
}