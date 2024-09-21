import React from 'react'
import { decreaseCount, increaseCount } from '../../store/actions'
import { connect } from 'react-redux'

const Counter = ({count, increaseCount, decreaseCount}) => {
	return (
		<div>
			<h1>{count}</h1>
			<br />
			<button onClick={increaseCount}>+</button>
			<button onClick={decreaseCount}>-</button>
		</div>
	)
}

const mapStateToProps = state => ({
	count: state.count
})

const mapDispatchToProps = dispatch => ({
	increaseCount: () => dispatch(increaseCount()),
	decreaseCount: () => dispatch(decreaseCount())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
