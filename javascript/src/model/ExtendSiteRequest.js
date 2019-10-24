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
import ApiDurationType from './ApiDurationType';
import RequestMetadata from './RequestMetadata';
import RequestStatus from './RequestStatus';
import ServiceType from './ServiceType';
import SiteLifecycleActionType from './SiteLifecycleActionType';

/**
 * The ExtendSiteRequest model module.
 * @module model/ExtendSiteRequest
 * @version 1.0
 */
class ExtendSiteRequest {
    /**
     * Constructs a new <code>ExtendSiteRequest</code>.
     * @alias module:model/ExtendSiteRequest
     */
    constructor() { 
        
        ExtendSiteRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExtendSiteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtendSiteRequest} obj Optional instance to populate.
     * @return {module:model/ExtendSiteRequest} The populated <code>ExtendSiteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtendSiteRequest();

            if (data.hasOwnProperty('extendDuration')) {
                obj['extendDuration'] = ApiClient.convertToType(data['extendDuration'], 'Number');
            }
            if (data.hasOwnProperty('extendDurationType')) {
                obj['extendDurationType'] = ApiDurationType.constructFromObject(data['extendDurationType']);
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = SiteLifecycleActionType.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('actionDescription')) {
                obj['actionDescription'] = ApiClient.convertToType(data['actionDescription'], 'String');
            }
            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
            }
            if (data.hasOwnProperty('siteUrl')) {
                obj['siteUrl'] = ApiClient.convertToType(data['siteUrl'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('notesToApprovers')) {
                obj['notesToApprovers'] = ApiClient.convertToType(data['notesToApprovers'], 'String');
            }
            if (data.hasOwnProperty('questionnaireId')) {
                obj['questionnaireId'] = ApiClient.convertToType(data['questionnaireId'], 'String');
            }
            if (data.hasOwnProperty('metadatas')) {
                obj['metadatas'] = ApiClient.convertToType(data['metadatas'], [RequestMetadata]);
            }
            if (data.hasOwnProperty('ticketNumber')) {
                obj['ticketNumber'] = ApiClient.convertToType(data['ticketNumber'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ServiceType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('typeDescription')) {
                obj['typeDescription'] = ApiClient.convertToType(data['typeDescription'], 'String');
            }
            if (data.hasOwnProperty('requester')) {
                obj['requester'] = ApiClient.convertToType(data['requester'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = RequestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('progressStatus')) {
                obj['progressStatus'] = ApiClient.convertToType(data['progressStatus'], 'Number');
            }
            if (data.hasOwnProperty('progressStatusDescription')) {
                obj['progressStatusDescription'] = ApiClient.convertToType(data['progressStatusDescription'], 'String');
            }
            if (data.hasOwnProperty('submittedTime')) {
                obj['submittedTime'] = ApiClient.convertToType(data['submittedTime'], 'Date');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
            }
            if (data.hasOwnProperty('createdTime')) {
                obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
            }
            if (data.hasOwnProperty('assignTo')) {
                obj['assignTo'] = ApiClient.convertToType(data['assignTo'], 'String');
            }
            if (data.hasOwnProperty('fullPath')) {
                obj['fullPath'] = ApiClient.convertToType(data['fullPath'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} extendDuration
 */
ExtendSiteRequest.prototype['extendDuration'] = undefined;

/**
 * @member {module:model/ApiDurationType} extendDurationType
 */
ExtendSiteRequest.prototype['extendDurationType'] = undefined;

/**
 * @member {module:model/SiteLifecycleActionType} action
 */
ExtendSiteRequest.prototype['action'] = undefined;

/**
 * @member {String} actionDescription
 */
ExtendSiteRequest.prototype['actionDescription'] = undefined;

/**
 * @member {String} siteId
 */
ExtendSiteRequest.prototype['siteId'] = undefined;

/**
 * @member {String} siteUrl
 */
ExtendSiteRequest.prototype['siteUrl'] = undefined;

/**
 * @member {String} id
 */
ExtendSiteRequest.prototype['id'] = undefined;

/**
 * @member {String} serviceId
 */
ExtendSiteRequest.prototype['serviceId'] = undefined;

/**
 * @member {String} department
 */
ExtendSiteRequest.prototype['department'] = undefined;

/**
 * @member {String} summary
 */
ExtendSiteRequest.prototype['summary'] = undefined;

/**
 * @member {String} notesToApprovers
 */
ExtendSiteRequest.prototype['notesToApprovers'] = undefined;

/**
 * @member {String} questionnaireId
 */
ExtendSiteRequest.prototype['questionnaireId'] = undefined;

/**
 * @member {Array.<module:model/RequestMetadata>} metadatas
 */
ExtendSiteRequest.prototype['metadatas'] = undefined;

/**
 * @member {Number} ticketNumber
 */
ExtendSiteRequest.prototype['ticketNumber'] = undefined;

/**
 * @member {module:model/ServiceType} type
 */
ExtendSiteRequest.prototype['type'] = undefined;

/**
 * @member {String} typeDescription
 */
ExtendSiteRequest.prototype['typeDescription'] = undefined;

/**
 * @member {String} requester
 */
ExtendSiteRequest.prototype['requester'] = undefined;

/**
 * @member {module:model/RequestStatus} status
 */
ExtendSiteRequest.prototype['status'] = undefined;

/**
 * @member {Number} progressStatus
 */
ExtendSiteRequest.prototype['progressStatus'] = undefined;

/**
 * @member {String} progressStatusDescription
 */
ExtendSiteRequest.prototype['progressStatusDescription'] = undefined;

/**
 * @member {Date} submittedTime
 */
ExtendSiteRequest.prototype['submittedTime'] = undefined;

/**
 * @member {Date} lastUpdated
 */
ExtendSiteRequest.prototype['lastUpdated'] = undefined;

/**
 * @member {Date} createdTime
 */
ExtendSiteRequest.prototype['createdTime'] = undefined;

/**
 * @member {String} assignTo
 */
ExtendSiteRequest.prototype['assignTo'] = undefined;

/**
 * @member {String} fullPath
 */
ExtendSiteRequest.prototype['fullPath'] = undefined;






export default ExtendSiteRequest;
