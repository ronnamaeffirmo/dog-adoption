import React from 'react'
import { List } from 'antd';
import gql from 'graphql-tag'

import Dog from './Dog'

const NEW_DOGS_SUBSCRIPTION = gql`
	subscription {
		newDog {
			node {
				id
				name
				gender
				description
				picture
			}
		}
	}
`

export default class DogList extends React.Component {
	constructor(props) {
		super(props)
	}

	_subscribeToNewDogs(subscribeToMore) {
		subscribeToMore({
			document: NEW_DOGS_SUBSCRIPTION,
			updateQuery: (prev, { subscriptionData }) => {
				console.log('=======================')
				console.log('[!] firing subscription')
				console.log('[!] subscription data', subscriptionData.data)
				console.log('[!] new dog', newDog)
				console.log('[!] prev', prev)
				console.log('=======================')

				if (!subscriptionData.data) return prev
				const newDog = subscriptionData.data.newDog.node

				return {
					...prev,
					dogs: [newDog, ...prev.dogs]
				}
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