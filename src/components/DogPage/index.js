import React from 'react'
import { Spin, Alert, Icon } from 'antd'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Dawg from '././Dawg'
import styles from '../../styles/general'

const DogPage = ({ match }) => {
	const loadingIcon = <Icon type='loading' style={styles.loading} spin />
	const DAWG_QUERY = gql`
		query Dog($id: ID!) {
			dog(id: $id) {
				name
				status
				gender
				description
				history
				picture
				location
				contact
			}
		}
	`

	return (
		<Query query={DAWG_QUERY} variables={{ id: match.params.id }}>
			{({ error, loading, data }) => {
				if (loading) return <Spin indicator={loadingIcon}></Spin>
				if (error) return <Alert type='error' message={error.message} banner />

				const dog = data.dog
				return (
					<div>
						<h1>{dog.name}</h1>
						<Dawg
							id={match.params.id}
							status={dog.status}
							gender={dog.gender}
							description={dog.description}
							history={dog.history}
							picture={dog.picture}
							location={dog.location}
							contact={dog.contact}
						/>
					</div>
				)
			}}
		</Query>
	)
}


export default DogPage
