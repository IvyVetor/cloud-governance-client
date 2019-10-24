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
    AddGroupMemberType,
    AddGroupMemberTypeFromJSON,
    AddGroupMemberTypeFromJSONTyped,
    AddGroupMemberTypeToJSON,
    ApiUser,
    ApiUserFromJSON,
    ApiUserFromJSONTyped,
    ApiUserToJSON,
    AssignBy,
    AssignByFromJSON,
    AssignByFromJSONTyped,
    AssignByToJSON,
    BriefGroupPolicy,
    BriefGroupPolicyFromJSON,
    BriefGroupPolicyFromJSONTyped,
    BriefGroupPolicyToJSON,
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
    GroupIdConstructureSettings,
    GroupIdConstructureSettingsFromJSON,
    GroupIdConstructureSettingsFromJSONTyped,
    GroupIdConstructureSettingsToJSON,
    GroupNameConstructureSettings,
    GroupNameConstructureSettingsFromJSON,
    GroupNameConstructureSettingsFromJSONTyped,
    GroupNameConstructureSettingsToJSON,
    GuidModel,
    GuidModelFromJSON,
    GuidModelFromJSONTyped,
    GuidModelToJSON,
    HubSiteActionType,
    HubSiteActionTypeFromJSON,
    HubSiteActionTypeFromJSONTyped,
    HubSiteActionTypeToJSON,
    MultiGeoSetting,
    MultiGeoSettingFromJSON,
    MultiGeoSettingFromJSONTyped,
    MultiGeoSettingToJSON,
    ServiceTeamsSettings,
    ServiceTeamsSettingsFromJSON,
    ServiceTeamsSettingsFromJSONTyped,
    ServiceTeamsSettingsToJSON,
    ServiceType,
    ServiceTypeFromJSON,
    ServiceTypeFromJSONTyped,
    ServiceTypeToJSON,
    StringModel,
    StringModelFromJSON,
    StringModelFromJSONTyped,
    StringModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface CreateGroupService
 */
