/**
 * Cloud Governance Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiUser', 'model/AssignBy', 'model/CommonStatus', 'model/CustomActionSettings', 'model/CustomMetadata', 'model/DeploymentManagerPlanSettings', 'model/HubSiteSettings', 'model/IntModel', 'model/MultiGeoSerivceSetting', 'model/PermissionSettings', 'model/PolicyRef', 'model/PolicyWithTemplates', 'model/RootSiteWithManagedPaths', 'model/ServiceScopeSettings', 'model/ServiceType', 'model/SiteLeasePeriodServiceSettings', 'model/SiteTitleSetting', 'model/SiteUrlSetting', 'model/TemplateWithPermissions', 'model/YammerGroupServiceSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiUser'), require('./AssignBy'), require('./CommonStatus'), require('./CustomActionSettings'), require('./CustomMetadata'), require('./DeploymentManagerPlanSettings'), require('./HubSiteSettings'), require('./IntModel'), require('./MultiGeoSerivceSetting'), require('./PermissionSettings'), require('./PolicyRef'), require('./PolicyWithTemplates'), require('./RootSiteWithManagedPaths'), require('./ServiceScopeSettings'), require('./ServiceType'), require('./SiteLeasePeriodServiceSettings'), require('./SiteTitleSetting'), require('./SiteUrlSetting'), require('./TemplateWithPermissions'), require('./YammerGroupServiceSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.CgClient) {
      root.CgClient = {};
    }
    root.CgClient.CreateSiteService = factory(root.CgClient.ApiClient, root.CgClient.ApiUser, root.CgClient.AssignBy, root.CgClient.CommonStatus, root.CgClient.CustomActionSettings, root.CgClient.CustomMetadata, root.CgClient.DeploymentManagerPlanSettings, root.CgClient.HubSiteSettings, root.CgClient.IntModel, root.CgClient.MultiGeoSerivceSetting, root.CgClient.PermissionSettings, root.CgClient.PolicyRef, root.CgClient.PolicyWithTemplates, root.CgClient.RootSiteWithManagedPaths, root.CgClient.ServiceScopeSettings, root.CgClient.ServiceType, root.CgClient.SiteLeasePeriodServiceSettings, root.CgClient.SiteTitleSetting, root.CgClient.SiteUrlSetting, root.CgClient.TemplateWithPermissions, root.CgClient.YammerGroupServiceSettings);
  }
}(this, function(ApiClient, ApiUser, AssignBy, CommonStatus, CustomActionSettings, CustomMetadata, DeploymentManagerPlanSettings, HubSiteSettings, IntModel, MultiGeoSerivceSetting, PermissionSettings, PolicyRef, PolicyWithTemplates, RootSiteWithManagedPaths, ServiceScopeSettings, ServiceType, SiteLeasePeriodServiceSettings, SiteTitleSetting, SiteUrlSetting, TemplateWithPermissions, YammerGroupServiceSettings) {
  'use strict';



  /**
   * The CreateSiteService model module.
   * @module model/CreateSiteService
   * @version 1.0
   */

  /**
   * Constructs a new <code>CreateSiteService</code>.
   * @alias module:model/CreateSiteService
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CreateSiteService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSiteService} obj Optional instance to populate.
   * @return {module:model/CreateSiteService} The populated <code>CreateSiteService</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('scopeSettings')) {
        obj['scopeSettings'] = ServiceScopeSettings.constructFromObject(data['scopeSettings']);
      }
      if (data.hasOwnProperty('adminCenterUrl')) {
        obj['adminCenterUrl'] = ApiClient.convertToType(data['adminCenterUrl'], 'String');
      }
      if (data.hasOwnProperty('siteLanguages')) {
        obj['siteLanguages'] = ApiClient.convertToType(data['siteLanguages'], [IntModel]);
      }
      if (data.hasOwnProperty('rootSiteAndManagedPaths')) {
        obj['rootSiteAndManagedPaths'] = ApiClient.convertToType(data['rootSiteAndManagedPaths'], [RootSiteWithManagedPaths]);
      }
      if (data.hasOwnProperty('siteUrlSetting')) {
        obj['siteUrlSetting'] = SiteUrlSetting.constructFromObject(data['siteUrlSetting']);
      }
      if (data.hasOwnProperty('multiGeoSetting')) {
        obj['multiGeoSetting'] = MultiGeoSerivceSetting.constructFromObject(data['multiGeoSetting']);
      }
      if (data.hasOwnProperty('siteTitleSetting')) {
        obj['siteTitleSetting'] = SiteTitleSetting.constructFromObject(data['siteTitleSetting']);
      }
      if (data.hasOwnProperty('policies')) {
        obj['policies'] = ApiClient.convertToType(data['policies'], [PolicyRef]);
      }
      if (data.hasOwnProperty('deploymentManagerPlanSettings')) {
        obj['deploymentManagerPlanSettings'] = DeploymentManagerPlanSettings.constructFromObject(data['deploymentManagerPlanSettings']);
      }
      if (data.hasOwnProperty('policyIdsAndTemplates')) {
        obj['policyIdsAndTemplates'] = ApiClient.convertToType(data['policyIdsAndTemplates'], [PolicyWithTemplates]);
      }
      if (data.hasOwnProperty('templateIdsAndPermissions')) {
        obj['templateIdsAndPermissions'] = ApiClient.convertToType(data['templateIdsAndPermissions'], [TemplateWithPermissions]);
      }
      if (data.hasOwnProperty('permissionSettings')) {
        obj['permissionSettings'] = PermissionSettings.constructFromObject(data['permissionSettings']);
      }
      if (data.hasOwnProperty('leasePeriodSettings')) {
        obj['leasePeriodSettings'] = SiteLeasePeriodServiceSettings.constructFromObject(data['leasePeriodSettings']);
      }
      if (data.hasOwnProperty('timeZones')) {
        obj['timeZones'] = ApiClient.convertToType(data['timeZones'], [IntModel]);
      }
      if (data.hasOwnProperty('yammerGroupSettings')) {
        obj['yammerGroupSettings'] = YammerGroupServiceSettings.constructFromObject(data['yammerGroupSettings']);
      }
      if (data.hasOwnProperty('classifications')) {
        obj['classifications'] = ApiClient.convertToType(data['classifications'], ['String']);
      }
      if (data.hasOwnProperty('hubSiteSettings')) {
        obj['hubSiteSettings'] = HubSiteSettings.constructFromObject(data['hubSiteSettings']);
      }
      if (data.hasOwnProperty('enabledCustomTemplate')) {
        obj['enabledCustomTemplate'] = ApiClient.convertToType(data['enabledCustomTemplate'], 'Boolean');
      }
      if (data.hasOwnProperty('customSiteTemplateListURL')) {
        obj['customSiteTemplateListURL'] = ApiClient.convertToType(data['customSiteTemplateListURL'], 'String');
      }
      if (data.hasOwnProperty('defaultPrimaryAdmin')) {
        obj['defaultPrimaryAdmin'] = ApiUser.constructFromObject(data['defaultPrimaryAdmin']);
      }
      if (data.hasOwnProperty('defaultAdditionalAdmins')) {
        obj['defaultAdditionalAdmins'] = ApiClient.convertToType(data['defaultAdditionalAdmins'], [ApiUser]);
      }
      if (data.hasOwnProperty('defaultPrimaryContact')) {
        obj['defaultPrimaryContact'] = ApiUser.constructFromObject(data['defaultPrimaryContact']);
      }
      if (data.hasOwnProperty('defaultSecondaryContact')) {
        obj['defaultSecondaryContact'] = ApiUser.constructFromObject(data['defaultSecondaryContact']);
      }
      if (data.hasOwnProperty('defaultSiteLanguage')) {
        obj['defaultSiteLanguage'] = ApiClient.convertToType(data['defaultSiteLanguage'], 'Number');
      }
      if (data.hasOwnProperty('defaultRootSite')) {
        obj['defaultRootSite'] = ApiClient.convertToType(data['defaultRootSite'], 'String');
      }
      if (data.hasOwnProperty('defaultManagedPath')) {
        obj['defaultManagedPath'] = ApiClient.convertToType(data['defaultManagedPath'], 'String');
      }
      if (data.hasOwnProperty('defaultPolicy')) {
        obj['defaultPolicy'] = ApiClient.convertToType(data['defaultPolicy'], 'String');
      }
      if (data.hasOwnProperty('defaultTemplate')) {
        obj['defaultTemplate'] = ApiClient.convertToType(data['defaultTemplate'], 'String');
      }
      if (data.hasOwnProperty('defaultTimeZone')) {
        obj['defaultTimeZone'] = ApiClient.convertToType(data['defaultTimeZone'], 'Number');
      }
      if (data.hasOwnProperty('defaultClassification')) {
        obj['defaultClassification'] = ApiClient.convertToType(data['defaultClassification'], 'String');
      }
      if (data.hasOwnProperty('defaultDesignType')) {
        obj['defaultDesignType'] = ApiClient.convertToType(data['defaultDesignType'], 'String');
      }
      if (data.hasOwnProperty('siteLanguageAssignBy')) {
        obj['siteLanguageAssignBy'] = AssignBy.constructFromObject(data['siteLanguageAssignBy']);
      }
      if (data.hasOwnProperty('templateAssignBy')) {
        obj['templateAssignBy'] = AssignBy.constructFromObject(data['templateAssignBy']);
      }
      if (data.hasOwnProperty('policyAssignBy')) {
        obj['policyAssignBy'] = AssignBy.constructFromObject(data['policyAssignBy']);
      }
      if (data.hasOwnProperty('permissionAssignBy')) {
        obj['permissionAssignBy'] = AssignBy.constructFromObject(data['permissionAssignBy']);
      }
      if (data.hasOwnProperty('rootSiteAndManagedPathAssignBy')) {
        obj['rootSiteAndManagedPathAssignBy'] = AssignBy.constructFromObject(data['rootSiteAndManagedPathAssignBy']);
      }
      if (data.hasOwnProperty('timeZoneAssignBy')) {
        obj['timeZoneAssignBy'] = AssignBy.constructFromObject(data['timeZoneAssignBy']);
      }
      if (data.hasOwnProperty('primaryAdminAssignBy')) {
        obj['primaryAdminAssignBy'] = AssignBy.constructFromObject(data['primaryAdminAssignBy']);
      }
      if (data.hasOwnProperty('additionalAdminAssignBy')) {
        obj['additionalAdminAssignBy'] = AssignBy.constructFromObject(data['additionalAdminAssignBy']);
      }
      if (data.hasOwnProperty('primaryContactAssignBy')) {
        obj['primaryContactAssignBy'] = AssignBy.constructFromObject(data['primaryContactAssignBy']);
      }
      if (data.hasOwnProperty('secondaryContactAssignBy')) {
        obj['secondaryContactAssignBy'] = AssignBy.constructFromObject(data['secondaryContactAssignBy']);
      }
      if (data.hasOwnProperty('designTypeAssignBy')) {
        obj['designTypeAssignBy'] = AssignBy.constructFromObject(data['designTypeAssignBy']);
      }
      if (data.hasOwnProperty('classificationAssignBy')) {
        obj['classificationAssignBy'] = AssignBy.constructFromObject(data['classificationAssignBy']);
      }
      if (data.hasOwnProperty('hubSiteAssignBy')) {
        obj['hubSiteAssignBy'] = AssignBy.constructFromObject(data['hubSiteAssignBy']);
      }
      if (data.hasOwnProperty('departmentAssignBy')) {
        obj['departmentAssignBy'] = AssignBy.constructFromObject(data['departmentAssignBy']);
      }
      if (data.hasOwnProperty('metadatas')) {
        obj['metadatas'] = ApiClient.convertToType(data['metadatas'], [CustomMetadata]);
      }
      if (data.hasOwnProperty('hideRequestSummary')) {
        obj['hideRequestSummary'] = ApiClient.convertToType(data['hideRequestSummary'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ServiceType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('department')) {
        obj['department'] = ApiClient.convertToType(data['department'], 'String');
      }
      if (data.hasOwnProperty('loadDepartmentFromUps')) {
        obj['loadDepartmentFromUps'] = ApiClient.convertToType(data['loadDepartmentFromUps'], 'Boolean');
      }
      if (data.hasOwnProperty('departments')) {
        obj['departments'] = ApiClient.convertToType(data['departments'], ['String']);
      }
      if (data.hasOwnProperty('serviceContact')) {
        obj['serviceContact'] = ApiUser.constructFromObject(data['serviceContact']);
      }
      if (data.hasOwnProperty('serviceAdminContact')) {
        obj['serviceAdminContact'] = ApiUser.constructFromObject(data['serviceAdminContact']);
      }
      if (data.hasOwnProperty('approversContainManagerRole')) {
        obj['approversContainManagerRole'] = ApiClient.convertToType(data['approversContainManagerRole'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = CommonStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('showServiceInCatalog')) {
        obj['showServiceInCatalog'] = ApiClient.convertToType(data['showServiceInCatalog'], 'Boolean');
      }
      if (data.hasOwnProperty('customActions')) {
        obj['customActions'] = CustomActionSettings.constructFromObject(data['customActions']);
      }
      if (data.hasOwnProperty('approvalProcessId')) {
        obj['approvalProcessId'] = ApiClient.convertToType(data['approvalProcessId'], 'String');
      }
      if (data.hasOwnProperty('languageId')) {
        obj['languageId'] = ApiClient.convertToType(data['languageId'], 'Number');
      }
      if (data.hasOwnProperty('categoryId')) {
        obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ServiceScopeSettings} scopeSettings
   */
  exports.prototype['scopeSettings'] = undefined;
  /**
   * @member {String} adminCenterUrl
   */
  exports.prototype['adminCenterUrl'] = undefined;
  /**
   * @member {Array.<module:model/IntModel>} siteLanguages
   */
  exports.prototype['siteLanguages'] = undefined;
  /**
   * @member {Array.<module:model/RootSiteWithManagedPaths>} rootSiteAndManagedPaths
   */
  exports.prototype['rootSiteAndManagedPaths'] = undefined;
  /**
   * @member {module:model/SiteUrlSetting} siteUrlSetting
   */
  exports.prototype['siteUrlSetting'] = undefined;
  /**
   * @member {module:model/MultiGeoSerivceSetting} multiGeoSetting
   */
  exports.prototype['multiGeoSetting'] = undefined;
  /**
   * @member {module:model/SiteTitleSetting} siteTitleSetting
   */
  exports.prototype['siteTitleSetting'] = undefined;
  /**
   * @member {Array.<module:model/PolicyRef>} policies
   */
  exports.prototype['policies'] = undefined;
  /**
   * @member {module:model/DeploymentManagerPlanSettings} deploymentManagerPlanSettings
   */
  exports.prototype['deploymentManagerPlanSettings'] = undefined;
  /**
   * @member {Array.<module:model/PolicyWithTemplates>} policyIdsAndTemplates
   */
  exports.prototype['policyIdsAndTemplates'] = undefined;
  /**
   * @member {Array.<module:model/TemplateWithPermissions>} templateIdsAndPermissions
   */
  exports.prototype['templateIdsAndPermissions'] = undefined;
  /**
   * @member {module:model/PermissionSettings} permissionSettings
   */
  exports.prototype['permissionSettings'] = undefined;
  /**
   * @member {module:model/SiteLeasePeriodServiceSettings} leasePeriodSettings
   */
  exports.prototype['leasePeriodSettings'] = undefined;
  /**
   * @member {Array.<module:model/IntModel>} timeZones
   */
  exports.prototype['timeZones'] = undefined;
  /**
   * @member {module:model/YammerGroupServiceSettings} yammerGroupSettings
   */
  exports.prototype['yammerGroupSettings'] = undefined;
  /**
   * @member {Array.<String>} classifications
   */
  exports.prototype['classifications'] = undefined;
  /**
   * @member {module:model/HubSiteSettings} hubSiteSettings
   */
  exports.prototype['hubSiteSettings'] = undefined;
  /**
   * @member {Boolean} enabledCustomTemplate
   */
  exports.prototype['enabledCustomTemplate'] = undefined;
  /**
   * @member {String} customSiteTemplateListURL
   */
  exports.prototype['customSiteTemplateListURL'] = undefined;
  /**
   * @member {module:model/ApiUser} defaultPrimaryAdmin
   */
  exports.prototype['defaultPrimaryAdmin'] = undefined;
  /**
   * @member {Array.<module:model/ApiUser>} defaultAdditionalAdmins
   */
  exports.prototype['defaultAdditionalAdmins'] = undefined;
  /**
   * @member {module:model/ApiUser} defaultPrimaryContact
   */
  exports.prototype['defaultPrimaryContact'] = undefined;
  /**
   * @member {module:model/ApiUser} defaultSecondaryContact
   */
  exports.prototype['defaultSecondaryContact'] = undefined;
  /**
   * @member {Number} defaultSiteLanguage
   */
  exports.prototype['defaultSiteLanguage'] = undefined;
  /**
   * @member {String} defaultRootSite
   */
  exports.prototype['defaultRootSite'] = undefined;
  /**
   * @member {String} defaultManagedPath
   */
  exports.prototype['defaultManagedPath'] = undefined;
  /**
   * @member {String} defaultPolicy
   */
  exports.prototype['defaultPolicy'] = undefined;
  /**
   * @member {String} defaultTemplate
   */
  exports.prototype['defaultTemplate'] = undefined;
  /**
   * @member {Number} defaultTimeZone
   */
  exports.prototype['defaultTimeZone'] = undefined;
  /**
   * @member {String} defaultClassification
   */
  exports.prototype['defaultClassification'] = undefined;
  /**
   * @member {String} defaultDesignType
   */
  exports.prototype['defaultDesignType'] = undefined;
  /**
   * @member {module:model/AssignBy} siteLanguageAssignBy
   */
  exports.prototype['siteLanguageAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} templateAssignBy
   */
  exports.prototype['templateAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} policyAssignBy
   */
  exports.prototype['policyAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} permissionAssignBy
   */
  exports.prototype['permissionAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} rootSiteAndManagedPathAssignBy
   */
  exports.prototype['rootSiteAndManagedPathAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} timeZoneAssignBy
   */
  exports.prototype['timeZoneAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} primaryAdminAssignBy
   */
  exports.prototype['primaryAdminAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} additionalAdminAssignBy
   */
  exports.prototype['additionalAdminAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} primaryContactAssignBy
   */
  exports.prototype['primaryContactAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} secondaryContactAssignBy
   */
  exports.prototype['secondaryContactAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} designTypeAssignBy
   */
  exports.prototype['designTypeAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} classificationAssignBy
   */
  exports.prototype['classificationAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} hubSiteAssignBy
   */
  exports.prototype['hubSiteAssignBy'] = undefined;
  /**
   * @member {module:model/AssignBy} departmentAssignBy
   */
  exports.prototype['departmentAssignBy'] = undefined;
  /**
   * @member {Array.<module:model/CustomMetadata>} metadatas
   */
  exports.prototype['metadatas'] = undefined;
  /**
   * @member {Boolean} hideRequestSummary
   */
  exports.prototype['hideRequestSummary'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/ServiceType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} department
   */
  exports.prototype['department'] = undefined;
  /**
   * @member {Boolean} loadDepartmentFromUps
   */
  exports.prototype['loadDepartmentFromUps'] = undefined;
  /**
   * @member {Array.<String>} departments
   */
  exports.prototype['departments'] = undefined;
  /**
   * @member {module:model/ApiUser} serviceContact
   */
  exports.prototype['serviceContact'] = undefined;
  /**
   * @member {module:model/ApiUser} serviceAdminContact
   */
  exports.prototype['serviceAdminContact'] = undefined;
  /**
   * @member {Boolean} approversContainManagerRole
   */
  exports.prototype['approversContainManagerRole'] = undefined;
  /**
   * @member {module:model/CommonStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Boolean} showServiceInCatalog
   */
  exports.prototype['showServiceInCatalog'] = undefined;
  /**
   * @member {module:model/CustomActionSettings} customActions
   */
  exports.prototype['customActions'] = undefined;
  /**
   * @member {String} approvalProcessId
   */
  exports.prototype['approvalProcessId'] = undefined;
  /**
   * @member {Number} languageId
   */
  exports.prototype['languageId'] = undefined;
  /**
   * @member {String} categoryId
   */
  exports.prototype['categoryId'] = undefined;



  return exports;
}));

