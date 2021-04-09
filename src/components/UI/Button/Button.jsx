import React from 'react'
import classes from './Button.module.scss'

const Button = props => {
	const cls = [
		classes.Button,
		classes[props.type]
	]

	const createRipple = event => {
		const button = event.currentTarget;

		const circle = document.createElement("span");
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
		circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
		circle.classList.add(classes.ripple);

		button.appendChild(circle);
		const timeout = setTimeout(() => {
			const ripple = button.getElementsByClassName(classes.ripple)[0]
			ripple.remove()
			clearTimeout(timeout)
		}, 1000);
	}

	return (
		<button
			onClick={
				(e) => {
					createRipple(e)
					if (props.onClick) props.onClick(e)
				}
			}
			className={cls.join(' ')}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}

export default Button