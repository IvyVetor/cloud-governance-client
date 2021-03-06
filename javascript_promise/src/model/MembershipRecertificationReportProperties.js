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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.MembershipRecertificationReportProperties = factory(root.CgClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MembershipRecertificationReportProperties model module.
   * @module model/MembershipRecertificationReportProperties
   * @version 1.0
   */

  /**
   * Constructs a new <code>MembershipRecertificationReportProperties</code>.
   * @alias module:model/MembershipRecertificationReportProperties
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MembershipRecertificationReportProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MembershipRecertificationReportProperties} obj Optional instance to populate.
   * @return {module:model/MembershipRecertificationReportProperties} The populated <code>MembershipRecertificationReportProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('o365TenantId')) {
        obj['o365TenantId'] = ApiClient.convertToType(data['o365TenantId'], 'String');
      }
      if (data.hasOwnProperty('isDynamicMembership')) {
        obj['isDynamicMembership'] = ApiClient.convertToType(data['isDynamicMembership'], 'Boolean');
      }
      if (data.hasOwnProperty('enableRecertifyOwners')) {
        obj['enableRecertifyOwners'] = ApiClient.convertToType(data['enableRecertifyOwners'], 'Boolean');
      }
      if (data.hasOwnProperty('enableRecertifyMembers')) {
        obj['enableRecertifyMembers'] = ApiClient.convertToType(data['enableRecertifyMembers'], 'Boolean');
      }
      if (data.hasOwnProperty('objectId')) {
        obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
      }
      if (data.hasOwnProperty('objectName')) {
        obj['objectName'] = ApiClient.convertToType(data['objectName'], 'String');
      }
      if (data.hasOwnProperty('isAllowedReassign')) {
        obj['isAllowedReassign'] = ApiClient.convertToType(data['isAllowedReassign'], 'Boolean');
      }
      if (data.hasOwnProperty('reportGeneratedTime')) {
        obj['reportGeneratedTime'] = ApiClient.convertToType(data['reportGeneratedTime'], 'Date');
      }
      if (data.hasOwnProperty('requestSummary')) {
        obj['requestSummary'] = ApiClient.convertToType(data['requestSummary'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} o365TenantId
   */
  exports.prototype['o365TenantId'] = undefined;
  /**
   * @member {Boolean} isDynamicMembership
   */
  exports.prototype['isDynamicMembership'] = undefined;
  /**
   * @member {Boolean} enableRecertifyOwners
   */
  exports.prototype['enableRecertifyOwners'] = undefined;
  /**
   * @member {Boolean} enableRecertifyMembers
   */
  exports.prototype['enableRecertifyMembers'] = undefined;
  /**
   * @member {String} objectId
   */
  exports.prototype['objectId'] = undefined;
  /**
   * @member {String} objectName
   */
  exports.prototype['objectName'] = undefined;
  /**
   * @member {Boolean} isAllowedReassign
   */
  exports.prototype['isAllowedReassign'] = undefined;
  /**
   * @member {Date} reportGeneratedTime
   */
  exports.prototype['reportGeneratedTime'] = undefined;
  /**
   * @member {String} requestSummary
   */
  exports.prototype['requestSummary'] = undefined;



  return exports;
}));


