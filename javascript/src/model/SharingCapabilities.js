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
* Enum class SharingCapabilities.
* @enum {}
* @readonly
*/
export default class SharingCapabilities {
    
        /**
         * value: "Disabled"
         * @const
         */
        "Disabled" = "Disabled";

    
        /**
         * value: "ExternalUserSharingOnly"
         * @const
         */
        "ExternalUserSharingOnly" = "ExternalUserSharingOnly";

    
        /**
         * value: "ExternalUserAndGuestSharing"
         * @const
         */
        "ExternalUserAndGuestSharing" = "ExternalUserAndGuestSharing";

    
        /**
         * value: "ExistingExternalUserSharingOnly"
         * @const
         */
        "ExistingExternalUserSharingOnly" = "ExistingExternalUserSharingOnly";

    

    /**
    * Returns a <code>SharingCapabilities</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SharingCapabilities} The enum <code>SharingCapabilities</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
