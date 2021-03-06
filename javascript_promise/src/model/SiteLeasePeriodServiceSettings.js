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
    define(['ApiClient', 'model/ApiDurationType', 'model/AssignBy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiDurationType'), require('./AssignBy'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.SiteLeasePeriodServiceSettings = factory(root.CgClient.ApiClient, root.CgClient.ApiDurationType, root.CgClient.AssignBy);
  }
}(this, function(ApiClient, ApiDurationType, AssignBy) {
  'use strict';



  /**
   * The SiteLeasePeriodServiceSettings model module.
   * @module model/SiteLeasePeriodServiceSettings
   * @version 1.0
   */

  /**
   * Constructs a new <code>SiteLeasePeriodServiceSettings</code>.
   * @alias module:model/SiteLeasePeriodServiceSettings
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SiteLeasePeriodServiceSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteLeasePeriodServiceSettings} obj Optional instance to populate.
   * @return {module:model/SiteLeasePeriodServiceSettings} The populated <code>SiteLeasePeriodServiceSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('leasePeriodAssignBy')) {
        obj['leasePeriodAssignBy'] = AssignBy.constructFromObject(data['leasePeriodAssignBy']);
      }
      if (data.hasOwnProperty('leaseWarningAssignBy')) {
        obj['leaseWarningAssignBy'] = AssignBy.constructFromObject(data['leaseWarningAssignBy']);
      }
      if (data.hasOwnProperty('leaseEnabled')) {
        obj['leaseEnabled'] = ApiClient.convertToType(data['leaseEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('leaseWarningEnabled')) {
        obj['leaseWarningEnabled'] = ApiClient.convertToType(data['leaseWarningEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('approvalProcessId')) {
        obj['approvalProcessId'] = ApiClient.convertToType(data['approvalProcessId'], 'String');
      }
      if (data.hasOwnProperty('leaseInterval')) {
        obj['leaseInterval'] = ApiClient.convertToType(data['leaseInterval'], 'Number');
      }
      if (data.hasOwnProperty('leaseDurationType')) {
        obj['leaseDurationType'] = ApiDurationType.constructFromObject(data['leaseDurationType']);
      }
      if (data.hasOwnProperty('leaseWarningInterval')) {
        obj['leaseWarningInterval'] = ApiClient.convertToType(data['leaseWarningInterval'], 'Number');
      }
      if (data.hasOwnProperty('leaseWarningDurationType')) {
        obj['leaseWarningDurationType'] = ApiDurationType.constructFromObject(data['leaseWarningDurationType']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AssignBy} leasePeriodAssignBy
   */
  exports.prototype['leasePeriodAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} leaseWarningAssignBy
   */
  exports.prototype['leaseWarningAssignBy'] = undefined;
  /**
   * @member {Boolean} leaseEnabled
   */
  exports.prototype['leaseEnabled'] = undefined;
  /**
   * @member {Boolean} leaseWarningEnabled
   */
  exports.prototype['leaseWarningEnabled'] = undefined;
  /**
   * @member {String} approvalProcessId
   */
  exports.prototype['approvalProcessId'] = undefined;
  /**
   * @member {Number} leaseInterval
   */
  exports.prototype['leaseInterval'] = undefined;
  /**
   * @member {module:model/ApiDurationType} leaseDurationType
   */
  exports.prototype['leaseDurationType'] = undefined;
  /**
   * @member {Number} leaseWarningInterval
   */
  exports.prototype['leaseWarningInterval'] = undefined;
  /**
   * @member {module:model/ApiDurationType} leaseWarningDurationType
   */
  exports.prototype['leaseWarningDurationType'] = undefined;



  return exports;
}));


