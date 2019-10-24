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
import AssignBy from './AssignBy';
import GiphyRatingType from './GiphyRatingType';

/**
 * The ServiceTeamsSettings model module.
 * @module model/ServiceTeamsSettings
 * @version 1.0
 */
class ServiceTeamsSettings {
    /**
     * Constructs a new <code>ServiceTeamsSettings</code>.
     * @alias module:model/ServiceTeamsSettings
     */
    constructor() { 
        
        ServiceTeamsSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceTeamsSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceTeamsSettings} obj Optional instance to populate.
     * @return {module:model/ServiceTeamsSettings} The populated <code>ServiceTeamsSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceTeamsSettings();

            if (data.hasOwnProperty('memberPermissionsAssignBy')) {
                obj['memberPermissionsAssignBy'] = AssignBy.constructFromObject(data['memberPermissionsAssignBy']);
            }
            if (data.hasOwnProperty('guestPermissionsAssignBy')) {
                obj['guestPermissionsAssignBy'] = AssignBy.constructFromObject(data['guestPermissionsAssignBy']);
            }
            if (data.hasOwnProperty('mentionsAssignBy')) {
                obj['mentionsAssignBy'] = AssignBy.constructFromObject(data['mentionsAssignBy']);
            }
            if (data.hasOwnProperty('funStuffAssignBy')) {
                obj['funStuffAssignBy'] = AssignBy.constructFromObject(data['funStuffAssignBy']);
            }
            if (data.hasOwnProperty('allowMembersCreateUpdateChannels')) {
                obj['allowMembersCreateUpdateChannels'] = ApiClient.convertToType(data['allowMembersCreateUpdateChannels'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMemberDeleteRestoreChannels')) {
                obj['allowMemberDeleteRestoreChannels'] = ApiClient.convertToType(data['allowMemberDeleteRestoreChannels'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMembersAddRemoveApps')) {
                obj['allowMembersAddRemoveApps'] = ApiClient.convertToType(data['allowMembersAddRemoveApps'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMembersCreateUpdateRemoveTabs')) {
                obj['allowMembersCreateUpdateRemoveTabs'] = ApiClient.convertToType(data['allowMembersCreateUpdateRemoveTabs'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMembersCreateUpdateRemoveConnections')) {
                obj['allowMembersCreateUpdateRemoveConnections'] = ApiClient.convertToType(data['allowMembersCreateUpdateRemoveConnections'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMembersDeleteMessages')) {
                obj['allowMembersDeleteMessages'] = ApiClient.convertToType(data['allowMembersDeleteMessages'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMembersEditMessages')) {
                obj['allowMembersEditMessages'] = ApiClient.convertToType(data['allowMembersEditMessages'], 'Boolean');
            }
            if (data.hasOwnProperty('allowGuestsCreateUpdateChannels')) {
                obj['allowGuestsCreateUpdateChannels'] = ApiClient.convertToType(data['allowGuestsCreateUpdateChannels'], 'Boolean');
            }
            if (data.hasOwnProperty('allowGuestsDeleteChannels')) {
                obj['allowGuestsDeleteChannels'] = ApiClient.convertToType(data['allowGuestsDeleteChannels'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMentionsTeam')) {
                obj['allowMentionsTeam'] = ApiClient.convertToType(data['allowMentionsTeam'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMentionsChannel')) {
                obj['allowMentionsChannel'] = ApiClient.convertToType(data['allowMentionsChannel'], 'Boolean');
            }
            if (data.hasOwnProperty('enableGiphy')) {
                obj['enableGiphy'] = ApiClient.convertToType(data['enableGiphy'], 'Boolean');
            }
            if (data.hasOwnProperty('enableStickersAndMemes')) {
                obj['enableStickersAndMemes'] = ApiClient.convertToType(data['enableStickersAndMemes'], 'Boolean');
            }
            if (data.hasOwnProperty('enableCustomMemes')) {
                obj['enableCustomMemes'] = ApiClient.convertToType(data['enableCustomMemes'], 'Boolean');
            }
            if (data.hasOwnProperty('giphyRatingType')) {
                obj['giphyRatingType'] = GiphyRatingType.constructFromObject(data['giphyRatingType']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AssignBy} memberPermissionsAssignBy
 */
ServiceTeamsSettings.prototype['memberPermissionsAssignBy'] = undefined;

/**
 * @member {module:model/AssignBy} guestPermissionsAssignBy
 */
ServiceTeamsSettings.prototype['guestPermissionsAssignBy'] = undefined;

/**
 * @member {module:model/AssignBy} mentionsAssignBy
 */
ServiceTeamsSettings.prototype['mentionsAssignBy'] = undefined;

/**
 * @member {module:model/AssignBy} funStuffAssignBy
 */
ServiceTeamsSettings.prototype['funStuffAssignBy'] = undefined;

/**
 * @member {Boolean} allowMembersCreateUpdateChannels
 */
ServiceTeamsSettings.prototype['allowMembersCreateUpdateChannels'] = undefined;

/**
 * @member {Boolean} allowMemberDeleteRestoreChannels
 */
ServiceTeamsSettings.prototype['allowMemberDeleteRestoreChannels'] = undefined;

/**
 * @member {Boolean} allowMembersAddRemoveApps
 */
ServiceTeamsSettings.prototype['allowMembersAddRemoveApps'] = undefined;

/**
 * @member {Boolean} allowMembersCreateUpdateRemoveTabs
 */
ServiceTeamsSettings.prototype['allowMembersCreateUpdateRemoveTabs'] = undefined;

/**
 * @member {Boolean} allowMembersCreateUpdateRemoveConnections
 */
ServiceTeamsSettings.prototype['allowMembersCreateUpdateRemoveConnections'] = undefined;

/**
 * @member {Boolean} allowMembersDeleteMessages
 */
ServiceTeamsSettings.prototype['allowMembersDeleteMessages'] = undefined;

/**
 * @member {Boolean} allowMembersEditMessages
 */
ServiceTeamsSettings.prototype['allowMembersEditMessages'] = undefined;

/**
 * @member {Boolean} allowGuestsCreateUpdateChannels
 */
ServiceTeamsSettings.prototype['allowGuestsCreateUpdateChannels'] = undefined;

/**
 * @member {Boolean} allowGuestsDeleteChannels
 */
ServiceTeamsSettings.prototype['allowGuestsDeleteChannels'] = undefined;

/**
 * @member {Boolean} allowMentionsTeam
 */
ServiceTeamsSettings.prototype['allowMentionsTeam'] = undefined;

/**
 * @member {Boolean} allowMentionsChannel
 */
ServiceTeamsSettings.prototype['allowMentionsChannel'] = undefined;

/**
 * @member {Boolean} enableGiphy
 */
ServiceTeamsSettings.prototype['enableGiphy'] = undefined;

/**
 * @member {Boolean} enableStickersAndMemes
 */
ServiceTeamsSettings.prototype['enableStickersAndMemes'] = undefined;

/**
 * @member {Boolean} enableCustomMemes
 */
ServiceTeamsSettings.prototype['enableCustomMemes'] = undefined;

/**
 * @member {module:model/GiphyRatingType} giphyRatingType
 */
ServiceTeamsSettings.prototype['giphyRatingType'] = undefined;






export default ServiceTeamsSettings;
