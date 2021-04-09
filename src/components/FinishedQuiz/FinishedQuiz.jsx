import React from 'react'
import classes from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
	const successCount = Object.keys(props.results).reduce((total, key) => {
		if (props.results[key] === 'success') {
			total++
		}

		return total
	}, 0)
	
	return (
		<div className={classes.FinishedQuiz}>
			<ul>
				{props.quiz.map((item, index) => {
					const cls = [
						'fa',
						props.results[item.id] === 'error' ? 'fa-times' : 'fa-check',
						classes[props.results[item.id]]
					]

					return (
						<li key={index}>
							<strong>{index + 1}</strong>.&nbsp;
							{item.question}
							<i className={cls.join(' ')} />
						</li>
					)
					
				})}
				
			</ul>

			<p>Правильно {successCount} из {props.quiz.length}</p>

			<div>
				<Button onClick={props.onRetry} type="primary">Repeat</Button>
				<Button type="success">Go to quizzes</Button>
			</div>
		</div>
	)
}

export default FinishedQuiz
