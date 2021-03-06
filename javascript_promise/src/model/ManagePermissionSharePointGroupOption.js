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
    define(['ApiClient', 'model/ApiUser', 'model/AssignBy', 'model/SPGroupEditOption', 'model/SPGroupViewOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiUser'), require('./AssignBy'), require('./SPGroupEditOption'), require('./SPGroupViewOption'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.ManagePermissionSharePointGroupOption = factory(root.CgClient.ApiClient, root.CgClient.ApiUser, root.CgClient.AssignBy, root.CgClient.SPGroupEditOption, root.CgClient.SPGroupViewOption);
  }
}(this, function(ApiClient, ApiUser, AssignBy, SPGroupEditOption, SPGroupViewOption) {
  'use strict';



  /**
   * The ManagePermissionSharePointGroupOption model module.
   * @module model/ManagePermissionSharePointGroupOption
   * @version 1.0
   */

  /**
   * Constructs a new <code>ManagePermissionSharePointGroupOption</code>.
   * @alias module:model/ManagePermissionSharePointGroupOption
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ManagePermissionSharePointGroupOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManagePermissionSharePointGroupOption} obj Optional instance to populate.
   * @return {module:model/ManagePermissionSharePointGroupOption} The populated <code>ManagePermissionSharePointGroupOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('isEnableCreateSPGroup')) {
        obj['isEnableCreateSPGroup'] = ApiClient.convertToType(data['isEnableCreateSPGroup'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnableDeleteSPGroup')) {
        obj['isEnableDeleteSPGroup'] = ApiClient.convertToType(data['isEnableDeleteSPGroup'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnableManageGroupSettings')) {
        obj['isEnableManageGroupSettings'] = ApiClient.convertToType(data['isEnableManageGroupSettings'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnableManageGroupMembers')) {
        obj['isEnableManageGroupMembers'] = ApiClient.convertToType(data['isEnableManageGroupMembers'], 'Boolean');
      }
      if (data.hasOwnProperty('groupOwner')) {
        obj['groupOwner'] = ApiUser.constructFromObject(data['groupOwner']);
      }
      if (data.hasOwnProperty('groupOwnerAssignBy')) {
        obj['groupOwnerAssignBy'] = AssignBy.constructFromObject(data['groupOwnerAssignBy']);
      }
      if (data.hasOwnProperty('spGroupViewType')) {
        obj['spGroupViewType'] = SPGroupViewOption.constructFromObject(data['spGroupViewType']);
      }
      if (data.hasOwnProperty('spGroupEditType')) {
        obj['spGroupEditType'] = SPGroupEditOption.constructFromObject(data['spGroupEditType']);
      }
      if (data.hasOwnProperty('spGroupOptionAssignBy')) {
        obj['spGroupOptionAssignBy'] = AssignBy.constructFromObject(data['spGroupOptionAssignBy']);
      }
      if (data.hasOwnProperty('isAllowJoinOrLeaveRequest')) {
        obj['isAllowJoinOrLeaveRequest'] = ApiClient.convertToType(data['isAllowJoinOrLeaveRequest'], 'Boolean');
      }
      if (data.hasOwnProperty('isAutoAcceptRequest')) {
        obj['isAutoAcceptRequest'] = ApiClient.convertToType(data['isAutoAcceptRequest'], 'Boolean');
      }
      if (data.hasOwnProperty('sendMembershipRequestEmailAddress')) {
        obj['sendMembershipRequestEmailAddress'] = ApiClient.convertToType(data['sendMembershipRequestEmailAddress'], 'String');
      }
      if (data.hasOwnProperty('groupRequestAssignBy')) {
        obj['groupRequestAssignBy'] = AssignBy.constructFromObject(data['groupRequestAssignBy']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} isEnableCreateSPGroup
   */
  exports.prototype['isEnableCreateSPGroup'] = undefined;
  /**
   * @member {Boolean} isEnableDeleteSPGroup
   */
  exports.prototype['isEnableDeleteSPGroup'] = undefined;
  /**
   * @member {Boolean} isEnableManageGroupSettings
   */
  exports.prototype['isEnableManageGroupSettings'] = undefined;
  /**
   * @member {Boolean} isEnableManageGroupMembers
   */
  exports.prototype['isEnableManageGroupMembers'] = undefined;
  /**
   * @member {module:model/ApiUser} groupOwner
   */
  exports.prototype['groupOwner'] = undefined;
  /**
   * @member {module:model/AssignBy} groupOwnerAssignBy
   */
  exports.prototype['groupOwnerAssignBy'] = undefined;
  /**
   * @member {module:model/SPGroupViewOption} spGroupViewType
   */
  exports.prototype['spGroupViewType'] = undefined;
  /**
   * @member {module:model/SPGroupEditOption} spGroupEditType
   */
  exports.prototype['spGroupEditType'] = undefined;
  /**
   * @member {module:model/AssignBy} spGroupOptionAssignBy
   */
  exports.prototype['spGroupOptionAssignBy'] = undefined;
  /**
   * @member {Boolean} isAllowJoinOrLeaveRequest
   */
  exports.prototype['isAllowJoinOrLeaveRequest'] = undefined;
  /**
   * @member {Boolean} isAutoAcceptRequest
   */
  exports.prototype['isAutoAcceptRequest'] = undefined;
  /**
   * @member {String} sendMembershipRequestEmailAddress
   */
  exports.prototype['sendMembershipRequestEmailAddress'] = undefined;
  /**
   * @member {module:model/AssignBy} groupRequestAssignBy
   */
  exports.prototype['groupRequestAssignBy'] = undefined;



  return exports;
}));


