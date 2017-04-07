const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID
} = require('graphql');

const ObjectId = require('mongodb').ObjectId;

const PlateType = require('../types/plate');

// Change completed status of a plate
module.exports = {
  name: 'completePlate',
  type: PlateType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    completed: {
      type: new GraphQLNonNull(GraphQLBoolean)
    }
  },
  resolve({ db }, { id, completed }) {
    return db
      .collection('plates')
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { completed: completed } }
      );
  }
};
