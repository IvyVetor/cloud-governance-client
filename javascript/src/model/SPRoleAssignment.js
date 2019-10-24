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
import SPPrincipalType from './SPPrincipalType';

/**
 * The SPRoleAssignment model module.
 * @module model/SPRoleAssignment
 * @version 1.0
 */
class SPRoleAssignment {
    /**
     * Constructs a new <code>SPRoleAssignment</code>.
     * @alias module:model/SPRoleAssignment
     */
    constructor() { 
        
        SPRoleAssignment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SPRoleAssignment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SPRoleAssignment} obj Optional instance to populate.
     * @return {module:model/SPRoleAssignment} The populated <code>SPRoleAssignment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SPRoleAssignment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('loginName')) {
                obj['loginName'] = ApiClient.convertToType(data['loginName'], 'String');
            }
            if (data.hasOwnProperty('principalType')) {
                obj['principalType'] = SPPrincipalType.constructFromObject(data['principalType']);
            }
            if (data.hasOwnProperty('principalTypeDescription')) {
                obj['principalTypeDescription'] = ApiClient.convertToType(data['principalTypeDescription'], 'String');
            }
            if (data.hasOwnProperty('permissionLevels')) {
                obj['permissionLevels'] = ApiClient.convertToType(data['permissionLevels'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
SPRoleAssignment.prototype['id'] = undefined;

/**
 * @member {String} name
 */
SPRoleAssignment.prototype['name'] = undefined;

/**
 * @member {String} loginName
 */
SPRoleAssignment.prototype['loginName'] = undefined;

/**
 * @member {module:model/SPPrincipalType} principalType
 */
SPRoleAssignment.prototype['principalType'] = undefined;

/**
 * @member {String} principalTypeDescription
 */
SPRoleAssignment.prototype['principalTypeDescription'] = undefined;

/**
 * @member {Array.<String>} permissionLevels
 */
SPRoleAssignment.prototype['permissionLevels'] = undefined;






export default SPRoleAssignment;
