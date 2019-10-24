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
/**
 * 
 * @export
 * @interface WelcomeEmailSettings
 */
export interface WelcomeEmailSettings {
    /**
     * 
     * @type {boolean}
     * @memberof WelcomeEmailSettings
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WelcomeEmailSettings
     */
    subject?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WelcomeEmailSettings
     */
    personalMessage?: string | null;
}

export function WelcomeEmailSettingsFromJSON(json: any): WelcomeEmailSettings {
    return WelcomeEmailSettingsFromJSONTyped(json, false);
}

export function WelcomeEmailSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WelcomeEmailSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'personalMessage': !exists(json, 'personalMessage') ? undefined : json['personalMessage'],
    };
}

export function WelcomeEmailSettingsToJSON(value?: WelcomeEmailSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'subject': value.subject,
        'personalMessage': value.personalMessage,
    };
}

