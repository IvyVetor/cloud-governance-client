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
    instance = new CloudGovernanceApi.HubSiteChangedSettings();
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

  describe('HubSiteChangedSettings', function() {
    it('should create an instance of HubSiteChangedSettings', function() {
      // uncomment below and update the code to test HubSiteChangedSettings
      //var instane = new CloudGovernanceApi.HubSiteChangedSettings();
      //expect(instance).to.be.a(CloudGovernanceApi.HubSiteChangedSettings);
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new CloudGovernanceApi.HubSiteChangedSettings();
      //expect(instance).to.be();
    });

    it('should have the property isModernSite (base name: "isModernSite")', function() {
      // uncomment below and update the code to test the property isModernSite
      //var instane = new CloudGovernanceApi.HubSiteChangedSettings();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new CloudGovernanceApi.HubSiteChangedSettings();
      //expect(instance).to.be();
    });

    it('should have the property associatedHubSiteId (base name: "associatedHubSiteId")', function() {
      // uncomment below and update the code to test the property associatedHubSiteId
      //var instane = new CloudGovernanceApi.HubSiteChangedSettings();
      //expect(instance).to.be();
    });

    it('should have the property associatedHubSiteTitle (base name: "associatedHubSiteTitle")', function() {
      // uncomment below and update the code to test the property associatedHubSiteTitle
      //var instane = new CloudGovernanceApi.HubSiteChangedSettings();
      //expect(instance).to.be();
    });

  });

}));