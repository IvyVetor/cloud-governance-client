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
 *
 */

import ApiClient from '../ApiClient';
import ApplyPolicyStatus from './ApplyPolicyStatus';
import AutoImportPhase from './AutoImportPhase';
import ClaimStatus from './ClaimStatus';
import LockSiteInfo from './LockSiteInfo';
import SiteProperty from './SiteProperty';
import SiteRecertificationProperty from './SiteRecertificationProperty';
import SiteStatus from './SiteStatus';
import SizeValue from './SizeValue';

/**
 * The SiteInfo model module.
 * @module model/SiteInfo
 * @version 1.0
 */
class SiteInfo {
    /**
     * Constructs a new <code>SiteInfo</code>.
     * @alias module:model/SiteInfo
     */
    constructor() { 
        
        SiteInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SiteInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SiteInfo} obj Optional instance to populate.
     * @return {module:model/SiteInfo} The populated <code>SiteInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SiteInfo();

            if (data.hasOwnProperty('fullUrl')) {
                obj['fullUrl'] = ApiClient.convertToType(data['fullUrl'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('hubSiteId')) {
                obj['hubSiteId'] = ApiClient.convertToType(data['hubSiteId'], 'String');
            }
            if (data.hasOwnProperty('isHubSite')) {
                obj['isHubSite'] = ApiClient.convertToType(data['isHubSite'], 'Boolean');
            }
            if (data.hasOwnProperty('hubSiteTitle')) {
                obj['hubSiteTitle'] = ApiClient.convertToType(data['hubSiteTitle'], 'String');
            }
            if (data.hasOwnProperty('webAppId')) {
                obj['webAppId'] = ApiClient.convertToType(data['webAppId'], 'String');
            }
            if (data.hasOwnProperty('isOnlineSite')) {
                obj['isOnlineSite'] = ApiClient.convertToType(data['isOnlineSite'], 'Boolean');
            }
            if (data.hasOwnProperty('primarySiteContact')) {
                obj['primarySiteContact'] = ApiClient.convertToType(data['primarySiteContact'], 'String');
            }
            if (data.hasOwnProperty('primarySiteContactIdentityName')) {
                obj['primarySiteContactIdentityName'] = ApiClient.convertToType(data['primarySiteContactIdentityName'], 'String');
            }
            if (data.hasOwnProperty('primarySiteContactEmail')) {
                obj['primarySiteContactEmail'] = ApiClient.convertToType(data['primarySiteContactEmail'], 'String');
            }
            if (data.hasOwnProperty('secondarySiteContact')) {
                obj['secondarySiteContact'] = ApiClient.convertToType(data['secondarySiteContact'], 'String');
            }
            if (data.hasOwnProperty('secondarySiteContactIdentityName')) {
                obj['secondarySiteContactIdentityName'] = ApiClient.convertToType(data['secondarySiteContactIdentityName'], 'String');
            }
            if (data.hasOwnProperty('secondarySiteContactEmail')) {
                obj['secondarySiteContactEmail'] = ApiClient.convertToType(data['secondarySiteContactEmail'], 'String');
            }
            if (data.hasOwnProperty('siteOwner')) {
                obj['siteOwner'] = ApiClient.convertToType(data['siteOwner'], 'String');
            }
            if (data.hasOwnProperty('siteOwnerEmail')) {
                obj['siteOwnerEmail'] = ApiClient.convertToType(data['siteOwnerEmail'], 'String');
            }
            if (data.hasOwnProperty('createdTime')) {
                obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = SiteStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('secondaryAdmin')) {
                obj['secondaryAdmin'] = ApiClient.convertToType(data['secondaryAdmin'], 'String');
            }
            if (data.hasOwnProperty('additionalAdmin')) {
                obj['additionalAdmin'] = ApiClient.convertToType(data['additionalAdmin'], 'String');
            }
            if (data.hasOwnProperty('additionalAdminEmail')) {
                obj['additionalAdminEmail'] = ApiClient.convertToType(data['additionalAdminEmail'], 'String');
            }
            if (data.hasOwnProperty('farmId')) {
                obj['farmId'] = ApiClient.convertToType(data['farmId'], 'String');
            }
            if (data.hasOwnProperty('modifiedTime')) {
                obj['modifiedTime'] = ApiClient.convertToType(data['modifiedTime'], 'Date');
            }
            if (data.hasOwnProperty('hostHeader')) {
                obj['hostHeader'] = ApiClient.convertToType(data['hostHeader'], 'String');
            }
            if (data.hasOwnProperty('rootWebId')) {
                obj['rootWebId'] = ApiClient.convertToType(data['rootWebId'], 'String');
            }
            if (data.hasOwnProperty('quotaTemplateName')) {
                obj['quotaTemplateName'] = ApiClient.convertToType(data['quotaTemplateName'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('sizeValue')) {
                obj['sizeValue'] = SizeValue.constructFromObject(data['sizeValue']);
            }
            if (data.hasOwnProperty('managedPath')) {
                obj['managedPath'] = ApiClient.convertToType(data['managedPath'], 'String');
            }
            if (data.hasOwnProperty('isDeleted')) {
                obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Number');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('contentDBName')) {
                obj['contentDBName'] = ApiClient.convertToType(data['contentDBName'], 'String');
            }
            if (data.hasOwnProperty('policyId')) {
                obj['policyId'] = ApiClient.convertToType(data['policyId'], 'String');
            }
            if (data.hasOwnProperty('lifecycleActionLockId')) {
                obj['lifecycleActionLockId'] = ApiClient.convertToType(data['lifecycleActionLockId'], 'String');
            }
            if (data.hasOwnProperty('autoLifecycleLockId')) {
                obj['autoLifecycleLockId'] = ApiClient.convertToType(data['autoLifecycleLockId'], 'String');
            }
            if (data.hasOwnProperty('siteTemplate')) {
                obj['siteTemplate'] = ApiClient.convertToType(data['siteTemplate'], 'String');
            }
            if (data.hasOwnProperty('siteTemplateTitle')) {
                obj['siteTemplateTitle'] = ApiClient.convertToType(data['siteTemplateTitle'], 'String');
            }
            if (data.hasOwnProperty('serverRelativeUrl')) {
                obj['serverRelativeUrl'] = ApiClient.convertToType(data['serverRelativeUrl'], 'String');
            }
            if (data.hasOwnProperty('timeLastChecked')) {
                obj['timeLastChecked'] = ApiClient.convertToType(data['timeLastChecked'], 'Date');
            }
            if (data.hasOwnProperty('lastAccessedTime')) {
                obj['lastAccessedTime'] = ApiClient.convertToType(data['lastAccessedTime'], 'Date');
            }
            if (data.hasOwnProperty('noAccessThreshold')) {
                obj['noAccessThreshold'] = ApiClient.convertToType(data['noAccessThreshold'], 'Date');
            }
            if (data.hasOwnProperty('expiredThreshold')) {
                obj['expiredThreshold'] = ApiClient.convertToType(data['expiredThreshold'], 'Date');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = SiteProperty.constructFromObject(data['properties']);
            }
            if (data.hasOwnProperty('quotaSize')) {
                obj['quotaSize'] = ApiClient.convertToType(data['quotaSize'], 'Number');
            }
            if (data.hasOwnProperty('recurrenceProperties')) {
                obj['recurrenceProperties'] = SiteRecertificationProperty.constructFromObject(data['recurrenceProperties']);
            }
            if (data.hasOwnProperty('claimStatus')) {
                obj['claimStatus'] = ClaimStatus.constructFromObject(data['claimStatus']);
            }
            if (data.hasOwnProperty('lockProperties')) {
                obj['lockProperties'] = LockSiteInfo.constructFromObject(data['lockProperties']);
            }
            if (data.hasOwnProperty('enableManualArchive')) {
                obj['enableManualArchive'] = ApiClient.convertToType(data['enableManualArchive'], 'Boolean');
            }
            if (data.hasOwnProperty('phase')) {
                obj['phase'] = ApiClient.convertToType(data['phase'], 'Number');
            }
            if (data.hasOwnProperty('phaseTime')) {
                obj['phaseTime'] = ApiClient.convertToType(data['phaseTime'], 'Date');
            }
            if (data.hasOwnProperty('autoImportProfileId')) {
                obj['autoImportProfileId'] = ApiClient.convertToType(data['autoImportProfileId'], 'String');
            }
            if (data.hasOwnProperty('sharingCapabilities')) {
                obj['sharingCapabilities'] = ApiClient.convertToType(data['sharingCapabilities'], 'Number');
            }
            if (data.hasOwnProperty('accessThresholdExpirationDate')) {
                obj['accessThresholdExpirationDate'] = ApiClient.convertToType(data['accessThresholdExpirationDate'], 'Date');
            }
            if (data.hasOwnProperty('leasePeriodExpirationDate')) {
                obj['leasePeriodExpirationDate'] = ApiClient.convertToType(data['leasePeriodExpirationDate'], 'Date');
            }
            if (data.hasOwnProperty('permissionRecertificationStatus')) {
                obj['permissionRecertificationStatus'] = ApiClient.convertToType(data['permissionRecertificationStatus'], 'Number');
            }
            if (data.hasOwnProperty('ownershipRecertificationStatus')) {
                obj['ownershipRecertificationStatus'] = ApiClient.convertToType(data['ownershipRecertificationStatus'], 'Number');
            }
            if (data.hasOwnProperty('metadataRecertificationStatus')) {
                obj['metadataRecertificationStatus'] = ApiClient.convertToType(data['metadataRecertificationStatus'], 'Number');
            }
            if (data.hasOwnProperty('sharingCapabilitiesDesc')) {
                obj['sharingCapabilitiesDesc'] = ApiClient.convertToType(data['sharingCapabilitiesDesc'], 'String');
            }
            if (data.hasOwnProperty('extensionProperties')) {
                obj['extensionProperties'] = ApiClient.convertToType(data['extensionProperties'], {'String': 'String'});
            }
            if (data.hasOwnProperty('phaseTimeDisplay')) {
                obj['phaseTimeDisplay'] = ApiClient.convertToType(data['phaseTimeDisplay'], 'String');
            }
            if (data.hasOwnProperty('currentRenewers')) {
                obj['currentRenewers'] = ApiClient.convertToType(data['currentRenewers'], 'String');
            }
            if (data.hasOwnProperty('autoImportProfileName')) {
                obj['autoImportProfileName'] = ApiClient.convertToType(data['autoImportProfileName'], 'String');
            }
            if (data.hasOwnProperty('phaseDisplay')) {
                obj['phaseDisplay'] = AutoImportPhase.constructFromObject(data['phaseDisplay']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('policyName')) {
                obj['policyName'] = ApiClient.convertToType(data['policyName'], 'String');
            }
            if (data.hasOwnProperty('maxDepth')) {
                obj['maxDepth'] = ApiClient.convertToType(data['maxDepth'], 'Number');
            }
            if (data.hasOwnProperty('quotaSizeValue')) {
                obj['quotaSizeValue'] = ApiClient.convertToType(data['quotaSizeValue'], 'Number');
            }
            if (data.hasOwnProperty('applyPolicyStatus')) {
                obj['applyPolicyStatus'] = ApplyPolicyStatus.constructFromObject(data['applyPolicyStatus']);
            }
            if (data.hasOwnProperty('appliedDeploymentPlans')) {
                obj['appliedDeploymentPlans'] = ApiClient.convertToType(data['appliedDeploymentPlans'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} fullUrl
 */
SiteInfo.prototype['fullUrl'] = undefined;

/**
 * @member {String} id
 */
SiteInfo.prototype['id'] = undefined;

/**
 * @member {String} hubSiteId
 */
SiteInfo.prototype['hubSiteId'] = undefined;

/**
 * @member {Boolean} isHubSite
 */
SiteInfo.prototype['isHubSite'] = undefined;

/**
 * @member {String} hubSiteTitle
 */
SiteInfo.prototype['hubSiteTitle'] = undefined;

/**
 * @member {String} webAppId
 */
SiteInfo.prototype['webAppId'] = undefined;

/**
 * @member {Boolean} isOnlineSite
 */
SiteInfo.prototype['isOnlineSite'] = undefined;

/**
 * @member {String} primarySiteContact
 */
SiteInfo.prototype['primarySiteContact'] = undefined;

/**
 * @member {String} primarySiteContactIdentityName
 */
SiteInfo.prototype['primarySiteContactIdentityName'] = undefined;

/**
 * @member {String} primarySiteContactEmail
 */
SiteInfo.prototype['primarySiteContactEmail'] = undefined;

/**
 * @member {String} secondarySiteContact
 */
SiteInfo.prototype['secondarySiteContact'] = undefined;

/**
 * @member {String} secondarySiteContactIdentityName
 */
SiteInfo.prototype['secondarySiteContactIdentityName'] = undefined;

/**
 * @member {String} secondarySiteContactEmail
 */
SiteInfo.prototype['secondarySiteContactEmail'] = undefined;

/**
 * @member {String} siteOwner
 */
SiteInfo.prototype['siteOwner'] = undefined;

/**
 * @member {String} siteOwnerEmail
 */
SiteInfo.prototype['siteOwnerEmail'] = undefined;

/**
 * @member {Date} createdTime
 */
SiteInfo.prototype['createdTime'] = undefined;

/**
 * @member {module:model/SiteStatus} status
 */
SiteInfo.prototype['status'] = undefined;

/**
 * @member {String} secondaryAdmin
 */
SiteInfo.prototype['secondaryAdmin'] = undefined;

/**
 * @member {String} additionalAdmin
 */
SiteInfo.prototype['additionalAdmin'] = undefined;

/**
 * @member {String} additionalAdminEmail
 */
SiteInfo.prototype['additionalAdminEmail'] = undefined;

/**
 * @member {String} farmId
 */
SiteInfo.prototype['farmId'] = undefined;

/**
 * @member {Date} modifiedTime
 */
SiteInfo.prototype['modifiedTime'] = undefined;

/**
 * @member {String} hostHeader
 */
SiteInfo.prototype['hostHeader'] = undefined;

/**
 * @member {String} rootWebId
 */
SiteInfo.prototype['rootWebId'] = undefined;

/**
 * @member {String} quotaTemplateName
 */
SiteInfo.prototype['quotaTemplateName'] = undefined;

/**
 * @member {Number} size
 */
SiteInfo.prototype['size'] = undefined;

/**
 * @member {module:model/SizeValue} sizeValue
 */
SiteInfo.prototype['sizeValue'] = undefined;

/**
 * @member {String} managedPath
 */
SiteInfo.prototype['managedPath'] = undefined;

/**
 * @member {Number} isDeleted
 */
SiteInfo.prototype['isDeleted'] = undefined;

/**
 * @member {String} requestId
 */
SiteInfo.prototype['requestId'] = undefined;

/**
 * @member {String} contentDBName
 */
SiteInfo.prototype['contentDBName'] = undefined;

/**
 * @member {String} policyId
 */
SiteInfo.prototype['policyId'] = undefined;

/**
 * @member {String} lifecycleActionLockId
 */
SiteInfo.prototype['lifecycleActionLockId'] = undefined;

/**
 * @member {String} autoLifecycleLockId
 */
SiteInfo.prototype['autoLifecycleLockId'] = undefined;

/**
 * @member {String} siteTemplate
 */
SiteInfo.prototype['siteTemplate'] = undefined;

/**
 * @member {String} siteTemplateTitle
 */
SiteInfo.prototype['siteTemplateTitle'] = undefined;

/**
 * @member {String} serverRelativeUrl
 */
SiteInfo.prototype['serverRelativeUrl'] = undefined;

/**
 * @member {Date} timeLastChecked
 */
SiteInfo.prototype['timeLastChecked'] = undefined;

/**
 * @member {Date} lastAccessedTime
 */
SiteInfo.prototype['lastAccessedTime'] = undefined;

/**
 * @member {Date} noAccessThreshold
 */
SiteInfo.prototype['noAccessThreshold'] = undefined;

/**
 * @member {Date} expiredThreshold
 */
SiteInfo.prototype['expiredThreshold'] = undefined;

/**
 * @member {module:model/SiteProperty} properties
 */
SiteInfo.prototype['properties'] = undefined;

/**
 * @member {Number} quotaSize
 */
SiteInfo.prototype['quotaSize'] = undefined;

/**
 * @member {module:model/SiteRecertificationProperty} recurrenceProperties
 */
SiteInfo.prototype['recurrenceProperties'] = undefined;

/**
 * @member {module:model/ClaimStatus} claimStatus
 */
SiteInfo.prototype['claimStatus'] = undefined;

/**
 * @member {module:model/LockSiteInfo} lockProperties
 */
SiteInfo.prototype['lockProperties'] = undefined;

/**
 * @member {Boolean} enableManualArchive
 */
SiteInfo.prototype['enableManualArchive'] = undefined;

/**
 * @member {Number} phase
 */
SiteInfo.prototype['phase'] = undefined;

/**
 * @member {Date} phaseTime
 */
SiteInfo.prototype['phaseTime'] = undefined;

/**
 * @member {String} autoImportProfileId
 */
SiteInfo.prototype['autoImportProfileId'] = undefined;

/**
 * @member {Number} sharingCapabilities
 */
SiteInfo.prototype['sharingCapabilities'] = undefined;

/**
 * @member {Date} accessThresholdExpirationDate
 */
SiteInfo.prototype['accessThresholdExpirationDate'] = undefined;

/**
 * @member {Date} leasePeriodExpirationDate
 */
SiteInfo.prototype['leasePeriodExpirationDate'] = undefined;

/**
 * @member {Number} permissionRecertificationStatus
 */
SiteInfo.prototype['permissionRecertificationStatus'] = undefined;

/**
 * @member {Number} ownershipRecertificationStatus
 */
SiteInfo.prototype['ownershipRecertificationStatus'] = undefined;

/**
 * @member {Number} metadataRecertificationStatus
 */
SiteInfo.prototype['metadataRecertificationStatus'] = undefined;

/**
 * @member {String} sharingCapabilitiesDesc
 */
SiteInfo.prototype['sharingCapabilitiesDesc'] = undefined;

/**
 * @member {Object.<String, String>} extensionProperties
 */
SiteInfo.prototype['extensionProperties'] = undefined;

/**
 * @member {String} phaseTimeDisplay
 */
SiteInfo.prototype['phaseTimeDisplay'] = undefined;

/**
 * @member {String} currentRenewers
 */
SiteInfo.prototype['currentRenewers'] = undefined;

/**
 * @member {String} autoImportProfileName
 */
SiteInfo.prototype['autoImportProfileName'] = undefined;

/**
 * @member {module:model/AutoImportPhase} phaseDisplay
 */
SiteInfo.prototype['phaseDisplay'] = undefined;

/**
 * @member {String} title
 */
SiteInfo.prototype['title'] = undefined;

/**
 * @member {String} department
 */
SiteInfo.prototype['department'] = undefined;

/**
 * @member {String} description
 */
SiteInfo.prototype['description'] = undefined;

/**
 * @member {String} policyName
 */
SiteInfo.prototype['policyName'] = undefined;

/**
 * @member {Number} maxDepth
 */
SiteInfo.prototype['maxDepth'] = undefined;

/**
 * @member {Number} quotaSizeValue
 */
SiteInfo.prototype['quotaSizeValue'] = undefined;

/**
 * @member {module:model/ApplyPolicyStatus} applyPolicyStatus
 */
SiteInfo.prototype['applyPolicyStatus'] = undefined;

/**
 * @member {String} appliedDeploymentPlans
 */
SiteInfo.prototype['appliedDeploymentPlans'] = undefined;

/**
 * @member {String} location
 */
SiteInfo.prototype['location'] = undefined;






export default SiteInfo;
