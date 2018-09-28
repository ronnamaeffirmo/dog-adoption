async function adoptDog(root, args, context, info) {
	return context.db.mutation.updateDog({
		where: { id: args.id },
		data: { status: 'ADOPTED' }
	})
}

module.exports = {
	adoptDog
}