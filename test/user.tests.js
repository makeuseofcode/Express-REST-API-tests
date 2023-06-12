const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); 


chai.use(chaiHttp);
const expect = chai.expect;

describe('User API', () => {
  describe('POST /api/register', () => {
    it('should handle user registration', (done) => {
      chai.request(app)
        .post('/api/register')
        .send({ username: 'testUser', password: 'testpassword' })
        .end((err, res) => {
          if (err) {
            expect(res).to.have.status(500);
            expect(res.body).to.have.property('message').that.is.equal('An error occurred!!');
          } else {
            expect(res).to.have.status(201);
            expect(res.body).to.have.property('message').equal('User registered successfully');
          }
          done();
        });
    });
  });

  describe('GET /api/users', () => {
    it('should fetch all user data', (done) => {
      chai.request(app)
        .get('/api/users')
        .end((err, res) => {
          if (err) {
            expect(res).to.have.status(500);
            expect(res.body).to.have.property('message').that.is.equal('An error occurred while fetching user data');
          } else {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
          }
          done();
        });
    });
  });
});
