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
 * The SiteUrl model module.
 * @module model/SiteUrl
 * @version 1.0
 */
class SiteUrl {
    /**
     * Constructs a new <code>SiteUrl</code>.
     * @alias module:model/SiteUrl
     */
    constructor() { 
        
        SiteUrl.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SiteUrl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SiteUrl} obj Optional instance to populate.
     * @return {module:model/SiteUrl} The populated <code>SiteUrl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SiteUrl();

            if (data.hasOwnProperty('root')) {
                obj['root'] = ApiClient.convertToType(data['root'], 'String');
            }
            if (data.hasOwnProperty('managedPath')) {
                obj['managedPath'] = ApiClient.convertToType(data['managedPath'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} root
 */
SiteUrl.prototype['root'] = undefined;

/**
 * @member {String} managedPath
 */
SiteUrl.prototype['managedPath'] = undefined;

/**
 * @member {String} name
 */
SiteUrl.prototype['name'] = undefined;






export default SiteUrl;
