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
    define(['ApiClient', 'model/ManagePermissionGrantSetting', 'model/PermissionLevel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ManagePermissionGrantSetting'), require('./PermissionLevel'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.ManagePermissionOption = factory(root.CgClient.ApiClient, root.CgClient.ManagePermissionGrantSetting, root.CgClient.PermissionLevel);
  }
}(this, function(ApiClient, ManagePermissionGrantSetting, PermissionLevel) {
  'use strict';



  /**
   * The ManagePermissionOption model module.
   * @module model/ManagePermissionOption
   * @version 1.0
   */

  /**
   * Constructs a new <code>ManagePermissionOption</code>.
   * @alias module:model/ManagePermissionOption
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ManagePermissionOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManagePermissionOption} obj Optional instance to populate.
   * @return {module:model/ManagePermissionOption} The populated <code>ManagePermissionOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('grantPermissionSetting')) {
        obj['grantPermissionSetting'] = ManagePermissionGrantSetting.constructFromObject(data['grantPermissionSetting']);
      }
      if (data.hasOwnProperty('isEnableEditPermission')) {
        obj['isEnableEditPermission'] = ApiClient.convertToType(data['isEnableEditPermission'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnableRemovePermission')) {
        obj['isEnableRemovePermission'] = ApiClient.convertToType(data['isEnableRemovePermission'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnableStopInheritPermission')) {
        obj['isEnableStopInheritPermission'] = ApiClient.convertToType(data['isEnableStopInheritPermission'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnableDeleteUniquePermission')) {
        obj['isEnableDeleteUniquePermission'] = ApiClient.convertToType(data['isEnableDeleteUniquePermission'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnableExcludePermissionLevel')) {
        obj['isEnableExcludePermissionLevel'] = ApiClient.convertToType(data['isEnableExcludePermissionLevel'], 'Boolean');
      }
      if (data.hasOwnProperty('isHideExcludePermissionItem')) {
        obj['isHideExcludePermissionItem'] = ApiClient.convertToType(data['isHideExcludePermissionItem'], 'Boolean');
      }
      if (data.hasOwnProperty('excludedPermissionLevles')) {
        obj['excludedPermissionLevles'] = ApiClient.convertToType(data['excludedPermissionLevles'], [PermissionLevel]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ManagePermissionGrantSetting} grantPermissionSetting
   */
  exports.prototype['grantPermissionSetting'] = undefined;
  /**
   * @member {Boolean} isEnableEditPermission
   */
  exports.prototype['isEnableEditPermission'] = undefined;
  /**
   * @member {Boolean} isEnableRemovePermission
   */
  exports.prototype['isEnableRemovePermission'] = undefined;
  /**
   * @member {Boolean} isEnableStopInheritPermission
   */
  exports.prototype['isEnableStopInheritPermission'] = undefined;
  /**
   * @member {Boolean} isEnableDeleteUniquePermission
   */
  exports.prototype['isEnableDeleteUniquePermission'] = undefined;
  /**
   * @member {Boolean} isEnableExcludePermissionLevel
   */
  exports.prototype['isEnableExcludePermissionLevel'] = undefined;
  /**
   * @member {Boolean} isHideExcludePermissionItem
   */
  exports.prototype['isHideExcludePermissionItem'] = undefined;
  /**
   * @member {Array.<module:model/PermissionLevel>} excludedPermissionLevles
   */
  exports.prototype['excludedPermissionLevles'] = undefined;



  return exports;
}));


