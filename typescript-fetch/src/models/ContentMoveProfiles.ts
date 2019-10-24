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
    GuidModel,
    GuidModelFromJSON,
    GuidModelFromJSONTyped,
    GuidModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ContentMoveProfiles
 */
export interface ContentMoveProfiles {
    /**
     * 
     * @type {Array<GuidModel>}
     * @memberof ContentMoveProfiles
     */
    backupEnvironmentStoragePolices?: Array<GuidModel> | null;
    /**
     * 
     * @type {Array<GuidModel>}
     * @memberof ContentMoveProfiles
     */
    columnMappings?: Array<GuidModel> | null;
    /**
     * 
     * @type {Array<GuidModel>}
     * @memberof ContentMoveProfiles
     */
    contentTypeMappings?: Array<GuidModel> | null;
    /**
     * 
     * @type {Array<GuidModel>}
     * @memberof ContentMoveProfiles
     */
    userMappings?: Array<GuidModel> | null;
    /**
     * 
     * @type {Array<GuidModel>}
     * @memberof ContentMoveProfiles
     */
    languageMappings?: Array<GuidModel> | null;
    /**
     * 
     * @type {Array<GuidModel>}
     * @memberof ContentMoveProfiles
     */
    filterPolices?: Array<GuidModel> | null;
}

export function ContentMoveProfilesFromJSON(json: any): ContentMoveProfiles {
    return ContentMoveProfilesFromJSONTyped(json, false);
}

export function ContentMoveProfilesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentMoveProfiles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backupEnvironmentStoragePolices': !exists(json, 'backupEnvironmentStoragePolices') ? undefined : (json['backupEnvironmentStoragePolices'] as Array<any>).map(GuidModelFromJSON),
        'columnMappings': !exists(json, 'columnMappings') ? undefined : (json['columnMappings'] as Array<any>).map(GuidModelFromJSON),
        'contentTypeMappings': !exists(json, 'contentTypeMappings') ? undefined : (json['contentTypeMappings'] as Array<any>).map(GuidModelFromJSON),
        'userMappings': !exists(json, 'userMappings') ? undefined : (json['userMappings'] as Array<any>).map(GuidModelFromJSON),
        'languageMappings': !exists(json, 'languageMappings') ? undefined : (json['languageMappings'] as Array<any>).map(GuidModelFromJSON),
        'filterPolices': !exists(json, 'filterPolices') ? undefined : (json['filterPolices'] as Array<any>).map(GuidModelFromJSON),
    };
}

export function ContentMoveProfilesToJSON(value?: ContentMoveProfiles | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backupEnvironmentStoragePolices': value.backupEnvironmentStoragePolices == null ? undefined : (value.backupEnvironmentStoragePolices as Array<any>).map(GuidModelToJSON),
        'columnMappings': value.columnMappings == null ? undefined : (value.columnMappings as Array<any>).map(GuidModelToJSON),
        'contentTypeMappings': value.contentTypeMappings == null ? undefined : (value.contentTypeMappings as Array<any>).map(GuidModelToJSON),
        'userMappings': value.userMappings == null ? undefined : (value.userMappings as Array<any>).map(GuidModelToJSON),
        'languageMappings': value.languageMappings == null ? undefined : (value.languageMappings as Array<any>).map(GuidModelToJSON),
        'filterPolices': value.filterPolices == null ? undefined : (value.filterPolices as Array<any>).map(GuidModelToJSON),
    };
}

