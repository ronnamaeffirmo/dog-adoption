async function adoptDog(root, args, context, info) {
	const dog =  await context.db.mutation.updateDog({
		where: { id: args.id },
		data: { status: 'ADOPTED' }
	})

	return dog
}

module.exports = {
	adoptDog
}