import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DogsPage from './DogsPage'
import DogPage from './DogPage'

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={DogsPage} />
			<Route exact path='/:id' component={DogPage} />
		</Switch>
	)
}

export default Routes