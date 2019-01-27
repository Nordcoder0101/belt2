const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = Schema({
  reviewer: { type: String, required: true, minlength: 3 },
  stars: { type: Number, required: true },
  review: { type: String, required: true, minlength: 3 }

})

module.exports = mongoose.model('Review', reviewSchema)