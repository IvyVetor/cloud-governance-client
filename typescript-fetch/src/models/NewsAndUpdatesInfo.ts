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
 * @interface NewsAndUpdatesInfo
 */
export interface NewsAndUpdatesInfo {
    /**
     * 
     * @type {string}
     * @memberof NewsAndUpdatesInfo
     */
    customizedTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewsAndUpdatesInfo
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewsAndUpdatesInfo
     */
    content?: string | null;
}

export function NewsAndUpdatesInfoFromJSON(json: any): NewsAndUpdatesInfo {
    return NewsAndUpdatesInfoFromJSONTyped(json, false);
}

export function NewsAndUpdatesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewsAndUpdatesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customizedTitle': !exists(json, 'customizedTitle') ? undefined : json['customizedTitle'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'content': !exists(json, 'content') ? undefined : json['content'],
    };
}

export function NewsAndUpdatesInfoToJSON(value?: NewsAndUpdatesInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customizedTitle': value.customizedTitle,
        'title': value.title,
        'content': value.content,
    };
}

