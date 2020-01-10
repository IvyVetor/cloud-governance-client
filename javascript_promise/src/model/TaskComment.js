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
    root.CgClient.TaskComment = factory(root.CgClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TaskComment model module.
   * @module model/TaskComment
   * @version 1.0
   */

  /**
   * Constructs a new <code>TaskComment</code>.
   * @alias module:model/TaskComment
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>TaskComment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskComment} obj Optional instance to populate.
   * @return {module:model/TaskComment} The populated <code>TaskComment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assigneeDisplayName')) {
        obj['assigneeDisplayName'] = ApiClient.convertToType(data['assigneeDisplayName'], 'String');
      }
      if (data.hasOwnProperty('commentTime')) {
        obj['commentTime'] = ApiClient.convertToType(data['commentTime'], 'Date');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} assigneeDisplayName
   */
  exports.prototype['assigneeDisplayName'] = undefined;
  /**
   * @member {Date} commentTime
   */
  exports.prototype['commentTime'] = undefined;
  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));

