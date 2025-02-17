/*
 * GymApp
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GymApp);
  }
}(this, function(expect, GymApp) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GymApp.GymsApi();
  });

  describe('(package)', function() {
    describe('GymsApi', function() {
      describe('apiGymsGet', function() {
        it('should call apiGymsGet successfully', function(done) {
          // TODO: uncomment apiGymsGet call and complete the assertions
          /*

          instance.apiGymsGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(GymApp.Gym);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiGymsIdDelete', function() {
        it('should call apiGymsIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for apiGymsIdDelete call
          /*

          instance.apiGymsIdDelete(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiGymsIdGet', function() {
        it('should call apiGymsIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiGymsIdGet call and complete the assertions
          /*

          instance.apiGymsIdGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(GymApp.Gym);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiGymsIdPut', function() {
        it('should call apiGymsIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for apiGymsIdPut call
          /*
          var opts = {};

          instance.apiGymsIdPut(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiGymsPost', function() {
        it('should call apiGymsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiGymsPost call and complete the assertions
          /*
          var opts = {};

          instance.apiGymsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(GymApp.Gym);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
