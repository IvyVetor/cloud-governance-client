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
    define(['ApiClient', 'model/SPList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SPList'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.ChangeListSettingValidateResult = factory(root.CgClient.ApiClient, root.CgClient.SPList);
  }
}(this, function(ApiClient, SPList) {
  'use strict';



  /**
   * The ChangeListSettingValidateResult model module.
   * @module model/ChangeListSettingValidateResult
   * @version 1.0
   */

  /**
   * Constructs a new <code>ChangeListSettingValidateResult</code>.
   * @alias module:model/ChangeListSettingValidateResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ChangeListSettingValidateResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeListSettingValidateResult} obj Optional instance to populate.
   * @return {module:model/ChangeListSettingValidateResult} The populated <code>ChangeListSettingValidateResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('siteUrl')) {
        obj['siteUrl'] = ApiClient.convertToType(data['siteUrl'], 'String');
      }
      if (data.hasOwnProperty('siteId')) {
        obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
      }
      if (data.hasOwnProperty('webUrl')) {
        obj['webUrl'] = ApiClient.convertToType(data['webUrl'], 'String');
      }
      if (data.hasOwnProperty('webId')) {
        obj['webId'] = ApiClient.convertToType(data['webId'], 'String');
      }
      if (data.hasOwnProperty('lists')) {
        obj['lists'] = ApiClient.convertToType(data['lists'], [SPList]);
      }
      if (data.hasOwnProperty('isValid')) {
        obj['isValid'] = ApiClient.convertToType(data['isValid'], 'Boolean');
      }
      if (data.hasOwnProperty('errorMessage')) {
        obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} siteUrl
   */
  exports.prototype['siteUrl'] = undefined;
  /**
   * @member {String} siteId
   */
  exports.prototype['siteId'] = undefined;
  /**
   * @member {String} webUrl
   */
  exports.prototype['webUrl'] = undefined;
  /**
   * @member {String} webId
   */
  exports.prototype['webId'] = undefined;
  /**
   * @member {Array.<module:model/SPList>} lists
   */
  exports.prototype['lists'] = undefined;
  /**
   * @member {Boolean} isValid
   */
  exports.prototype['isValid'] = undefined;
  /**
   * @member {String} errorMessage
   */
  exports.prototype['errorMessage'] = undefined;



  return exports;
}));

