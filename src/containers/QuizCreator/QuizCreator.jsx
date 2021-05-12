import React, { Component } from 'react'
import classes from './QuizCreator.module.scss'
import Button from '../../components/UI/Button/Button'
import Select from '../../components/UI/Select/Select'
import Input from '../../components/UI/Input/Input'
import {createControl, validate, validateForm } from '../../utils/formUtils'

function createOptionControl(number) {
	return createControl({
		label: `Option ${number}`,
		errorMessage: "The value can't be empty",
		id: number
	}, { required: true })
}

function createFormControls() {
	return {
		question: createControl({
			label: "Enter a question",
			errorMessage: "Question can't be blank"
		}, { required: true }),
		option1: createOptionControl(1),
		option2: createOptionControl(2),
		option3: createOptionControl(3),
		option4: createOptionControl(4)
	}
}

export default class QuizCreator extends Component {

	state = {
		quiz: [],
		isFormValid: false,
		formControls: createFormControls(),
		rightAnswerId: 1
	}

	submitHandler = e => {
		e.preventDefault()
	}

	addQuestionHandler = () => {

	}

	createQuizHandler = () => {
		
	}

	onChangeHandler = (value, controlName) => {
		const formControls = { ...this.state.formControls }
		const control = { ...formControls[controlName] }

		control.touched = true
		control.value = value
		control.valid = validate(control.value, control.validation)

		formControls[controlName] = control
		this.setState({
			formControls,
			isFormValid: validateForm(formControls)
		})
	}

	renderInputs() {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName]

			return (
				<React.Fragment key = {controlName + index}>
					<Input
						label={control.label}
						value={control.value}
						valid={control.valid}
						shouldValidate={!!control.validation}
						touched={control.touched}
						errorMessage={control.errorMessage}
						onChange={e => this.onChangeHandler(e.target.value, controlName)}
					/>
					{index === 0 ? <hr /> : null}
				</React.Fragment>
			)
		})
	}

	selectChangeHandler = e => {
		this.setState({
			rightAnswerId: +e.target.value
		})
	}
	
	render() {
		const select = <Select
			label="Choose the correct answer"
			value={this.state.rightAnswerId}
			onChange={this.selectChangeHandler}
			options={[
				{text: 1, value: 1},
				{text: 2, value: 2},
				{text: 3, value: 3},
				{text: 4, value: 4},
			]}
		/>

		return (
			<div className={classes.QuizCreator}>
				<div>
				<h1>Quiz Creator</h1>

				<form onSubmit={this.submitHandler}>

					{this.renderInputs()}

					{select}

					<Button
						type="primary"
						onClick={this.addQuestionHandler}
						disabled={!this.state.isFormValid}
					>
						Add question
					</Button>

					<Button
						type="success"
						onClick={this.createQuizHandler}
						disabled={this.state.quiz.length === 0}
					>
						Create quiz
					</Button>
				</form>
				</div>
			</div>
		)
	}
}