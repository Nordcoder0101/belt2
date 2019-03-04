const controller = require("../controllers/controller")
  module.exports = (app, path) => {
    app
      .get('/getallmovies', controller.getAllMovies)
      .get('/getmoviebyid/:id', controller.getMovieById)
      .post('/createnewmovie', controller.createMovie)
      .post('/createnewreview/:id', controller.createReview)
      .delete('/deletemovie/:id', controller.deleteMovie)
      .put('/getmovieandupdate/:id', controller.getMovieByIdAndUpdate)
      .get('*', (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });  
}
