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
import GrantPermissionGroup from './GrantPermissionGroup';
import IntModel from './IntModel';

/**
 * The GrantPermissionRequestPermissionSettings model module.
 * @module model/GrantPermissionRequestPermissionSettings
 * @version 1.0
 */
class GrantPermissionRequestPermissionSettings {
    /**
     * Constructs a new <code>GrantPermissionRequestPermissionSettings</code>.
     * @alias module:model/GrantPermissionRequestPermissionSettings
     */
    constructor() { 
        
        GrantPermissionRequestPermissionSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GrantPermissionRequestPermissionSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GrantPermissionRequestPermissionSettings} obj Optional instance to populate.
     * @return {module:model/GrantPermissionRequestPermissionSettings} The populated <code>GrantPermissionRequestPermissionSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GrantPermissionRequestPermissionSettings();

            if (data.hasOwnProperty('isBreakInheritance')) {
                obj['isBreakInheritance'] = ApiClient.convertToType(data['isBreakInheritance'], 'Boolean');
            }
            if (data.hasOwnProperty('isGrantPermissionDirectly')) {
                obj['isGrantPermissionDirectly'] = ApiClient.convertToType(data['isGrantPermissionDirectly'], 'Boolean');
            }
            if (data.hasOwnProperty('selectedSPGroup')) {
                obj['selectedSPGroup'] = GrantPermissionGroup.constructFromObject(data['selectedSPGroup']);
            }
            if (data.hasOwnProperty('selectedPermissionLevels')) {
                obj['selectedPermissionLevels'] = ApiClient.convertToType(data['selectedPermissionLevels'], [IntModel]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isBreakInheritance
 */
GrantPermissionRequestPermissionSettings.prototype['isBreakInheritance'] = undefined;

/**
 * @member {Boolean} isGrantPermissionDirectly
 */
GrantPermissionRequestPermissionSettings.prototype['isGrantPermissionDirectly'] = undefined;

/**
 * @member {module:model/GrantPermissionGroup} selectedSPGroup
 */
GrantPermissionRequestPermissionSettings.prototype['selectedSPGroup'] = undefined;

/**
 * @member {Array.<module:model/IntModel>} selectedPermissionLevels
 */
GrantPermissionRequestPermissionSettings.prototype['selectedPermissionLevels'] = undefined;






export default GrantPermissionRequestPermissionSettings;
