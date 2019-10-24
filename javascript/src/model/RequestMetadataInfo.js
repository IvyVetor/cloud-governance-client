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
 * The RequestMetadataInfo model module.
 * @module model/RequestMetadataInfo
 * @version 1.0
 */
class RequestMetadataInfo {
    /**
     * Constructs a new <code>RequestMetadataInfo</code>.
     * @alias module:model/RequestMetadataInfo
     */
    constructor() { 
        
        RequestMetadataInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestMetadataInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestMetadataInfo} obj Optional instance to populate.
     * @return {module:model/RequestMetadataInfo} The populated <code>RequestMetadataInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestMetadataInfo();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('tagName')) {
                obj['tagName'] = ApiClient.convertToType(data['tagName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fieldType')) {
                obj['fieldType'] = ApiClient.convertToType(data['fieldType'], 'Number');
            }
            if (data.hasOwnProperty('defaultValue')) {
                obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'String');
            }
            if (data.hasOwnProperty('metadataValues')) {
                obj['metadataValues'] = ApiClient.convertToType(data['metadataValues'], 'String');
            }
            if (data.hasOwnProperty('displayValues')) {
                obj['displayValues'] = ApiClient.convertToType(data['displayValues'], 'String');
            }
            if (data.hasOwnProperty('valueConfig')) {
                obj['valueConfig'] = ApiClient.convertToType(data['valueConfig'], 'Number');
            }
            if (data.hasOwnProperty('displayInReportType')) {
                obj['displayInReportType'] = ApiClient.convertToType(data['displayInReportType'], 'Number');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'Number');
            }
            if (data.hasOwnProperty('enableTextValidation')) {
                obj['enableTextValidation'] = ApiClient.convertToType(data['enableTextValidation'], 'Boolean');
            }
            if (data.hasOwnProperty('textValidationRuleId')) {
                obj['textValidationRuleId'] = ApiClient.convertToType(data['textValidationRuleId'], 'String');
            }
            if (data.hasOwnProperty('orginalValue')) {
                obj['orginalValue'] = ApiClient.convertToType(data['orginalValue'], 'String');
            }
            if (data.hasOwnProperty('orginalDisplayValue')) {
                obj['orginalDisplayValue'] = ApiClient.convertToType(data['orginalDisplayValue'], 'String');
            }
            if (data.hasOwnProperty('isNewMetadata')) {
                obj['isNewMetadata'] = ApiClient.convertToType(data['isNewMetadata'], 'Boolean');
            }
            if (data.hasOwnProperty('originalTargetUserDisplayName')) {
                obj['originalTargetUserDisplayName'] = ApiClient.convertToType(data['originalTargetUserDisplayName'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
RequestMetadataInfo.prototype['id'] = undefined;

/**
 * @member {String} tagName
 */
RequestMetadataInfo.prototype['tagName'] = undefined;

/**
 * @member {String} description
 */
RequestMetadataInfo.prototype['description'] = undefined;

/**
 * @member {Number} fieldType
 */
RequestMetadataInfo.prototype['fieldType'] = undefined;

/**
 * @member {String} defaultValue
 */
RequestMetadataInfo.prototype['defaultValue'] = undefined;

/**
 * @member {String} metadataValues
 */
RequestMetadataInfo.prototype['metadataValues'] = undefined;

/**
 * @member {String} displayValues
 */
RequestMetadataInfo.prototype['displayValues'] = undefined;

/**
 * @member {Number} valueConfig
 */
RequestMetadataInfo.prototype['valueConfig'] = undefined;

/**
 * @member {Number} displayInReportType
 */
RequestMetadataInfo.prototype['displayInReportType'] = undefined;

/**
 * @member {Number} action
 */
RequestMetadataInfo.prototype['action'] = undefined;

/**
 * @member {Boolean} enableTextValidation
 */
RequestMetadataInfo.prototype['enableTextValidation'] = undefined;

/**
 * @member {String} textValidationRuleId
 */
RequestMetadataInfo.prototype['textValidationRuleId'] = undefined;

/**
 * @member {String} orginalValue
 */
RequestMetadataInfo.prototype['orginalValue'] = undefined;

/**
 * @member {String} orginalDisplayValue
 */
RequestMetadataInfo.prototype['orginalDisplayValue'] = undefined;

/**
 * @member {Boolean} isNewMetadata
 */
RequestMetadataInfo.prototype['isNewMetadata'] = undefined;

/**
 * @member {String} originalTargetUserDisplayName
 */
RequestMetadataInfo.prototype['originalTargetUserDisplayName'] = undefined;

/**
 * @member {String} tenantId
 */
RequestMetadataInfo.prototype['tenantId'] = undefined;






export default RequestMetadataInfo;
