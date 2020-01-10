/**
 * Cloud Governance Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AssignBy', 'model/GeoLocationBase', 'model/MultiGeoControlMode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssignBy'), require('./GeoLocationBase'), require('./MultiGeoControlMode'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.MultiGeoSetting = factory(root.CgClient.ApiClient, root.CgClient.AssignBy, root.CgClient.GeoLocationBase, root.CgClient.MultiGeoControlMode);
  }
}(this, function(ApiClient, AssignBy, GeoLocationBase, MultiGeoControlMode) {
  'use strict';



  /**
   * The MultiGeoSetting model module.
   * @module model/MultiGeoSetting
   * @version 1.0
   */

  /**
   * Constructs a new <code>MultiGeoSetting</code>.
   * @alias module:model/MultiGeoSetting
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MultiGeoSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MultiGeoSetting} obj Optional instance to populate.
   * @return {module:model/MultiGeoSetting} The populated <code>MultiGeoSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('isEnabled')) {
        obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('controlMode')) {
        obj['controlMode'] = MultiGeoControlMode.constructFromObject(data['controlMode']);
      }
      if (data.hasOwnProperty('defaultLocation')) {
        obj['defaultLocation'] = GeoLocationBase.constructFromObject(data['defaultLocation']);
      }
      if (data.hasOwnProperty('selectedLocations')) {
        obj['selectedLocations'] = ApiClient.convertToType(data['selectedLocations'], [GeoLocationBase]);
      }
      if (data.hasOwnProperty('locationAssignBy')) {
        obj['locationAssignBy'] = AssignBy.constructFromObject(data['locationAssignBy']);
      }
      if (data.hasOwnProperty('userRoleForLocation')) {
        obj['userRoleForLocation'] = ApiClient.convertToType(data['userRoleForLocation'], 'String');
      }
      if (data.hasOwnProperty('allLocations')) {
        obj['allLocations'] = ApiClient.convertToType(data['allLocations'], [GeoLocationBase]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} isEnabled
   */
  exports.prototype['isEnabled'] = undefined;
  /**
   * @member {module:model/MultiGeoControlMode} controlMode
   */
  exports.prototype['controlMode'] = undefined;
  /**
   * @member {module:model/GeoLocationBase} defaultLocation
   */
  exports.prototype['defaultLocation'] = undefined;
  /**
   * @member {Array.<module:model/GeoLocationBase>} selectedLocations
   */
  exports.prototype['selectedLocations'] = undefined;
  /**
   * @member {module:model/AssignBy} locationAssignBy
   */
  exports.prototype['locationAssignBy'] = undefined;
  /**
   * @member {String} userRoleForLocation
   */
  exports.prototype['userRoleForLocation'] = undefined;
  /**
   * @member {Array.<module:model/GeoLocationBase>} allLocations
   */
  exports.prototype['allLocations'] = undefined;



  return exports;
}));

