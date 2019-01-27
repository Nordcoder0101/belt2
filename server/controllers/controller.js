const MovieMethods = require('../models/movieMethods')

module.exports = {

    getAllMovies: async (req, res) => {
      let result = await MovieMethods.getAll();
      res.json(result);
    },

    getMovieById: async (req, res) => {

      let result = await MovieMethods.getMovieById(req.params.id);
      res.json(result);
    },

    createReview: async (req, res) => {
      
      let result = await MovieMethods.createReview(req.params.id, req.body);
      res.json(result);
    },

    createMovie: async (req, res) => {
      let result = await MovieMethods.createMovie(req.body);
      res.json(result);
    },

    getMovieByIdAndUpdate: async (req, res) => {
      let result = await MovieMethods.findByIdAndUpdate(req.params.id, req.body);
      res.json(result);
    },

    deleteMovie: async (req, res) => {
      let result = await MovieMethods.findByIdAndDelete(req.params.id);
      res.json(result);
    }
  }

