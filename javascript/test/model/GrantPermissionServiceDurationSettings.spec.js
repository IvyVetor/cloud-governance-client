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
    instance = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
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

  describe('GrantPermissionServiceDurationSettings', function() {
    it('should create an instance of GrantPermissionServiceDurationSettings', function() {
      // uncomment below and update the code to test GrantPermissionServiceDurationSettings
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be.a(CloudGovernanceApi.GrantPermissionServiceDurationSettings);
    });

    it('should have the property assignBy (base name: "assignBy")', function() {
      // uncomment below and update the code to test the property assignBy
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

    it('should have the property isGrantTemporaryPermission (base name: "isGrantTemporaryPermission")', function() {
      // uncomment below and update the code to test the property isGrantTemporaryPermission
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

    it('should have the property defaultDurationInterval (base name: "defaultDurationInterval")', function() {
      // uncomment below and update the code to test the property defaultDurationInterval
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

    it('should have the property defaultDurationType (base name: "defaultDurationType")', function() {
      // uncomment below and update the code to test the property defaultDurationType
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

    it('should have the property isEnableMaxDuration (base name: "isEnableMaxDuration")', function() {
      // uncomment below and update the code to test the property isEnableMaxDuration
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

    it('should have the property maxDuration (base name: "maxDuration")', function() {
      // uncomment below and update the code to test the property maxDuration
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

    it('should have the property maxDurationType (base name: "maxDurationType")', function() {
      // uncomment below and update the code to test the property maxDurationType
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

    it('should have the property isEnableExpirationNotify (base name: "isEnableExpirationNotify")', function() {
      // uncomment below and update the code to test the property isEnableExpirationNotify
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

    it('should have the property expirationNotifyDurationInterval (base name: "expirationNotifyDurationInterval")', function() {
      // uncomment below and update the code to test the property expirationNotifyDurationInterval
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

    it('should have the property expirationNotifyDurationType (base name: "expirationNotifyDurationType")', function() {
      // uncomment below and update the code to test the property expirationNotifyDurationType
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

    it('should have the property isOnlyUseDefaultDuration (base name: "isOnlyUseDefaultDuration")', function() {
      // uncomment below and update the code to test the property isOnlyUseDefaultDuration
      //var instane = new CloudGovernanceApi.GrantPermissionServiceDurationSettings();
      //expect(instance).to.be();
    });

  });

}));