export interface CreateGroupService {
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    tenantId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableTeams?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    isPrivate?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableSubscribe?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableApplySiteDesign?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableOutsideSender?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableHideGroupMembership?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableClassification?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    allowConfigureLeasePeriod?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    showNotebookLink?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    showConversationsLink?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    showFilesLink?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    showTeamSiteLink?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    showPlannerLink?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateGroupService
     */
    classifications?: Array<string> | null;
    /**
     * 
     * @type {Array<GuidModel>}
     * @memberof CreateGroupService
     */
    siteDesigns?: Array<GuidModel> | null;
    /**
     * 
     * @type {AddGroupMemberType}
     * @memberof CreateGroupService
     */
    addGroupMemberType?: AddGroupMemberType;
    /**
     * 
     * @type {Array<BriefGroupPolicy>}
     * @memberof CreateGroupService
     */
    selectedPolicies?: Array<BriefGroupPolicy> | null;
    /**
     * 
     * @type {Array<StringModel>}
     * @memberof CreateGroupService
     */
    selectedLanguages?: Array<StringModel> | null;
    /**
     * 
     * @type {ServiceTeamsSettings}
     * @memberof CreateGroupService
     */
    teamsSettings?: ServiceTeamsSettings;
    /**
     * 
     * @type {GroupNameConstructureSettings}
     * @memberof CreateGroupService
     */
    groupNameConstructureSettings?: GroupNameConstructureSettings;
    /**
     * 
     * @type {GroupIdConstructureSettings}
     * @memberof CreateGroupService
     */
    groupIdConstructureSettings?: GroupIdConstructureSettings;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableHubSite?: boolean;
    /**
     * 
     * @type {HubSiteActionType}
     * @memberof CreateGroupService
     */
    hubSiteActionType?: HubSiteActionType;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    associateHubSiteId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    associateHubSiteTitle?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    isShowHubSiteSection?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableInstallApp?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableInstallPanel?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableCreateTeamFromScratch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableCreateTeamFromExistTeam?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableCreateTeamFromIT?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableCreateTeamFromOwned?: boolean;
    /**
     * 
     * @type {Array<GuidModel>}
     * @memberof CreateGroupService
     */
    templateTeams?: Array<GuidModel> | null;
    /**
     * 
     * @type {ApiUser}
     * @memberof CreateGroupService
     */
    defaultPrimaryContact?: ApiUser;
    /**
     * 
     * @type {ApiUser}
     * @memberof CreateGroupService
     */
    defaultSecondaryContact?: ApiUser;
    /**
     * 
     * @type {Array<ApiUser>}
     * @memberof CreateGroupService
     */
    defaultOwners?: Array<ApiUser> | null;
    /**
     * 
     * @type {Array<ApiUser>}
     * @memberof CreateGroupService
     */
    defaultMembers?: Array<ApiUser> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    defaultPolicy?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    defaultClassification?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    defaultLanguage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    defaultSiteDesign?: string | null;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    memberAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    ownerAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    privacyAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    subscribeAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    outsideSenderAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    classificationAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    languageAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    secondaryContactAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    primaryContactAssignBy?: AssignBy;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    enableDynamicMembership?: boolean;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    hideGroupMembershipAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    policyAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    siteDesignAssignBy?: AssignBy;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    hubSiteAssignBy?: AssignBy;
    /**
     * 
     * @type {MultiGeoSetting}
     * @memberof CreateGroupService
     */
    multiGeoSetting?: MultiGeoSetting;
    /**
     * 
     * @type {AssignBy}
     * @memberof CreateGroupService
     */
    departmentAssignBy?: AssignBy;
    /**
     * 
     * @type {Array<CustomMetadata>}
     * @memberof CreateGroupService
     */
    metadatas?: Array<CustomMetadata> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    hideRequestSummary?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    description?: string | null;
    /**
     * 
     * @type {ServiceType}
     * @memberof CreateGroupService
     */
    type?: ServiceType;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    department?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    loadDepartmentFromUps?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateGroupService
     */
    departments?: Array<string> | null;
    /**
     * 
     * @type {ApiUser}
     * @memberof CreateGroupService
     */
    serviceContact?: ApiUser;
    /**
     * 
     * @type {ApiUser}
     * @memberof CreateGroupService
     */
    serviceAdminContact?: ApiUser;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    approversContainManagerRole?: boolean;
    /**
     * 
     * @type {CommonStatus}
     * @memberof CreateGroupService
     */
    status?: CommonStatus;
    /**
     * 
     * @type {boolean}
     * @memberof CreateGroupService
     */
    showServiceInCatalog?: boolean;
    /**
     * 
     * @type {CustomActivityInfo}
     * @memberof CreateGroupService
     */
    customActivity?: CustomActivityInfo;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    approvalProcessId?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateGroupService
     */
    languageId?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateGroupService
     */
    categoryId?: string | null;
}

export function CreateGroupServiceFromJSON(json: any): CreateGroupService {
    return CreateGroupServiceFromJSONTyped(json, false);
}

