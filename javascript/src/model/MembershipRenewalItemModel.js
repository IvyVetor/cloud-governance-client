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

import ApiClient from '../ApiClient';
import MembershipUserType from './MembershipUserType';
import RenewalItemAction from './RenewalItemAction';
import RenewalType from './RenewalType';
import UserAccessType from './UserAccessType';

/**
 * The MembershipRenewalItemModel model module.
 * @module model/MembershipRenewalItemModel
 * @version 1.0
 */
class MembershipRenewalItemModel {
    /**
     * Constructs a new <code>MembershipRenewalItemModel</code>.
     * @alias module:model/MembershipRenewalItemModel
     */
    constructor() { 
        
        MembershipRenewalItemModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MembershipRenewalItemModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MembershipRenewalItemModel} obj Optional instance to populate.
     * @return {module:model/MembershipRenewalItemModel} The populated <code>MembershipRenewalItemModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MembershipRenewalItemModel();

            if (data.hasOwnProperty('type')) {
                obj['type'] = RenewalType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('userDisplayName')) {
                obj['userDisplayName'] = ApiClient.convertToType(data['userDisplayName'], 'String');
            }
            if (data.hasOwnProperty('groupUserType')) {
                obj['groupUserType'] = MembershipUserType.constructFromObject(data['groupUserType']);
            }
            if (data.hasOwnProperty('groupUserTypeDescription')) {
                obj['groupUserTypeDescription'] = ApiClient.convertToType(data['groupUserTypeDescription'], 'String');
            }
            if (data.hasOwnProperty('accessType')) {
                obj['accessType'] = UserAccessType.constructFromObject(data['accessType']);
            }
            if (data.hasOwnProperty('accessTypeDescription')) {
                obj['accessTypeDescription'] = ApiClient.convertToType(data['accessTypeDescription'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('objectId')) {
                obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = RenewalItemAction.constructFromObject(data['action']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RenewalType} type
 */
MembershipRenewalItemModel.prototype['type'] = undefined;

/**
 * @member {String} user
 */
MembershipRenewalItemModel.prototype['user'] = undefined;

/**
 * @member {String} userDisplayName
 */
MembershipRenewalItemModel.prototype['userDisplayName'] = undefined;

/**
 * @member {module:model/MembershipUserType} groupUserType
 */
MembershipRenewalItemModel.prototype['groupUserType'] = undefined;

/**
 * @member {String} groupUserTypeDescription
 */
MembershipRenewalItemModel.prototype['groupUserTypeDescription'] = undefined;

/**
 * @member {module:model/UserAccessType} accessType
 */
MembershipRenewalItemModel.prototype['accessType'] = undefined;

/**
 * @member {String} accessTypeDescription
 */
MembershipRenewalItemModel.prototype['accessTypeDescription'] = undefined;

/**
 * @member {String} id
 */
MembershipRenewalItemModel.prototype['id'] = undefined;

/**
 * @member {String} objectId
 */
MembershipRenewalItemModel.prototype['objectId'] = undefined;

/**
 * @member {module:model/RenewalItemAction} action
 */
MembershipRenewalItemModel.prototype['action'] = undefined;






export default MembershipRenewalItemModel;
