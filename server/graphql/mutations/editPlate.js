const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require('graphql');

const ObjectId = require('mongodb').ObjectId;

const PlateType = require('../types/Plate');

// Edit a plates details
module.exports = {
  name: 'EditPlate',
  type: PlateType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve({ db }, { id, name, description }) {
    return db
      .collection('plates')
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { name: name, description: description } }
      );
  }
};
