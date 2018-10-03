import React from 'react'
import { Spin, Icon, Alert } from 'antd';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import styles from '../../styles/general'
import DogList from './DogList'

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

const DogsPage = () => {
	return (
		<div>
			<h1>List of Doges</h1>
			<Query query={DOGS_QUERY}>
				{({ loading, error, data, subscribeToMore }) => {
					if (loading) return <Spin indicator={<Icon type='loading' style={styles.loading} spin />}></Spin>
					if (error) return <Alert type='error' message={error.message} banner />

					const { dogs } = data
					return (
						<DogList subscribeToMore={subscribeToMore} dogs={dogs} />
					)
				}}
			</Query>
		</div>
	)
}

export default DogsPage
