var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('testServer', function() {

    describe('GET /testServer', function() {

      it('should return "The server is running" string', function(done) {

        request(server)
          .get('/testServer')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('The server is running;');

            done();
          });
      });


    });

  });

});
