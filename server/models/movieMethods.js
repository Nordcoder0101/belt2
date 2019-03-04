const Movie = require('./Movie')
const Review = require('./Review')



module.exports = {
  getAll: () => {
    return Movie.find()
      .then(results => {
        return {
          message: "Success",
          data: results
        }
      })
      .catch(err => {
        return {
          message: 'err',
          data: err
        }
      });
  },

  getMovieById: (id) => {
    return Movie.findById(id)
      .then(movie => {
        return {
          message: "Success",
          data: movie
        }
      })
      .catch(err => {
        return {
          message: "err",
          data: err
        }
      });
  },

  createMovie: (data) => {
    let review = new Review(data)
    let movie = new Movie(data)
    movie.reviews.push(review)
    return movie.save()
      .then(updatedMovie => {
        return {
          message: 'Success',
          data: updatedMovie
        }
      })
      .catch(err => {
        return {
          message: "err",
          data: err
        }
      });
  },

  createReview: (id, data) => {
    let review = new Review(data);
    
    return Movie.findById(id)
      .then(movie => {
        movie.reviews.push(review)
        return movie.save()
          .then(movie => {
            return {
              message: "Success",
              data: movie
            }
          })
          .catch(err => {
            return {
              message: "Err",
              data: err
            };
          });
      })
        .catch(err => {
          return {
            message: "Err",
            data: err
          };
        });
  },


  findByIdAndUpdate: (id, data) => {
    return Movie.findById(id)
      .then(movie => {
        console.log(movie)
        // movie.title = data.title
        // movie.reviewers.push(data.reviewer);
        // movie.likes.push(data.like);
        // movie.descriptions.push(data.descrition);
        return movie.save()
          .then(movie => {
            return {
              message: "Success",
              data: movie
            }
          })
          .catch(err => {
            return {
              message: "err",
              data: err
            }
          });
      });
  },

  findByIdAndDelete: (id) => {
    return Movie.findByIdAndDelete(id)
      .then(data => {
        return { message: "Success" }
      })
      .catch(err => {
        return { message: 'Something went wrong' }
      });

  }
}