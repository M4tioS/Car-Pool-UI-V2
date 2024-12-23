/**
 * CarPool API
 * API documentation for CarPool application
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CarPoolApi);
  }
}(this, function(expect, CarPoolApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CarPoolApi.RideOfferResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RideOfferResponse', function() {
    it('should create an instance of RideOfferResponse', function() {
      // uncomment below and update the code to test RideOfferResponse
      //var instance = new CarPoolApi.RideOfferResponse();
      //expect(instance).to.be.a(CarPoolApi.RideOfferResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CarPoolApi.RideOfferResponse();
      //expect(instance).to.be();
    });

    it('should have the property startLocation (base name: "startLocation")', function() {
      // uncomment below and update the code to test the property startLocation
      //var instance = new CarPoolApi.RideOfferResponse();
      //expect(instance).to.be();
    });

    it('should have the property endLocation (base name: "endLocation")', function() {
      // uncomment below and update the code to test the property endLocation
      //var instance = new CarPoolApi.RideOfferResponse();
      //expect(instance).to.be();
    });

    it('should have the property availableSeats (base name: "availableSeats")', function() {
      // uncomment below and update the code to test the property availableSeats
      //var instance = new CarPoolApi.RideOfferResponse();
      //expect(instance).to.be();
    });

    it('should have the property departureTime (base name: "departureTime")', function() {
      // uncomment below and update the code to test the property departureTime
      //var instance = new CarPoolApi.RideOfferResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CarPoolApi.RideOfferResponse();
      //expect(instance).to.be();
    });

    it('should have the property creatorEmail (base name: "creatorEmail")', function() {
      // uncomment below and update the code to test the property creatorEmail
      //var instance = new CarPoolApi.RideOfferResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new CarPoolApi.RideOfferResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new CarPoolApi.RideOfferResponse();
      //expect(instance).to.be();
    });

  });

}));
