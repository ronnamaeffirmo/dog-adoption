async function adoptDog(root, args, context, info) {
	const dogAdopted = await context.db.exists.Dog({
		id: args.id,
		status: 'ADOPTED'
	})

	if (dogAdopted) {
		throw new Error(`Dog already adopted! ID: ${args.id}`)
	}

	const dog =  await context.db.mutation.updateDog({
		where: { id: args.id },
		data: { status: 'ADOPTED' }
	})

	return dog
}

module.exports = {
	adoptDog
}