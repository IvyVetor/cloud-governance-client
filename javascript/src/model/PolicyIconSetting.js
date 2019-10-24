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
 * The PolicyIconSetting model module.
 * @module model/PolicyIconSetting
 * @version 1.0
 */
class PolicyIconSetting {
    /**
     * Constructs a new <code>PolicyIconSetting</code>.
     * @alias module:model/PolicyIconSetting
     */
    constructor() { 
        
        PolicyIconSetting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PolicyIconSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PolicyIconSetting} obj Optional instance to populate.
     * @return {module:model/PolicyIconSetting} The populated <code>PolicyIconSetting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyIconSetting();

            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('referenceUrl')) {
                obj['referenceUrl'] = ApiClient.convertToType(data['referenceUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isEnabled
 */
PolicyIconSetting.prototype['isEnabled'] = undefined;

/**
 * @member {String} address
 */
PolicyIconSetting.prototype['address'] = undefined;

/**
 * @member {String} referenceUrl
 */
PolicyIconSetting.prototype['referenceUrl'] = undefined;






export default PolicyIconSetting;
