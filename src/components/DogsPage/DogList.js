import React from 'react'
import { List, Avatar, Spin, Icon, Alert } from 'antd';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const DOGS_QUERY = gql`
	{ dogs {
		id
		name
		gender
		description
		picture
	}}
`

const Dogs = () => {
	const loadingIcon = <Icon type='loading' style={styles.loading} spin />

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
						renderItem={dog => (
							<List.Item key={dog.id} extra={<img width={272} alt='logo' src={dog.picture} />}>
								<List.Item.Meta
									title={dog.name}
									description={dog.gender}
								/>
								{ dog.description }
							</List.Item>
						)}
					/>
				)
			}}
		</Query>
	)
}

const styles = {
	loading: {
		marginTop: '28px',
		fontSize: 46
	}
}

export default Dogs
