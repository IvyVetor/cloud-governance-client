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
 * Disabled=0, ExternalUserSharingOnly=1, ExternalUserAndGuestSharing=2, </br>ExistingExternalUserSharingOnly=3
 * @export
 * @enum {string}
 */
export enum SharingCapabilities {
    Disabled = 'Disabled',
    ExternalUserSharingOnly = 'ExternalUserSharingOnly',
    ExternalUserAndGuestSharing = 'ExternalUserAndGuestSharing',
    ExistingExternalUserSharingOnly = 'ExistingExternalUserSharingOnly'
}

export function SharingCapabilitiesFromJSON(json: any): SharingCapabilities {
    return SharingCapabilitiesFromJSONTyped(json, false);
}

export function SharingCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SharingCapabilities {
    return json as SharingCapabilities;
}

export function SharingCapabilitiesToJSON(value?: SharingCapabilities): any {
    return value as any;
}
