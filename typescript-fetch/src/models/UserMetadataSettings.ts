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
    ApiUser,
    ApiUserFromJSON,
    ApiUserFromJSONTyped,
    ApiUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface UserMetadataSettings
 */
export interface UserMetadataSettings {
    /**
     * 
     * @type {Array<ApiUser>}
     * @memberof UserMetadataSettings
     */
    value?: Array<ApiUser> | null;
}

export function UserMetadataSettingsFromJSON(json: any): UserMetadataSettings {
    return UserMetadataSettingsFromJSONTyped(json, false);
}

export function UserMetadataSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserMetadataSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : (json['value'] as Array<any>).map(ApiUserFromJSON),
    };
}

export function UserMetadataSettingsToJSON(value?: UserMetadataSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value == null ? undefined : (value.value as Array<any>).map(ApiUserToJSON),
    };
}

