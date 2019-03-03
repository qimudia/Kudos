const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
var kudosSchema = new Schema({
 senderUserId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  receiverUserId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const kudosPost = mongoose.model("kudosPost", kudosSchema);

module.exports = kudosPost;


