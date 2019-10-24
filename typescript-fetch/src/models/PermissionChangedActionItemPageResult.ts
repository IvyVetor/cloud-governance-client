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
    PermissionChangedActionItem,
    PermissionChangedActionItemFromJSON,
    PermissionChangedActionItemFromJSONTyped,
    PermissionChangedActionItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface PermissionChangedActionItemPageResult
 */
export interface PermissionChangedActionItemPageResult {
    /**
     * 
     * @type {Array<PermissionChangedActionItem>}
     * @memberof PermissionChangedActionItemPageResult
     */
    value?: Array<PermissionChangedActionItem> | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionChangedActionItemPageResult
     */
    nextLink?: string | null;
}

export function PermissionChangedActionItemPageResultFromJSON(json: any): PermissionChangedActionItemPageResult {
    return PermissionChangedActionItemPageResultFromJSONTyped(json, false);
}

export function PermissionChangedActionItemPageResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionChangedActionItemPageResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : (json['value'] as Array<any>).map(PermissionChangedActionItemFromJSON),
        'nextLink': !exists(json, 'nextLink') ? undefined : json['nextLink'],
    };
}

export function PermissionChangedActionItemPageResultToJSON(value?: PermissionChangedActionItemPageResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value == null ? undefined : (value.value as Array<any>).map(PermissionChangedActionItemToJSON),
        'nextLink': value.nextLink,
    };
}

