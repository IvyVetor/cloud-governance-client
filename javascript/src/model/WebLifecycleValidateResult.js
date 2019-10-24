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
 * The WebLifecycleValidateResult model module.
 * @module model/WebLifecycleValidateResult
 * @version 1.0
 */
class WebLifecycleValidateResult {
    /**
     * Constructs a new <code>WebLifecycleValidateResult</code>.
     * @alias module:model/WebLifecycleValidateResult
     */
    constructor() { 
        
        WebLifecycleValidateResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebLifecycleValidateResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebLifecycleValidateResult} obj Optional instance to populate.
     * @return {module:model/WebLifecycleValidateResult} The populated <code>WebLifecycleValidateResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebLifecycleValidateResult();

            if (data.hasOwnProperty('webId')) {
                obj['webId'] = ApiClient.convertToType(data['webId'], 'String');
            }
            if (data.hasOwnProperty('webUrl')) {
                obj['webUrl'] = ApiClient.convertToType(data['webUrl'], 'String');
            }
            if (data.hasOwnProperty('webRelativeUrl')) {
                obj['webRelativeUrl'] = ApiClient.convertToType(data['webRelativeUrl'], 'String');
            }
            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
            }
            if (data.hasOwnProperty('siteUrl')) {
                obj['siteUrl'] = ApiClient.convertToType(data['siteUrl'], 'String');
            }
            if (data.hasOwnProperty('isValid')) {
                obj['isValid'] = ApiClient.convertToType(data['isValid'], 'Boolean');
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} webId
 */
WebLifecycleValidateResult.prototype['webId'] = undefined;

/**
 * @member {String} webUrl
 */
WebLifecycleValidateResult.prototype['webUrl'] = undefined;

/**
 * @member {String} webRelativeUrl
 */
WebLifecycleValidateResult.prototype['webRelativeUrl'] = undefined;

/**
 * @member {String} siteId
 */
WebLifecycleValidateResult.prototype['siteId'] = undefined;

/**
 * @member {String} siteUrl
 */
WebLifecycleValidateResult.prototype['siteUrl'] = undefined;

/**
 * @member {Boolean} isValid
 */
WebLifecycleValidateResult.prototype['isValid'] = undefined;

/**
 * @member {String} errorMessage
 */
WebLifecycleValidateResult.prototype['errorMessage'] = undefined;






export default WebLifecycleValidateResult;
