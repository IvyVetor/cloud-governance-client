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
import ServiceGroupWithPermissions from './ServiceGroupWithPermissions';
import ServiceUserWithPermissions from './ServiceUserWithPermissions';

/**
 * The UserGroupPermissions model module.
 * @module model/UserGroupPermissions
 * @version 1.0
 */
class UserGroupPermissions {
    /**
     * Constructs a new <code>UserGroupPermissions</code>.
     * @alias module:model/UserGroupPermissions
     */
    constructor() { 
        
        UserGroupPermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserGroupPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserGroupPermissions} obj Optional instance to populate.
     * @return {module:model/UserGroupPermissions} The populated <code>UserGroupPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGroupPermissions();

            if (data.hasOwnProperty('userPermissions')) {
                obj['userPermissions'] = ApiClient.convertToType(data['userPermissions'], [ServiceUserWithPermissions]);
            }
            if (data.hasOwnProperty('groupPermissions')) {
                obj['groupPermissions'] = ApiClient.convertToType(data['groupPermissions'], [ServiceGroupWithPermissions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ServiceUserWithPermissions>} userPermissions
 */
UserGroupPermissions.prototype['userPermissions'] = undefined;

/**
 * @member {Array.<module:model/ServiceGroupWithPermissions>} groupPermissions
 */
UserGroupPermissions.prototype['groupPermissions'] = undefined;






export default UserGroupPermissions;
