const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  nameMember: {
    type: String,
    required: true
  },
  addressMember: {
    type: String,
    required: true
  },
  phoneMember: {
    type: Number,
    required: true
  },
  noIdMember: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Member', memberSchema)