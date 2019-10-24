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
* Enum class ExternalSharingOptions.
* @enum {}
* @readonly
*/
export default class ExternalSharingOptions {
    
        /**
         * value: "Disabled"
         * @const
         */
        "Disabled" = "Disabled";

    
        /**
         * value: "VerifiedGuestUser"
         * @const
         */
        "VerifiedGuestUser" = "VerifiedGuestUser";

    
        /**
         * value: "Anyone"
         * @const
         */
        "Anyone" = "Anyone";

    
        /**
         * value: "ExistingGuestUser"
         * @const
         */
        "ExistingGuestUser" = "ExistingGuestUser";

    

    /**
    * Returns a <code>ExternalSharingOptions</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ExternalSharingOptions} The enum <code>ExternalSharingOptions</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
