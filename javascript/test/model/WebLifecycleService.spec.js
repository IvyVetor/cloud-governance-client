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
    instance = new CloudGovernanceApi.WebLifecycleService();
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

  describe('WebLifecycleService', function() {
    it('should create an instance of WebLifecycleService', function() {
      // uncomment below and update the code to test WebLifecycleService
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be.a(CloudGovernanceApi.WebLifecycleService);
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property archiveContentProfile (base name: "archiveContentProfile")', function() {
      // uncomment below and update the code to test the property archiveContentProfile
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property departmentAssignBy (base name: "departmentAssignBy")', function() {
      // uncomment below and update the code to test the property departmentAssignBy
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property metadatas (base name: "metadatas")', function() {
      // uncomment below and update the code to test the property metadatas
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property hideRequestSummary (base name: "hideRequestSummary")', function() {
      // uncomment below and update the code to test the property hideRequestSummary
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property department (base name: "department")', function() {
      // uncomment below and update the code to test the property department
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property loadDepartmentFromUps (base name: "loadDepartmentFromUps")', function() {
      // uncomment below and update the code to test the property loadDepartmentFromUps
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property departments (base name: "departments")', function() {
      // uncomment below and update the code to test the property departments
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property serviceContact (base name: "serviceContact")', function() {
      // uncomment below and update the code to test the property serviceContact
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property serviceAdminContact (base name: "serviceAdminContact")', function() {
      // uncomment below and update the code to test the property serviceAdminContact
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property approversContainManagerRole (base name: "approversContainManagerRole")', function() {
      // uncomment below and update the code to test the property approversContainManagerRole
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property showServiceInCatalog (base name: "showServiceInCatalog")', function() {
      // uncomment below and update the code to test the property showServiceInCatalog
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property customActivity (base name: "customActivity")', function() {
      // uncomment below and update the code to test the property customActivity
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property approvalProcessId (base name: "approvalProcessId")', function() {
      // uncomment below and update the code to test the property approvalProcessId
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property languageId (base name: "languageId")', function() {
      // uncomment below and update the code to test the property languageId
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "categoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new CloudGovernanceApi.WebLifecycleService();
      //expect(instance).to.be();
    });

  });

}));