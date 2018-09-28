function newDogSubscribe (parent, args, context, info) {
  return context.db.subscription.dog(
    { where: { mutation_in: ['CREATED', 'UPDATED'] } },
    info,
  )
}

const newDog = {
  subscribe: newDogSubscribe
}

module.exports = {
  newDog,
}