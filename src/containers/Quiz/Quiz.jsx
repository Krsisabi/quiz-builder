import React, { Component } from 'react'
import classes, { QuizWrapper } from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {
	state = {
		activeQuestion: 0,
		quiz: [
			{
				id: 1,
				question: 'Сколько здесь вопросов?',
				rightAnswerId: 1,
				answers: [
					{ id: 1, text: '1' },
					{ id: 2, text: 'Два' },
					{ id: 3, text: 'Тритий' },
					{ id: 4, text: 'Что' }
				]
			},
			{
				id: 2,
				question: 'Какой это вопрос?',
				rightAnswerId: 2,
				answers: [
					{ id: 1, text: 'Первый' },
					{ id: 2, text: '2й' },
					{ id: 3, text: 'Тритий' },
					{ id: 4, text: 'Где?' }
				]
			}
		]
	}

	onAnswerClickHandler = answerId => {
		console.log('answerId: ', answerId);

		this.setState({
			activeQuestion: this.state.activeQuestion + 1
		})
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
					/>
				</div>
			</div>
		)
	}
}