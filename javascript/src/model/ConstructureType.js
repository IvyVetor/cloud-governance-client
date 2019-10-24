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
* Enum class ConstructureType.
* @enum {}
* @readonly
*/
export default class ConstructureType {
    
        /**
         * value: "Text"
         * @const
         */
        "Text" = "Text";

    
        /**
         * value: "Metadata"
         * @const
         */
        "Metadata" = "Metadata";

    
        /**
         * value: "Attribute"
         * @const
         */
        "Attribute" = "Attribute";

    

    /**
    * Returns a <code>ConstructureType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ConstructureType} The enum <code>ConstructureType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
