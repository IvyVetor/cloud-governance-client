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
 * @interface CommentsParam
 */
export interface CommentsParam {
    /**
     * 
     * @type {string}
     * @memberof CommentsParam
     */
    comments?: string | null;
}

export function CommentsParamFromJSON(json: any): CommentsParam {
    return CommentsParamFromJSONTyped(json, false);
}

export function CommentsParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsParam {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
    };
}

export function CommentsParamToJSON(value?: CommentsParam | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comments': value.comments,
    };
}

