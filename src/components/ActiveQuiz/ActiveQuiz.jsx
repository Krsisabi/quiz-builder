import React from 'react'
import classes from './ActiveQuiz.module.scss'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
	return (
		<div className={classes.ActiveQuiz}>
			<p className={classes.Question}>
				<span>
					<strong>3.</strong>&nbsp;
					Как дела?
				</span>

				<small>3 из 12</small>
			</p>

			<AnswersList 
				answers={props.answers}
			/>
		</div>
	)
}

export default ActiveQuiz