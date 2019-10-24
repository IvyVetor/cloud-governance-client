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
 * None=0, DeleteUser=1, RemoveUserPermission=2, </br>EditUserPermission=3, AddUserToSPGroup=11, RemoveGroupPermission=12, </br>EditGroupPermission=13, RemoveUserFromGroup=21, ChangeGroup=22, </br>
 * @export
 * @enum {string}
 */
export enum PermissionActionType {
    None = 'None',
    DeleteUser = 'DeleteUser',
    RemoveUserPermission = 'RemoveUserPermission',
    EditUserPermission = 'EditUserPermission',
    AddUserToSPGroup = 'AddUserToSPGroup',
    RemoveGroupPermission = 'RemoveGroupPermission',
    EditGroupPermission = 'EditGroupPermission',
    RemoveUserFromGroup = 'RemoveUserFromGroup',
    ChangeGroup = 'ChangeGroup'
}

export function PermissionActionTypeFromJSON(json: any): PermissionActionType {
    return PermissionActionTypeFromJSONTyped(json, false);
}

export function PermissionActionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionActionType {
    return json as PermissionActionType;
}

export function PermissionActionTypeToJSON(value?: PermissionActionType): any {
    return value as any;
}
