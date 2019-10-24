// tslint:disable
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
 */

import { exists, mapValues } from '../runtime';
import {
    DurationType,
    DurationTypeFromJSON,
    DurationTypeFromJSONTyped,
    DurationTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface PolicyExpirationSetting
 */
export interface PolicyExpirationSetting {
    /**
     * 
     * @type {boolean}
     * @memberof PolicyExpirationSetting
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PolicyExpirationSetting
     */
    duration?: number;
    /**
     * 
     * @type {DurationType}
     * @memberof PolicyExpirationSetting
     */
    durationType?: DurationType;
    /**
     * 
     * @type {string}
     * @memberof PolicyExpirationSetting
     */
    processId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PolicyExpirationSetting
     */
    isAutoLockEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PolicyExpirationSetting
     */
    autoLockProfileId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PolicyExpirationSetting
     */
    isNotifyEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PolicyExpirationSetting
     */
    notifyTemplateId?: string;
}

export function PolicyExpirationSettingFromJSON(json: any): PolicyExpirationSetting {
    return PolicyExpirationSettingFromJSONTyped(json, false);
}

export function PolicyExpirationSettingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyExpirationSetting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'durationType': !exists(json, 'durationType') ? undefined : DurationTypeFromJSON(json['durationType']),
        'processId': !exists(json, 'processId') ? undefined : json['processId'],
        'isAutoLockEnabled': !exists(json, 'isAutoLockEnabled') ? undefined : json['isAutoLockEnabled'],
        'autoLockProfileId': !exists(json, 'autoLockProfileId') ? undefined : json['autoLockProfileId'],
        'isNotifyEnabled': !exists(json, 'isNotifyEnabled') ? undefined : json['isNotifyEnabled'],
        'notifyTemplateId': !exists(json, 'notifyTemplateId') ? undefined : json['notifyTemplateId'],
    };
}

export function PolicyExpirationSettingToJSON(value?: PolicyExpirationSetting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isEnabled': value.isEnabled,
        'duration': value.duration,
        'durationType': DurationTypeToJSON(value.durationType),
        'processId': value.processId,
        'isAutoLockEnabled': value.isAutoLockEnabled,
        'autoLockProfileId': value.autoLockProfileId,
        'isNotifyEnabled': value.isNotifyEnabled,
        'notifyTemplateId': value.notifyTemplateId,
    };
}

