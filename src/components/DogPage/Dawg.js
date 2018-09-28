import React from 'react'
import { Tag, Row, Col, Button } from 'antd'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const Dawg = ({
	id,
	status,
	gender,
	description,
	history,
	picture,
	location,
	contact
}) => {
	const ADOPT_DOG_MUTATION = gql`
		mutation AdoptDogMutation($id: ID!) {
			adoptDog(id: $id) {
				id
			}
		}
	`

	return (
		<Row>
			<Col span={12}>
				<div style={styles.information}>
					<div style={styles.infoLabel}>Gender</div>
					{gender}
				</div>
				<div style={styles.information}>
					<div style={styles.infoLabel}>Description</div>
					{description}
				</div>
				<div style={styles.information}>
					<div style={styles.infoLabel}>history</div>
					{history}
				</div>
				<div style={styles.information}>
					<div style={styles.infoLabel}>Location</div>
					{location}
				</div>
				<div style={styles.information}>
					<div style={styles.infoLabel}>Contact</div>
					{contact}
				</div>
			</Col>
			<Col span={12}>
				<div style={styles.rightGrid}>
					<Tag style={styles.tag} color={status === 'ADOPTED' ? 'magenta' : 'green'}>{status.replace(/_/g, ' ')}</Tag>
					<br />
					<img style={styles.img} width={372} alt='logo' src={picture} />
					<br />
					{ status === 'FOR_ADOPTION' && 
						<Mutation mutation={ADOPT_DOG_MUTATION} variables={{ id }}>
							{ dogMutation =>
								<Button onClick={dogMutation} type='primary'>
									<i style={styles.adoptme} className="fas fa-paw"></i>
									Adopt me!
								</Button>
							}
						</Mutation>
					}
				</div>
			</Col>
		</Row>
	)
}

const styles = {
	rightGrid: {
		textAlign: 'right'
	},
	tag: {
		marginRight: '0px',
	},
	img: {
		marginTop: '12px',
		marginBottom: '12px'
	},
	information: {
		marginBottom: '10px'
	},
	infoLabel: {
		fontSize: '11px',
		color: '#d2d3d6'
	},
	adoptme: {
		marginRight: '8px'
	}
}

export default Dawg