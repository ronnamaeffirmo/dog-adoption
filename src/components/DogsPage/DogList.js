import React from 'react'
import { List } from 'antd';
import gql from 'graphql-tag'

import Dog from './Dog'

const NEW_DOGS_SUBSCRIPTION = gql`
	subscription {
		newDog {
			mutation
			node {
				id
				name
				gender
				description
				picture
				status
			}
		}
	}
`

export default class DogList extends React.Component {
	_subscribeToNewDogs(subscribeToMore) {
		subscribeToMore({
			document: NEW_DOGS_SUBSCRIPTION,
			updateQuery: (prev, { subscriptionData }) => {
				if (!subscriptionData.data) return prev
				const { mutation, node: newDog } = subscriptionData.data.newDog

				let nextState = {}
				if (mutation === 'UPDATED') { // if `adopt me` is pressed
					// return all dogs except the adopted
					const dogs = prev.dogs.filter(dog => dog.id !== newDog.id)
					nextState = { dogs }
				} else {
					// else return all dogs + new
					nextState = { ...prev, dogs: [newDog, ...prev.dogs] }
				}

				return nextState
			}
		})
	}

	componentDidMount() {
		this._subscribeToNewDogs(this.props.subscribeToMore)
	}

	render() {
		const { dogs } = this.props
		return (
			<List
				itemLayout='vertical'
				size='large'
				pagination={{
					onChange: (page) => console.log(page),
					pageSize: 3,
				}}
				dataSource={dogs}
				renderItem={dog => 
					<Dog 
						id={dog.id}
						picture={dog.picture}
						name={dog.name}
						gender={dog.gender}
						description={dog.description}
					/>
				}
			/>
		)
	}
}