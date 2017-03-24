const {
  GraphQLNonNull,
  GraphQLString
} = require("graphql");

const PlateType = require("../types/Plate");

module.exports = {
  name: "addPlate",
  description: "Add new plate",
  type: PlateType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    thumbnail: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve({ db }, { name, description, thumbnail }) {
    const data = {
      name,
      description,
      thumbnail,
      completed: false
    };

    return db.collection("plates").insert(data);
  }
};
