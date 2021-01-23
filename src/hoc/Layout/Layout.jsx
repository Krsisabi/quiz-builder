import React from 'react'
import classes from './Layout.module.scss'

const Layout = props => {
	return (
		<div className={classes.Layout}>
			<main>
				{props.children}
			</main>
		</div>
	)
}

export default Layout