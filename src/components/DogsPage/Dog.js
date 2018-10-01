import React from 'react'
import { withRouter } from 'react-router-dom'
import { List, Button } from 'antd'

import '../../styles/dog.css'

const Dog = ({ id, picture, name, gender, description, history }) => {
	return (
		<List.Item key={id} onClick={() => history.push(`/${id}`)} extra={<img width={272} alt='logo' src={picture} />}>
			<List.Item.Meta
				title={name}
				description={gender}
			/>
			<div className='list-description'>
				<div className='list-desc-label'>Description</div>
				<div>{description}</div>
			</div>
			<Button>View doge</Button>
		</List.Item>
	)
}

export default withRouter(Dog)
