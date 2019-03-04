const expect = require('expect');
const request = require('supertest');

const {app} = require('../server');
const Movie = require('../models/Movie');
const Review = require('../models/Review');

require('jest')

beforeEach((done) => {
  Movie.remove({}).then(() => done());
});

describe('POST /createnewmovie', () => {
  it('should create a new movie', (done) => {
    let testMovie = {
      title: "Test Movie",
      stars: 3,
      reviewer: "Greg",
      review: "This is only a test"
    };
    request(app)
    .post('/createnewmovie')
    .send(testMovie)
    .expect(200)
    .expect((res) => {
      expect(res.body.testMovie).toBe(testMovie);
    })
    .end((err, res) => {
      if(err) {
        return done(err)
      };
      Review.find({}).then((todos) => {
        expect(todos.length).toBe(1);
        expect(todos[0].title).toBe("Test Movie");
        done();
      })
    })
  })
})