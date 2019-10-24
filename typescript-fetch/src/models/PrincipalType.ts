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
 * None=0, User=1, DistributionList=2, </br>SecurityGroup=4, SharePointGroup=8, All=15, </br>
 * @export
 * @enum {string}
 */
export enum PrincipalType {
    None = 'None',
    User = 'User',
    DistributionList = 'DistributionList',
    SecurityGroup = 'SecurityGroup',
    SharePointGroup = 'SharePointGroup',
    All = 'All'
}

export function PrincipalTypeFromJSON(json: any): PrincipalType {
    return PrincipalTypeFromJSONTyped(json, false);
}

export function PrincipalTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrincipalType {
    return json as PrincipalType;
}

export function PrincipalTypeToJSON(value?: PrincipalType): any {
    return value as any;
}
