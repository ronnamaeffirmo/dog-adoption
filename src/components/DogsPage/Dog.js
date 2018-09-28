import React from 'react'
import { Link } from 'react-router-dom'
import { List, Button } from 'antd'

import '../../styles/dog.css'

const Dog = ({ id, picture, name, gender, description }) => {
	return (
		<List.Item key={id} extra={<img width={272} alt='logo' src={picture} />}>
			<List.Item.Meta
				title={name}
				description={gender}
			/>
			<div className='list-description'>
				<div>{description}</div>
				<div className='list-desc-label'>Description</div>
			</div>
			<Button>View doge</Button>
		</List.Item>
	)
}

export default Dog
