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
 * The RecertificationReportProperties model module.
 * @module model/RecertificationReportProperties
 * @version 1.0
 */
class RecertificationReportProperties {
    /**
     * Constructs a new <code>RecertificationReportProperties</code>.
     * @alias module:model/RecertificationReportProperties
     */
    constructor() { 
        
        RecertificationReportProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecertificationReportProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecertificationReportProperties} obj Optional instance to populate.
     * @return {module:model/RecertificationReportProperties} The populated <code>RecertificationReportProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecertificationReportProperties();

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
 * @member {String} objectId
 */
RecertificationReportProperties.prototype['objectId'] = undefined;

/**
 * @member {String} objectName
 */
RecertificationReportProperties.prototype['objectName'] = undefined;

/**
 * @member {Boolean} isAllowedReassign
 */
RecertificationReportProperties.prototype['isAllowedReassign'] = undefined;

/**
 * @member {Date} reportGeneratedTime
 */
RecertificationReportProperties.prototype['reportGeneratedTime'] = undefined;

/**
 * @member {String} requestSummary
 */
RecertificationReportProperties.prototype['requestSummary'] = undefined;






export default RecertificationReportProperties;
