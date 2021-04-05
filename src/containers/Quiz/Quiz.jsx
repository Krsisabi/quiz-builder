import React, { Component } from 'react'
import classes, { QuizWrapper } from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

export default class Quiz extends Component {
	state = {
		results: {},
		isFinished: false,
		activeQuestion: 0,
		answerState: null,
		quiz: [
			{
				id: 1,
				question: 'Сколько здесь вопросов?',
				rightAnswerId: 2,
				answers: [
					{ id: 1, text: 'Олово' },
					{ id: 2, text: '1' },
					{ id: 3, text: 'Два' },
					{ id: 4, text: 'Что' }
				]
			},
			{
				id: 2,
				question: 'Какой это вопрос?',
				rightAnswerId: 3,
				answers: [
					{ id: 1, text: 'Тритий' },
					{ id: 2, text: 'Первый' },
					{ id: 3, text: '2й' },
					{ id: 4, text: 'Где?' }
				]
			}
		]
	}

	onAnswerClickHandler = answerId => {
		if (this.state.answerState) {
			const key = Object.keys(this.state.answerState)[0]
			if (this.state.answerState[key] === 'success') {
				return
			}
		}
		
		const question = this.state.quiz[this.state.activeQuestion]
		const results = this.state.results

		if (question.rightAnswerId === answerId) {
			if (!results[question.id]) {
				results[question.id] = 'success'
			}

			this.setState({
				answerState: { [answerId]: 'success' },
				results
			})

			const timeout = setTimeout(() => {
				if (this.isQuizFinished()) {
					this.setState({
						isFinished: true
					})
				} else {
					this.setState({
						activeQuestion: this.state.activeQuestion + 1,
						answerState: null
					})
				}

				clearTimeout(timeout);

			}, 1000);

		} else {
			results[question.id] = 'error'
			this.setState({
				answerState: { [answerId]: 'error' },
				results
			})

		}
	}

	isQuizFinished() {
		return this.state.activeQuestion + 1 === this.state.quiz.length
	}

	retryHandler = () => {
		this.setState({
			activeQuestion: 0,
			answerState: null,
			isFinished: false,
			results: {}
		})
	}

	render() {
		return (
			<div className={classes.Quiz}>
				<div className={QuizWrapper}>
					<h1>Quiz</h1>
					{
						this.state.isFinished
							?	<FinishedQuiz
									results={this.state.results}
									quiz={this.state.quiz}
									onRetry={this.retryHandler}
								/>
							:	<ActiveQuiz
									answers={this.state.quiz[this.state.activeQuestion].answers}
									question={this.state.quiz[this.state.activeQuestion].question}
									onAnswerClick={this.onAnswerClickHandler}
									quizLength={this.state.quiz.length}
									answerNumber={this.state.activeQuestion + 1}
									state={this.state.answerState}
								/>
					}
				</div>
			</div>
		)
	}
}