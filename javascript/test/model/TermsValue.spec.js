/**
 * Cloud Governance Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
    factory(root.expect, root.CloudGovernanceApi);
  }
}(this, function(expect, CloudGovernanceApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudGovernanceApi.TermsValue();
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

  describe('TermsValue', function() {
    it('should create an instance of TermsValue', function() {
      // uncomment below and update the code to test TermsValue
      //var instane = new CloudGovernanceApi.TermsValue();
      //expect(instance).to.be.a(CloudGovernanceApi.TermsValue);
    });

    it('should have the property termStore (base name: "termStore")', function() {
      // uncomment below and update the code to test the property termStore
      //var instane = new CloudGovernanceApi.TermsValue();
      //expect(instance).to.be();
    });

    it('should have the property termGroup (base name: "termGroup")', function() {
      // uncomment below and update the code to test the property termGroup
      //var instane = new CloudGovernanceApi.TermsValue();
      //expect(instance).to.be();
    });

    it('should have the property termSet (base name: "termSet")', function() {
      // uncomment below and update the code to test the property termSet
      //var instane = new CloudGovernanceApi.TermsValue();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new CloudGovernanceApi.TermsValue();
      //expect(instance).to.be();
    });

  });

}));