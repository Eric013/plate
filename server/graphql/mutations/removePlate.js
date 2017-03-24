const {
  GraphQLNonNull,
  GraphQLID
} = require("graphql");

const PlateType = require("../types/Plate");

module.exports = {
  name: "removePlate",
  type: PlateType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve({ db }, { id }) {
    return db.collection("plates").deleteOne({ _id: id });
  }
};
