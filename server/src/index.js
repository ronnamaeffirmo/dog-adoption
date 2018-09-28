const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

// resolvers
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')

const resolvers = {
	Query,
	Mutation,
	Subscription
}

const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers,
	context: req => ({
		...req,
		db: new Prisma({
			typeDefs: 'src/generated/prisma.graphql',
			endpoint: 'https://us1.prisma.sh/ronna-mae-firmo-1aec2b/dog-adoption/dev',
			secret: 'th3f0rg0t3ns3cr3t',
			debug: true	
		})
	})
})

server.start(() =>
	console.log('Server is running on http://localhost:4000')
)