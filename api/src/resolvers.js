/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, __, ctx) {
      return ctx.models.Pet.findMany()
      // return [{id: 1, name: 'moose'}, {id: 2, name: 'garfield'}]
    }
  },
  // Mutation: {

  // },
  Pet: {
    // img(pet) {
    //   return pet.type === 'DOG'
    //     ? 'https://placedog.net/300/300'
    //     : 'http://placekitten.com/300/300'
    // }
  },
  // User: {

  // }
}


// The demo ():s -first argument is the toplevel/root level resolver, nothing is resolving before this resolver
// second argument is going to be called argument, (pagination for ex)
// third = the context object (shared context amongst all of your resolvers) --> see server.js
// the underscores _ here are just placeholders


// Query: {
//   demo(_, __, {models}) {
//     models.Pet.findMany({});
//   }
// },



