import React from 'react'
import classes from './AnswersList.module.scss'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => {
	return (
		<ul className={classes.AnswersList}>
			{ props.answers.map((answer, index) => {
				return (
					<AnswerItem
						key={index}
						answer={answer}
						onAnswerClick={props.onAnswerClick}
						state={props.state ? props.state[answer.id] : null}
						id ={answer.id}
					/>
				)
			})}
		</ul>
	)
}

export default AnswersList