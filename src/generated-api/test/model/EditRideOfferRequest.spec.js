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
    instance = new CarPoolApi.EditRideOfferRequest();
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

  describe('EditRideOfferRequest', function() {
    it('should create an instance of EditRideOfferRequest', function() {
      // uncomment below and update the code to test EditRideOfferRequest
      //var instance = new CarPoolApi.EditRideOfferRequest();
      //expect(instance).to.be.a(CarPoolApi.EditRideOfferRequest);
    });

    it('should have the property rideId (base name: "rideId")', function() {
      // uncomment below and update the code to test the property rideId
      //var instance = new CarPoolApi.EditRideOfferRequest();
      //expect(instance).to.be();
    });

    it('should have the property startLocation (base name: "startLocation")', function() {
      // uncomment below and update the code to test the property startLocation
      //var instance = new CarPoolApi.EditRideOfferRequest();
      //expect(instance).to.be();
    });

    it('should have the property endLocation (base name: "endLocation")', function() {
      // uncomment below and update the code to test the property endLocation
      //var instance = new CarPoolApi.EditRideOfferRequest();
      //expect(instance).to.be();
    });

    it('should have the property departureTime (base name: "departureTime")', function() {
      // uncomment below and update the code to test the property departureTime
      //var instance = new CarPoolApi.EditRideOfferRequest();
      //expect(instance).to.be();
    });

    it('should have the property availableSeats (base name: "availableSeats")', function() {
      // uncomment below and update the code to test the property availableSeats
      //var instance = new CarPoolApi.EditRideOfferRequest();
      //expect(instance).to.be();
    });

    it('should have the property rideStatus (base name: "rideStatus")', function() {
      // uncomment below and update the code to test the property rideStatus
      //var instance = new CarPoolApi.EditRideOfferRequest();
      //expect(instance).to.be();
    });

  });

}));
