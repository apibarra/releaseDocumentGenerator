var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('releaseDocument', function() {

    describe('POST /releaseDocument', function() {

      it('should return a array with parameters received.', function(done) {

        request(server)
          .post('/releaseDocument')
          .send({
            text: 'repositoryName, releaseName',
          })
          .set('Accept', 'application/x-www-form-urlencoded')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            var body = res.body;
            body.should.be.instanceof(Array).and.have.length(2);
            body[0].should.containEql('repositoryName');
            body[1].should.containEql('releaseName');
            done();
          });
      });
    });

  });

});


