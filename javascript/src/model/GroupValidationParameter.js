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

/**
 * The GroupValidationParameter model module.
 * @module model/GroupValidationParameter
 * @version 1.0
 */
class GroupValidationParameter {
    /**
     * Constructs a new <code>GroupValidationParameter</code>.
     * @alias module:model/GroupValidationParameter
     */
    constructor() { 
        
        GroupValidationParameter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupValidationParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupValidationParameter} obj Optional instance to populate.
     * @return {module:model/GroupValidationParameter} The populated <code>GroupValidationParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupValidationParameter();

            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
            }
            if (data.hasOwnProperty('groupEmail')) {
                obj['groupEmail'] = ApiClient.convertToType(data['groupEmail'], 'String');
            }
            if (data.hasOwnProperty('isEditTask')) {
                obj['isEditTask'] = ApiClient.convertToType(data['isEditTask'], 'Boolean');
            }
            if (data.hasOwnProperty('isFromQuestionnaire')) {
                obj['isFromQuestionnaire'] = ApiClient.convertToType(data['isFromQuestionnaire'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} groupId
 */
GroupValidationParameter.prototype['groupId'] = undefined;

/**
 * @member {String} groupEmail
 */
GroupValidationParameter.prototype['groupEmail'] = undefined;

/**
 * @member {Boolean} isEditTask
 */
GroupValidationParameter.prototype['isEditTask'] = undefined;

/**
 * @member {Boolean} isFromQuestionnaire
 */
GroupValidationParameter.prototype['isFromQuestionnaire'] = undefined;






export default GroupValidationParameter;
