import React, { Component } from 'react'
import classes from './Drawer.module.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

export default class Drawer extends Component {

	renderLinks(links) {
		return links.map((link, index) => {
			return (
				<li key={index}>
					<NavLink
						to={link.to}
						exact={link.exact}
						activeClassName={classes.active}
						onClick={this.props.onClose}
					>
						{link.label}
					</NavLink>
				</li>
			)
		})
	}

	render() {
		const cls = [classes.Drawer]

		if (!this.props.isOpen) {
			cls.push(classes.close)
		}

		const links = [
			{ to: '/', label: 'List of tests', exact: true }
		]

		if (this.props.isAuthenticated) {
			links.push({ to: '/quiz-creator', label: 'Create new quiz', exact: true })
			links.push({ to: '/logout', label: 'Logout', exact: true })
		} else {
			links.push({ to: '/auth', label: 'Sign up', exact: true })
		}

		return (
			<>
				<nav className={cls.join(' ')}>
					<ul>
						{this.renderLinks(links)}
					</ul>
				</nav>
				{this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
			</>
		)
	}
}