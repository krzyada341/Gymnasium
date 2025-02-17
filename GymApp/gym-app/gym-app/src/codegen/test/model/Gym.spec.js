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

  describe('(package)', function() {
    describe('Gym', function() {
      beforeEach(function() {
        instance = new GymApp.Gym();
      });

      it('should create an instance of Gym', function() {
        // TODO: update the code to test Gym
        expect(instance).to.be.a(GymApp.Gym);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property ownerId (base name: "ownerId")', function() {
        // TODO: update the code to test the property ownerId
        expect(instance).to.have.property('ownerId');
        // expect(instance.ownerId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property sectors (base name: "sectors")', function() {
        // TODO: update the code to test the property sectors
        expect(instance).to.have.property('sectors');
        // expect(instance.sectors).to.be(expectedValueLiteral);
      });

      it('should have the property receptionists (base name: "receptionists")', function() {
        // TODO: update the code to test the property receptionists
        expect(instance).to.have.property('receptionists');
        // expect(instance.receptionists).to.be(expectedValueLiteral);
      });

    });
  });

}));
