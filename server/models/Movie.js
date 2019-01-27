const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = Schema({
  reviewer: {type: String, required: true, minlength: 3},
  stars: {type: Number, required: true},
  review: {type: String, required: true, minlength: 3}

})
const movieSchema = Schema({
  title: { type: String, required: true, minlength: 3},
  reviews: [reviewSchema]
})

module.exports = mongoose.model('Movie', movieSchema);