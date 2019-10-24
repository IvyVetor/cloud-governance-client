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
import RequestMetadata from './RequestMetadata';
import RequestStatus from './RequestStatus';
import ServiceType from './ServiceType';

/**
 * The ChangeGroupQuotaRequest model module.
 * @module model/ChangeGroupQuotaRequest
 * @version 1.0
 */
class ChangeGroupQuotaRequest {
    /**
     * Constructs a new <code>ChangeGroupQuotaRequest</code>.
     * @alias module:model/ChangeGroupQuotaRequest
     */
    constructor() { 
        
        ChangeGroupQuotaRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeGroupQuotaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeGroupQuotaRequest} obj Optional instance to populate.
     * @return {module:model/ChangeGroupQuotaRequest} The populated <code>ChangeGroupQuotaRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeGroupQuotaRequest();

            if (data.hasOwnProperty('groupQuotaSize')) {
                obj['groupQuotaSize'] = ApiClient.convertToType(data['groupQuotaSize'], 'Number');
            }
            if (data.hasOwnProperty('originalQuotaSize')) {
                obj['originalQuotaSize'] = ApiClient.convertToType(data['originalQuotaSize'], 'Number');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
            }
            if (data.hasOwnProperty('groupName')) {
                obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
            }
            if (data.hasOwnProperty('groupEmail')) {
                obj['groupEmail'] = ApiClient.convertToType(data['groupEmail'], 'String');
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
 * @member {Number} groupQuotaSize
 */
ChangeGroupQuotaRequest.prototype['groupQuotaSize'] = undefined;

/**
 * @member {Number} originalQuotaSize
 */
ChangeGroupQuotaRequest.prototype['originalQuotaSize'] = undefined;

/**
 * @member {String} groupId
 */
ChangeGroupQuotaRequest.prototype['groupId'] = undefined;

/**
 * @member {String} groupName
 */
ChangeGroupQuotaRequest.prototype['groupName'] = undefined;

/**
 * @member {String} groupEmail
 */
ChangeGroupQuotaRequest.prototype['groupEmail'] = undefined;

/**
 * @member {String} id
 */
ChangeGroupQuotaRequest.prototype['id'] = undefined;

/**
 * @member {String} serviceId
 */
ChangeGroupQuotaRequest.prototype['serviceId'] = undefined;

/**
 * @member {String} department
 */
ChangeGroupQuotaRequest.prototype['department'] = undefined;

/**
 * @member {String} summary
 */
ChangeGroupQuotaRequest.prototype['summary'] = undefined;

/**
 * @member {String} notesToApprovers
 */
ChangeGroupQuotaRequest.prototype['notesToApprovers'] = undefined;

/**
 * @member {String} questionnaireId
 */
ChangeGroupQuotaRequest.prototype['questionnaireId'] = undefined;

/**
 * @member {Array.<module:model/RequestMetadata>} metadatas
 */
ChangeGroupQuotaRequest.prototype['metadatas'] = undefined;

/**
 * @member {Number} ticketNumber
 */
ChangeGroupQuotaRequest.prototype['ticketNumber'] = undefined;

/**
 * @member {module:model/ServiceType} type
 */
ChangeGroupQuotaRequest.prototype['type'] = undefined;

/**
 * @member {String} typeDescription
 */
ChangeGroupQuotaRequest.prototype['typeDescription'] = undefined;

/**
 * @member {String} requester
 */
ChangeGroupQuotaRequest.prototype['requester'] = undefined;

/**
 * @member {module:model/RequestStatus} status
 */
ChangeGroupQuotaRequest.prototype['status'] = undefined;

/**
 * @member {Number} progressStatus
 */
ChangeGroupQuotaRequest.prototype['progressStatus'] = undefined;

/**
 * @member {String} progressStatusDescription
 */
ChangeGroupQuotaRequest.prototype['progressStatusDescription'] = undefined;

/**
 * @member {Date} submittedTime
 */
ChangeGroupQuotaRequest.prototype['submittedTime'] = undefined;

/**
 * @member {Date} lastUpdated
 */
ChangeGroupQuotaRequest.prototype['lastUpdated'] = undefined;

/**
 * @member {Date} createdTime
 */
ChangeGroupQuotaRequest.prototype['createdTime'] = undefined;

/**
 * @member {String} assignTo
 */
ChangeGroupQuotaRequest.prototype['assignTo'] = undefined;

/**
 * @member {String} fullPath
 */
ChangeGroupQuotaRequest.prototype['fullPath'] = undefined;






export default ChangeGroupQuotaRequest;
