async function dogs(root, args, context, info) {
	const dogs = await context.db.query.dogs({}, info)
	return dogs
}

async function dog(root, args, context, info) {
	const dogs = await context.db.query.dogs({
		where: { id: args.id }
	}, info)

	return dogs[0]
}

module.exports = {
	dogs,
	dog
}
