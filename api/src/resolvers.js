/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

const { models } = require("./db");

module.exports = {
  Query: {
    pets(iv, { input }, { models }) {
      return models.Pet.findMany(input);
    },
    petOne(iv, { input }, { models }) {
      return models.Pet.findOne(input);
    },
    // Mutation: {},
  },
  Pet: {
    owner(pet, _, { models }) {
      return models.User.findOne();
    },
    img(pet) {
      return pet.type === "DOG"
        ? "https://placedog.net/300/300"
        : "http://placekitten.com/300/300";
    },
  },
  User: {
    pets(user, _, { models }) {
      return models.Pet.findMany();
    },
  },
  Mutation: {
    createPet(_, { input }, { models }) {
      const pet = models.Pet.create(input);
      return pet;
    },
  },
};
