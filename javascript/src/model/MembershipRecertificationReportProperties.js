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

/**
 * The MembershipRecertificationReportProperties model module.
 * @module model/MembershipRecertificationReportProperties
 * @version 1.0
 */
class MembershipRecertificationReportProperties {
    /**
     * Constructs a new <code>MembershipRecertificationReportProperties</code>.
     * @alias module:model/MembershipRecertificationReportProperties
     */
    constructor() { 
        
        MembershipRecertificationReportProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MembershipRecertificationReportProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MembershipRecertificationReportProperties} obj Optional instance to populate.
     * @return {module:model/MembershipRecertificationReportProperties} The populated <code>MembershipRecertificationReportProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MembershipRecertificationReportProperties();

            if (data.hasOwnProperty('o365TenantId')) {
                obj['o365TenantId'] = ApiClient.convertToType(data['o365TenantId'], 'String');
            }
            if (data.hasOwnProperty('isDynamicMembership')) {
                obj['isDynamicMembership'] = ApiClient.convertToType(data['isDynamicMembership'], 'Boolean');
            }
            if (data.hasOwnProperty('enableRecertifyOwners')) {
                obj['enableRecertifyOwners'] = ApiClient.convertToType(data['enableRecertifyOwners'], 'Boolean');
            }
            if (data.hasOwnProperty('enableRecertifyMembers')) {
                obj['enableRecertifyMembers'] = ApiClient.convertToType(data['enableRecertifyMembers'], 'Boolean');
            }
            if (data.hasOwnProperty('objectId')) {
                obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
            }
            if (data.hasOwnProperty('objectName')) {
                obj['objectName'] = ApiClient.convertToType(data['objectName'], 'String');
            }
            if (data.hasOwnProperty('isAllowedReassign')) {
                obj['isAllowedReassign'] = ApiClient.convertToType(data['isAllowedReassign'], 'Boolean');
            }
            if (data.hasOwnProperty('reportGeneratedTime')) {
                obj['reportGeneratedTime'] = ApiClient.convertToType(data['reportGeneratedTime'], 'Date');
            }
            if (data.hasOwnProperty('requestSummary')) {
                obj['requestSummary'] = ApiClient.convertToType(data['requestSummary'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} o365TenantId
 */
MembershipRecertificationReportProperties.prototype['o365TenantId'] = undefined;

/**
 * @member {Boolean} isDynamicMembership
 */
MembershipRecertificationReportProperties.prototype['isDynamicMembership'] = undefined;

/**
 * @member {Boolean} enableRecertifyOwners
 */
MembershipRecertificationReportProperties.prototype['enableRecertifyOwners'] = undefined;

/**
 * @member {Boolean} enableRecertifyMembers
 */
MembershipRecertificationReportProperties.prototype['enableRecertifyMembers'] = undefined;

/**
 * @member {String} objectId
 */
MembershipRecertificationReportProperties.prototype['objectId'] = undefined;

/**
 * @member {String} objectName
 */
MembershipRecertificationReportProperties.prototype['objectName'] = undefined;

/**
 * @member {Boolean} isAllowedReassign
 */
MembershipRecertificationReportProperties.prototype['isAllowedReassign'] = undefined;

/**
 * @member {Date} reportGeneratedTime
 */
MembershipRecertificationReportProperties.prototype['reportGeneratedTime'] = undefined;

/**
 * @member {String} requestSummary
 */
MembershipRecertificationReportProperties.prototype['requestSummary'] = undefined;






export default MembershipRecertificationReportProperties;
