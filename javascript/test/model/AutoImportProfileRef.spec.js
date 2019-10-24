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
    instance = new CloudGovernanceApi.AutoImportProfileRef();
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

  describe('AutoImportProfileRef', function() {
    it('should create an instance of AutoImportProfileRef', function() {
      // uncomment below and update the code to test AutoImportProfileRef
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be.a(CloudGovernanceApi.AutoImportProfileRef);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property objectName (base name: "objectName")', function() {
      // uncomment below and update the code to test the property objectName
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property notesToPrimaryContact (base name: "notesToPrimaryContact")', function() {
      // uncomment below and update the code to test the property notesToPrimaryContact
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property defaultSecondaryContact (base name: "defaultSecondaryContact")', function() {
      // uncomment below and update the code to test the property defaultSecondaryContact
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property defaultPolicyId (base name: "defaultPolicyId")', function() {
      // uncomment below and update the code to test the property defaultPolicyId
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property departments (base name: "departments")', function() {
      // uncomment below and update the code to test the property departments
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property policies (base name: "policies")', function() {
      // uncomment below and update the code to test the property policies
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property loadDepartmentFromUps (base name: "loadDepartmentFromUps")', function() {
      // uncomment below and update the code to test the property loadDepartmentFromUps
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property isLastStep (base name: "isLastStep")', function() {
      // uncomment below and update the code to test the property isLastStep
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

    it('should have the property metadatas (base name: "metadatas")', function() {
      // uncomment below and update the code to test the property metadatas
      //var instane = new CloudGovernanceApi.AutoImportProfileRef();
      //expect(instance).to.be();
    });

  });

}));