export function CreateGroupServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateGroupService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'enableTeams': !exists(json, 'enableTeams') ? undefined : json['enableTeams'],
        'isPrivate': !exists(json, 'isPrivate') ? undefined : json['isPrivate'],
        'enableSubscribe': !exists(json, 'enableSubscribe') ? undefined : json['enableSubscribe'],
        'enableApplySiteDesign': !exists(json, 'enableApplySiteDesign') ? undefined : json['enableApplySiteDesign'],
        'enableOutsideSender': !exists(json, 'enableOutsideSender') ? undefined : json['enableOutsideSender'],
        'enableHideGroupMembership': !exists(json, 'enableHideGroupMembership') ? undefined : json['enableHideGroupMembership'],
        'enableClassification': !exists(json, 'enableClassification') ? undefined : json['enableClassification'],
        'allowConfigureLeasePeriod': !exists(json, 'allowConfigureLeasePeriod') ? undefined : json['allowConfigureLeasePeriod'],
        'showNotebookLink': !exists(json, 'showNotebookLink') ? undefined : json['showNotebookLink'],
        'showConversationsLink': !exists(json, 'showConversationsLink') ? undefined : json['showConversationsLink'],
        'showFilesLink': !exists(json, 'showFilesLink') ? undefined : json['showFilesLink'],
        'showTeamSiteLink': !exists(json, 'showTeamSiteLink') ? undefined : json['showTeamSiteLink'],
        'showPlannerLink': !exists(json, 'showPlannerLink') ? undefined : json['showPlannerLink'],
        'classifications': !exists(json, 'classifications') ? undefined : json['classifications'],
        'siteDesigns': !exists(json, 'siteDesigns') ? undefined : (json['siteDesigns'] as Array<any>).map(GuidModelFromJSON),
        'addGroupMemberType': !exists(json, 'addGroupMemberType') ? undefined : AddGroupMemberTypeFromJSON(json['addGroupMemberType']),
        'selectedPolicies': !exists(json, 'selectedPolicies') ? undefined : (json['selectedPolicies'] as Array<any>).map(BriefGroupPolicyFromJSON),
        'selectedLanguages': !exists(json, 'selectedLanguages') ? undefined : (json['selectedLanguages'] as Array<any>).map(StringModelFromJSON),
        'teamsSettings': !exists(json, 'teamsSettings') ? undefined : ServiceTeamsSettingsFromJSON(json['teamsSettings']),
        'groupNameConstructureSettings': !exists(json, 'groupNameConstructureSettings') ? undefined : GroupNameConstructureSettingsFromJSON(json['groupNameConstructureSettings']),
        'groupIdConstructureSettings': !exists(json, 'groupIdConstructureSettings') ? undefined : GroupIdConstructureSettingsFromJSON(json['groupIdConstructureSettings']),
        'enableHubSite': !exists(json, 'enableHubSite') ? undefined : json['enableHubSite'],
        'hubSiteActionType': !exists(json, 'hubSiteActionType') ? undefined : HubSiteActionTypeFromJSON(json['hubSiteActionType']),
        'associateHubSiteId': !exists(json, 'associateHubSiteId') ? undefined : json['associateHubSiteId'],
        'associateHubSiteTitle': !exists(json, 'associateHubSiteTitle') ? undefined : json['associateHubSiteTitle'],
        'isShowHubSiteSection': !exists(json, 'isShowHubSiteSection') ? undefined : json['isShowHubSiteSection'],
        'enableInstallApp': !exists(json, 'enableInstallApp') ? undefined : json['enableInstallApp'],
        'enableInstallPanel': !exists(json, 'enableInstallPanel') ? undefined : json['enableInstallPanel'],
        'enableCreateTeamFromScratch': !exists(json, 'enableCreateTeamFromScratch') ? undefined : json['enableCreateTeamFromScratch'],
        'enableCreateTeamFromExistTeam': !exists(json, 'enableCreateTeamFromExistTeam') ? undefined : json['enableCreateTeamFromExistTeam'],
        'enableCreateTeamFromIT': !exists(json, 'enableCreateTeamFromIT') ? undefined : json['enableCreateTeamFromIT'],
        'enableCreateTeamFromOwned': !exists(json, 'enableCreateTeamFromOwned') ? undefined : json['enableCreateTeamFromOwned'],
        'templateTeams': !exists(json, 'templateTeams') ? undefined : (json['templateTeams'] as Array<any>).map(GuidModelFromJSON),
        'defaultPrimaryContact': !exists(json, 'defaultPrimaryContact') ? undefined : ApiUserFromJSON(json['defaultPrimaryContact']),
        'defaultSecondaryContact': !exists(json, 'defaultSecondaryContact') ? undefined : ApiUserFromJSON(json['defaultSecondaryContact']),
        'defaultOwners': !exists(json, 'defaultOwners') ? undefined : (json['defaultOwners'] as Array<any>).map(ApiUserFromJSON),
        'defaultMembers': !exists(json, 'defaultMembers') ? undefined : (json['defaultMembers'] as Array<any>).map(ApiUserFromJSON),
        'defaultPolicy': !exists(json, 'defaultPolicy') ? undefined : json['defaultPolicy'],
        'defaultClassification': !exists(json, 'defaultClassification') ? undefined : json['defaultClassification'],
        'defaultLanguage': !exists(json, 'defaultLanguage') ? undefined : json['defaultLanguage'],
        'defaultSiteDesign': !exists(json, 'defaultSiteDesign') ? undefined : json['defaultSiteDesign'],
        'memberAssignBy': !exists(json, 'memberAssignBy') ? undefined : AssignByFromJSON(json['memberAssignBy']),
        'ownerAssignBy': !exists(json, 'ownerAssignBy') ? undefined : AssignByFromJSON(json['ownerAssignBy']),
        'privacyAssignBy': !exists(json, 'privacyAssignBy') ? undefined : AssignByFromJSON(json['privacyAssignBy']),
        'subscribeAssignBy': !exists(json, 'subscribeAssignBy') ? undefined : AssignByFromJSON(json['subscribeAssignBy']),
        'outsideSenderAssignBy': !exists(json, 'outsideSenderAssignBy') ? undefined : AssignByFromJSON(json['outsideSenderAssignBy']),
        'classificationAssignBy': !exists(json, 'classificationAssignBy') ? undefined : AssignByFromJSON(json['classificationAssignBy']),
        'languageAssignBy': !exists(json, 'languageAssignBy') ? undefined : AssignByFromJSON(json['languageAssignBy']),
        'secondaryContactAssignBy': !exists(json, 'secondaryContactAssignBy') ? undefined : AssignByFromJSON(json['secondaryContactAssignBy']),
        'primaryContactAssignBy': !exists(json, 'primaryContactAssignBy') ? undefined : AssignByFromJSON(json['primaryContactAssignBy']),
        'enableDynamicMembership': !exists(json, 'enableDynamicMembership') ? undefined : json['enableDynamicMembership'],
        'hideGroupMembershipAssignBy': !exists(json, 'hideGroupMembershipAssignBy') ? undefined : AssignByFromJSON(json['hideGroupMembershipAssignBy']),
        'policyAssignBy': !exists(json, 'policyAssignBy') ? undefined : AssignByFromJSON(json['policyAssignBy']),
        'siteDesignAssignBy': !exists(json, 'siteDesignAssignBy') ? undefined : AssignByFromJSON(json['siteDesignAssignBy']),
        'hubSiteAssignBy': !exists(json, 'hubSiteAssignBy') ? undefined : AssignByFromJSON(json['hubSiteAssignBy']),
        'multiGeoSetting': !exists(json, 'multiGeoSetting') ? undefined : MultiGeoSettingFromJSON(json['multiGeoSetting']),
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

