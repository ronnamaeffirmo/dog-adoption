import React from 'react'
import { List, Spin, Icon, Alert } from 'antd';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Dog from './Dog'
import styles from '../../styles/general'

const loadingIcon = <Icon type='loading' style={styles.loading} spin />
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
const DOGS_QUERY = gql`
	{ dogs(where: {
		status: FOR_ADOPTION
	}) {
		id
		name
		gender
		description
		picture
	}}
`

const Dogs = () => (
	<Query query={DOGS_QUERY}>
		{({ loading, error, data, subscribeToMore }) => {
			if (loading) return <Spin indicator={loadingIcon}></Spin>
			if (error) return <Alert type='error' message={error.message} banner />

			_subscribeToNewDogs(subscribeToMore)

			const { dogs } = data
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
		}}
	</Query>
)

const _subscribeToNewDogs = subscribeToMore => {
	subscribeToMore({
		document: NEW_DOGS_SUBSCRIPTION,
		updateQuery: (prev, { subscriptionData }) => {
			if (!subscriptionData.data) return prev

			const newDog = subscriptionData.data.newDog.node
			return {
				...prev,
				dogs: [newDog, ...prev.dogs],
				__typename: prev.__typename
			}
		}
	})
}

export default Dogs
