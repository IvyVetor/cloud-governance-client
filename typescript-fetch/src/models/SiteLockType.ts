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

/**
 * NoAccess=0, ReadOnly=1, NoAccessAndReadOnly=2, </br>Unlock=3
 * @export
 * @enum {string}
 */
export enum SiteLockType {
    NoAccess = 'NoAccess',
    ReadOnly = 'ReadOnly',
    NoAccessAndReadOnly = 'NoAccessAndReadOnly',
    Unlock = 'Unlock'
}

export function SiteLockTypeFromJSON(json: any): SiteLockType {
    return SiteLockTypeFromJSONTyped(json, false);
}

export function SiteLockTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiteLockType {
    return json as SiteLockType;
}

export function SiteLockTypeToJSON(value?: SiteLockType): any {
    return value as any;
}
