import React from 'react'
import { List, Spin, Icon, Alert } from 'antd';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Dog from './Dog'
import styles from '../../styles/general'

const Dogs = () => {
	const loadingIcon = <Icon type='loading' style={styles.loading} spin />
	const DOGS_QUERY = gql`
		{ dogs {
			id
			name
			gender
			description
			picture
		}}
	`

	return (
		<Query query={DOGS_QUERY}>
			{({ loading, error, data }) => {
				if (loading) return <Spin indicator={loadingIcon}></Spin>
				if (error) return <Alert type='error' message={error.message} banner />

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
}

export default Dogs
