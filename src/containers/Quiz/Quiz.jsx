import React, { Component } from 'react'
import classes, {QuizWrapper} from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {
	state = {
		quiz: [
			{
				answers: [
					{ text: 'Вопрос 1' },
					{ text: 'Вопрос 2' },
					{ text: 'Вопрос 3' },
					{ text: 'Вопрос 4' }
				]
			}
		]
	}

	render() {
		return (
			<div className={classes.Quiz}>
				<div className={QuizWrapper}>
					<h1>Quiz</h1>
					<ActiveQuiz 
						answers={this.state.quiz[0].answers}
					/>
				</div>
			</div>
		)
	}
}