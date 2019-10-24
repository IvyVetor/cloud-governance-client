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
    ApiUser,
    ApiUserFromJSON,
    ApiUserFromJSONTyped,
    ApiUserToJSON,
    AssignBy,
    AssignByFromJSON,
    AssignByFromJSONTyped,
    AssignByToJSON,
    ChangeContactMethod,
    ChangeContactMethodFromJSON,
    ChangeContactMethodFromJSONTyped,
    ChangeContactMethodToJSON,
    CommonStatus,
    CommonStatusFromJSON,
    CommonStatusFromJSONTyped,
    CommonStatusToJSON,
    CustomActivityInfo,
    CustomActivityInfoFromJSON,
    CustomActivityInfoFromJSONTyped,
    CustomActivityInfoToJSON,
    CustomMetadata,
    CustomMetadataFromJSON,
    CustomMetadataFromJSONTyped,
    CustomMetadataToJSON,
    ServiceType,
    ServiceTypeFromJSON,
    ServiceTypeFromJSONTyped,
    ServiceTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface ChangeSiteContactService
 */
export interface ChangeSiteContactService {
    /**
     * 
     * @type {boolean}
     * @memberof ChangeSiteContactService
     */
    enableChangeContact?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeSiteContactService
     */
    enableChangeAdmin?: boolean;
    /**
     * 
     * @type {ChangeContactMethod}
     * @memberof ChangeSiteContactService
     */
    changedMethod?: ChangeContactMethod;
    /**
     * 
     * @type {AssignBy}
     * @memberof ChangeSiteContactService
     */
    changeModeAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof ChangeSiteContactService
     */
    departmentAssignBy?: AssignBy;
    /**
     * 
     * @type {Array<CustomMetadata>}
     * @memberof ChangeSiteContactService
     */
    metadatas?: Array<CustomMetadata> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeSiteContactService
     */
    hideRequestSummary?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChangeSiteContactService
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangeSiteContactService
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangeSiteContactService
     */
    description?: string | null;
    /**
     * 
     * @type {ServiceType}
     * @memberof ChangeSiteContactService
     */
    type?: ServiceType;
    /**
     * 
     * @type {string}
     * @memberof ChangeSiteContactService
     */
    department?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeSiteContactService
     */
    loadDepartmentFromUps?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChangeSiteContactService
     */
    departments?: Array<string> | null;
    /**
     * 
     * @type {ApiUser}
     * @memberof ChangeSiteContactService
     */
    serviceContact?: ApiUser;
    /**
     * 
     * @type {ApiUser}
     * @memberof ChangeSiteContactService
     */
    serviceAdminContact?: ApiUser;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeSiteContactService
     */
    approversContainManagerRole?: boolean;
    /**
     * 
     * @type {CommonStatus}
     * @memberof ChangeSiteContactService
     */
    status?: CommonStatus;
    /**
     * 
     * @type {boolean}
     * @memberof ChangeSiteContactService
     */
    showServiceInCatalog?: boolean;
    /**
     * 
     * @type {CustomActivityInfo}
     * @memberof ChangeSiteContactService
     */
    customActivity?: CustomActivityInfo;
    /**
     * 
     * @type {string}
     * @memberof ChangeSiteContactService
     */
    approvalProcessId?: string;
    /**
     * 
     * @type {number}
     * @memberof ChangeSiteContactService
     */
    languageId?: number;
    /**
     * 
     * @type {string}
     * @memberof ChangeSiteContactService
     */
    categoryId?: string | null;
}

export function ChangeSiteContactServiceFromJSON(json: any): ChangeSiteContactService {
    return ChangeSiteContactServiceFromJSONTyped(json, false);
}

export function ChangeSiteContactServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeSiteContactService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enableChangeContact': !exists(json, 'enableChangeContact') ? undefined : json['enableChangeContact'],
        'enableChangeAdmin': !exists(json, 'enableChangeAdmin') ? undefined : json['enableChangeAdmin'],
        'changedMethod': !exists(json, 'changedMethod') ? undefined : ChangeContactMethodFromJSON(json['changedMethod']),
        'changeModeAssignBy': !exists(json, 'changeModeAssignBy') ? undefined : AssignByFromJSON(json['changeModeAssignBy']),
        'departmentAssignBy': !exists(json, 'departmentAssignBy') ? undefined : AssignByFromJSON(json['departmentAssignBy']),
        'metadatas': !exists(json, 'metadatas') ? undefined : (json['metadatas'] as Array<any>).map(CustomMetadataFromJSON),
        'hideRequestSummary': !exists(json, 'hideRequestSummary') ? undefined : json['hideRequestSummary'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : ServiceTypeFromJSON(json['type']),
        'department': !exists(json, 'department') ? undefined : json['department'],
        'loadDepartmentFromUps': !exists(json, 'loadDepartmentFromUps') ? undefined : json['loadDepartmentFromUps'],
        'departments': !exists(json, 'departments') ? undefined : json['departments'],
        'serviceContact': !exists(json, 'serviceContact') ? undefined : ApiUserFromJSON(json['serviceContact']),
        'serviceAdminContact': !exists(json, 'serviceAdminContact') ? undefined : ApiUserFromJSON(json['serviceAdminContact']),
        'approversContainManagerRole': !exists(json, 'approversContainManagerRole') ? undefined : json['approversContainManagerRole'],
        'status': !exists(json, 'status') ? undefined : CommonStatusFromJSON(json['status']),
        'showServiceInCatalog': !exists(json, 'showServiceInCatalog') ? undefined : json['showServiceInCatalog'],
        'customActivity': !exists(json, 'customActivity') ? undefined : CustomActivityInfoFromJSON(json['customActivity']),
        'approvalProcessId': !exists(json, 'approvalProcessId') ? undefined : json['approvalProcessId'],
        'languageId': !exists(json, 'languageId') ? undefined : json['languageId'],
        'categoryId': !exists(json, 'categoryId') ? undefined : json['categoryId'],
    };
}

export function ChangeSiteContactServiceToJSON(value?: ChangeSiteContactService | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enableChangeContact': value.enableChangeContact,
        'enableChangeAdmin': value.enableChangeAdmin,
        'changedMethod': ChangeContactMethodToJSON(value.changedMethod),
        'changeModeAssignBy': AssignByToJSON(value.changeModeAssignBy),
        'departmentAssignBy': AssignByToJSON(value.departmentAssignBy),
        'metadatas': value.metadatas == null ? undefined : (value.metadatas as Array<any>).map(CustomMetadataToJSON),
        'hideRequestSummary': value.hideRequestSummary,
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'type': ServiceTypeToJSON(value.type),
        'department': value.department,
        'loadDepartmentFromUps': value.loadDepartmentFromUps,
        'departments': value.departments,
        'serviceContact': ApiUserToJSON(value.serviceContact),
        'serviceAdminContact': ApiUserToJSON(value.serviceAdminContact),
        'approversContainManagerRole': value.approversContainManagerRole,
        'status': CommonStatusToJSON(value.status),
        'showServiceInCatalog': value.showServiceInCatalog,
        'customActivity': CustomActivityInfoToJSON(value.customActivity),
        'approvalProcessId': value.approvalProcessId,
        'languageId': value.languageId,
        'categoryId': value.categoryId,
    };
}

