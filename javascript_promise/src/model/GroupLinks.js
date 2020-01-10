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
    root.CgClient.GroupLinks = factory(root.CgClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GroupLinks model module.
   * @module model/GroupLinks
   * @version 1.0
   */

  /**
   * Constructs a new <code>GroupLinks</code>.
   * @alias module:model/GroupLinks
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GroupLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupLinks} obj Optional instance to populate.
   * @return {module:model/GroupLinks} The populated <code>GroupLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('groupSiteLink')) {
        obj['groupSiteLink'] = ApiClient.convertToType(data['groupSiteLink'], 'String');
      }
      if (data.hasOwnProperty('groupPlannerLink')) {
        obj['groupPlannerLink'] = ApiClient.convertToType(data['groupPlannerLink'], 'String');
      }
      if (data.hasOwnProperty('groupFilesLink')) {
        obj['groupFilesLink'] = ApiClient.convertToType(data['groupFilesLink'], 'String');
      }
      if (data.hasOwnProperty('groupConversationsLink')) {
        obj['groupConversationsLink'] = ApiClient.convertToType(data['groupConversationsLink'], 'String');
      }
      if (data.hasOwnProperty('groupNotebookLink')) {
        obj['groupNotebookLink'] = ApiClient.convertToType(data['groupNotebookLink'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} groupSiteLink
   */
  exports.prototype['groupSiteLink'] = undefined;
  /**
   * @member {String} groupPlannerLink
   */
  exports.prototype['groupPlannerLink'] = undefined;
  /**
   * @member {String} groupFilesLink
   */
  exports.prototype['groupFilesLink'] = undefined;
  /**
   * @member {String} groupConversationsLink
   */
  exports.prototype['groupConversationsLink'] = undefined;
  /**
   * @member {String} groupNotebookLink
   */
  exports.prototype['groupNotebookLink'] = undefined;



  return exports;
}));

