const { Schema, model} = require('mongoose');
const Reaction =require('./reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required:[true,"Enter your Thought"],
      maxlength:280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reaction:[Reaction]
  },
  {
    toJSON: {
        virtual:true,
      getters: true,
    },
    id: false,
  }
);
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reaction.length;
  });
const Thought= model('thought', thoughtSchema);
module.exports = Thought;
