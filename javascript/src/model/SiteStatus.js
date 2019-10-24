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
* Enum class SiteStatus.
* @enum {}
* @readonly
*/
export default class SiteStatus {
    
        /**
         * value: "Active"
         * @const
         */
        "Active" = "Active";

    
        /**
         * value: "Deleted"
         * @const
         */
        "Deleted" = "Deleted";

    
        /**
         * value: "Archived"
         * @const
         */
        "Archived" = "Archived";

    
        /**
         * value: "Locked"
         * @const
         */
        "Locked" = "Locked";

    
        /**
         * value: "TemporaryLocked"
         * @const
         */
        "TemporaryLocked" = "TemporaryLocked";

    

    /**
    * Returns a <code>SiteStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SiteStatus} The enum <code>SiteStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
