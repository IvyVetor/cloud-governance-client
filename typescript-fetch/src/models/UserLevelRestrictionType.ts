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
 * AnyUser=0, PeersAndDirectOrIndirectReport=1, DirectOrIndirectReports=2, </br>
 * @export
 * @enum {string}
 */
export enum UserLevelRestrictionType {
    AnyUser = 'AnyUser',
    PeersAndDirectOrIndirectReport = 'PeersAndDirectOrIndirectReport',
    DirectOrIndirectReports = 'DirectOrIndirectReports'
}

export function UserLevelRestrictionTypeFromJSON(json: any): UserLevelRestrictionType {
    return UserLevelRestrictionTypeFromJSONTyped(json, false);
}

export function UserLevelRestrictionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLevelRestrictionType {
    return json as UserLevelRestrictionType;
}

export function UserLevelRestrictionTypeToJSON(value?: UserLevelRestrictionType): any {
    return value as any;
}
