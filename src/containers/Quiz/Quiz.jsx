import React, { Component } from 'react'
import classes from './Quiz.module.scss'

export default class Quiz extends Component {
	state = {
		quiz: []
	}

	render() {
		return (
			<div className={classes.Quiz}>
				<h1>Quiz</h1>
			</div>
		)
	}
}