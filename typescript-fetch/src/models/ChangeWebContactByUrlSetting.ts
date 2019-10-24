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
    ApiUserChangedProperty,
    ApiUserChangedPropertyFromJSON,
    ApiUserChangedPropertyFromJSONTyped,
    ApiUserChangedPropertyToJSON,
} from './';

/**
 * 
 * @export
 * @interface ChangeWebContactByUrlSetting
 */
export interface ChangeWebContactByUrlSetting {
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactByUrlSetting
     */
    siteId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactByUrlSetting
     */
    siteUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactByUrlSetting
     */
    webId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeWebContactByUrlSetting
     */
    webUrl?: string | null;
    /**
     * 
     * @type {ApiUserChangedProperty}
     * @memberof ChangeWebContactByUrlSetting
     */
    primaryContact?: ApiUserChangedProperty;
    /**
     * 
     * @type {ApiUserChangedProperty}
     * @memberof ChangeWebContactByUrlSetting
     */
    secondaryContact?: ApiUserChangedProperty;
}

export function ChangeWebContactByUrlSettingFromJSON(json: any): ChangeWebContactByUrlSetting {
    return ChangeWebContactByUrlSettingFromJSONTyped(json, false);
}

export function ChangeWebContactByUrlSettingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeWebContactByUrlSetting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'siteId': !exists(json, 'siteId') ? undefined : json['siteId'],
        'siteUrl': !exists(json, 'siteUrl') ? undefined : json['siteUrl'],
        'webId': !exists(json, 'webId') ? undefined : json['webId'],
        'webUrl': !exists(json, 'webUrl') ? undefined : json['webUrl'],
        'primaryContact': !exists(json, 'primaryContact') ? undefined : ApiUserChangedPropertyFromJSON(json['primaryContact']),
        'secondaryContact': !exists(json, 'secondaryContact') ? undefined : ApiUserChangedPropertyFromJSON(json['secondaryContact']),
    };
}

export function ChangeWebContactByUrlSettingToJSON(value?: ChangeWebContactByUrlSetting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'siteId': value.siteId,
        'siteUrl': value.siteUrl,
        'webId': value.webId,
        'webUrl': value.webUrl,
        'primaryContact': ApiUserChangedPropertyToJSON(value.primaryContact),
        'secondaryContact': ApiUserChangedPropertyToJSON(value.secondaryContact),
    };
}

