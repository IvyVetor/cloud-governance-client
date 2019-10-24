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
import GroupInfo from './GroupInfo';

/**
 * The YammerGroup model module.
 * @module model/YammerGroup
 * @version 1.0
 */
class YammerGroup {
    /**
     * Constructs a new <code>YammerGroup</code>.
     * @alias module:model/YammerGroup
     */
    constructor() { 
        
        YammerGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>YammerGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/YammerGroup} obj Optional instance to populate.
     * @return {module:model/YammerGroup} The populated <code>YammerGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new YammerGroup();

            if (data.hasOwnProperty('exists')) {
                obj['exists'] = ApiClient.convertToType(data['exists'], 'Boolean');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = GroupInfo.constructFromObject(data['group']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} exists
 */
YammerGroup.prototype['exists'] = undefined;

/**
 * @member {module:model/GroupInfo} group
 */
YammerGroup.prototype['group'] = undefined;






export default YammerGroup;