export function CreateGroupServiceToJSON(value?: CreateGroupService | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenantId': value.tenantId,
        'enableTeams': value.enableTeams,
        'isPrivate': value.isPrivate,
        'enableSubscribe': value.enableSubscribe,
        'enableApplySiteDesign': value.enableApplySiteDesign,
        'enableOutsideSender': value.enableOutsideSender,
        'enableHideGroupMembership': value.enableHideGroupMembership,
        'enableClassification': value.enableClassification,
        'allowConfigureLeasePeriod': value.allowConfigureLeasePeriod,
        'showNotebookLink': value.showNotebookLink,
        'showConversationsLink': value.showConversationsLink,
        'showFilesLink': value.showFilesLink,
        'showTeamSiteLink': value.showTeamSiteLink,
        'showPlannerLink': value.showPlannerLink,
        'classifications': value.classifications,
        'siteDesigns': value.siteDesigns == null ? undefined : (value.siteDesigns as Array<any>).map(GuidModelToJSON),
        'addGroupMemberType': AddGroupMemberTypeToJSON(value.addGroupMemberType),
        'selectedPolicies': value.selectedPolicies == null ? undefined : (value.selectedPolicies as Array<any>).map(BriefGroupPolicyToJSON),
        'selectedLanguages': value.selectedLanguages == null ? undefined : (value.selectedLanguages as Array<any>).map(StringModelToJSON),
        'teamsSettings': ServiceTeamsSettingsToJSON(value.teamsSettings),
        'groupNameConstructureSettings': GroupNameConstructureSettingsToJSON(value.groupNameConstructureSettings),
        'groupIdConstructureSettings': GroupIdConstructureSettingsToJSON(value.groupIdConstructureSettings),
        'enableHubSite': value.enableHubSite,
        'hubSiteActionType': HubSiteActionTypeToJSON(value.hubSiteActionType),
        'associateHubSiteId': value.associateHubSiteId,
        'associateHubSiteTitle': value.associateHubSiteTitle,
        'isShowHubSiteSection': value.isShowHubSiteSection,
        'enableInstallApp': value.enableInstallApp,
        'enableInstallPanel': value.enableInstallPanel,
        'enableCreateTeamFromScratch': value.enableCreateTeamFromScratch,
        'enableCreateTeamFromExistTeam': value.enableCreateTeamFromExistTeam,
        'enableCreateTeamFromIT': value.enableCreateTeamFromIT,
        'enableCreateTeamFromOwned': value.enableCreateTeamFromOwned,
        'templateTeams': value.templateTeams == null ? undefined : (value.templateTeams as Array<any>).map(GuidModelToJSON),
        'defaultPrimaryContact': ApiUserToJSON(value.defaultPrimaryContact),
        'defaultSecondaryContact': ApiUserToJSON(value.defaultSecondaryContact),
        'defaultOwners': value.defaultOwners == null ? undefined : (value.defaultOwners as Array<any>).map(ApiUserToJSON),
        'defaultMembers': value.defaultMembers == null ? undefined : (value.defaultMembers as Array<any>).map(ApiUserToJSON),
        'defaultPolicy': value.defaultPolicy,
        'defaultClassification': value.defaultClassification,
        'defaultLanguage': value.defaultLanguage,
        'defaultSiteDesign': value.defaultSiteDesign,
        'memberAssignBy': AssignByToJSON(value.memberAssignBy),
        'ownerAssignBy': AssignByToJSON(value.ownerAssignBy),
        'privacyAssignBy': AssignByToJSON(value.privacyAssignBy),
        'subscribeAssignBy': AssignByToJSON(value.subscribeAssignBy),
        'outsideSenderAssignBy': AssignByToJSON(value.outsideSenderAssignBy),
        'classificationAssignBy': AssignByToJSON(value.classificationAssignBy),
        'languageAssignBy': AssignByToJSON(value.languageAssignBy),
        'secondaryContactAssignBy': AssignByToJSON(value.secondaryContactAssignBy),
        'primaryContactAssignBy': AssignByToJSON(value.primaryContactAssignBy),
        'enableDynamicMembership': value.enableDynamicMembership,
        'hideGroupMembershipAssignBy': AssignByToJSON(value.hideGroupMembershipAssignBy),
        'policyAssignBy': AssignByToJSON(value.policyAssignBy),
        'siteDesignAssignBy': AssignByToJSON(value.siteDesignAssignBy),
        'hubSiteAssignBy': AssignByToJSON(value.hubSiteAssignBy),
        'multiGeoSetting': MultiGeoSettingToJSON(value.multiGeoSetting),
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

