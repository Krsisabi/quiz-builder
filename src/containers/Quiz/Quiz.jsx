import React, { Component } from 'react'
import classes, { QuizWrapper } from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {
	state = {
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

		if (question.rightAnswerId === answerId) {

			this.setState({
				answerState: { [answerId]: 'success' }
			})

			const timeout = setTimeout(() => {
				if (this.isQuizFinished()) {
					console.log('Finished')
				} else {
					this.setState({
						activeQuestion: this.state.activeQuestion + 1,
						answerState: null
					})
				}

				clearTimeout(timeout);

			}, 1000);

		} else {

			this.setState({
				answerState: { [answerId]: 'error' },
			})

		}
	}

	isQuizFinished() {
		return this.state.activeQuestion + 1 === this.state.quiz.length
	}

	render() {
		return (
			<div className={classes.Quiz}>
				<div className={QuizWrapper}>
					<h1>Quiz</h1>
					<ActiveQuiz
						answers={this.state.quiz[this.state.activeQuestion].answers}
						question={this.state.quiz[this.state.activeQuestion].question}
						onAnswerClick={this.onAnswerClickHandler}
						quizLength={this.state.quiz.length}
						answerNumber={this.state.activeQuestion + 1}
						state={this.state.answerState}
					/>
				</div>
			</div>
		)
	}
}