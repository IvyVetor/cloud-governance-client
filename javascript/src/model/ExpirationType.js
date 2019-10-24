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
* Enum class ExpirationType.
* @enum {}
* @readonly
*/
export default class ExpirationType {
    
        /**
         * value: "Duration"
         * @const
         */
        "Duration" = "Duration";

    
        /**
         * value: "Date"
         * @const
         */
        "Date" = "Date";

    

    /**
    * Returns a <code>ExpirationType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ExpirationType} The enum <code>ExpirationType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
