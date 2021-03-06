/* 
 * Cloud Governance Api
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Cloud.Governance.Client.Client.OpenAPIDateConverter;

namespace Cloud.Governance.Client.Model
{
    /// <summary>
    /// None&#x3D;0, RenewSiteContact&#x3D;1, RenewSiteMetadata&#x3D;2, &lt;/br&gt;RenewSitePermission&#x3D;4, RenewGroupContact&#x3D;11, RenewGroupMetadata&#x3D;12, &lt;/br&gt;RenewGroupMembership&#x3D;13, RenewGroupPermission&#x3D;14
    /// </summary>
    /// <value>None&#x3D;0, RenewSiteContact&#x3D;1, RenewSiteMetadata&#x3D;2, &lt;/br&gt;RenewSitePermission&#x3D;4, RenewGroupContact&#x3D;11, RenewGroupMetadata&#x3D;12, &lt;/br&gt;RenewGroupMembership&#x3D;13, RenewGroupPermission&#x3D;14</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum RenewalType
    {
        /// <summary>
        /// Enum None for value: None
        /// </summary>
        [EnumMember(Value = "None")]
        None = 1,

        /// <summary>
        /// Enum RenewSiteContact for value: RenewSiteContact
        /// </summary>
        [EnumMember(Value = "RenewSiteContact")]
        RenewSiteContact = 2,

        /// <summary>
        /// Enum RenewSiteMetadata for value: RenewSiteMetadata
        /// </summary>
        [EnumMember(Value = "RenewSiteMetadata")]
        RenewSiteMetadata = 3,

        /// <summary>
        /// Enum RenewSitePermission for value: RenewSitePermission
        /// </summary>
        [EnumMember(Value = "RenewSitePermission")]
        RenewSitePermission = 4,

        /// <summary>
        /// Enum RenewGroupContact for value: RenewGroupContact
        /// </summary>
        [EnumMember(Value = "RenewGroupContact")]
        RenewGroupContact = 5,

        /// <summary>
        /// Enum RenewGroupMetadata for value: RenewGroupMetadata
        /// </summary>
        [EnumMember(Value = "RenewGroupMetadata")]
        RenewGroupMetadata = 6,

        /// <summary>
        /// Enum RenewGroupMembership for value: RenewGroupMembership
        /// </summary>
        [EnumMember(Value = "RenewGroupMembership")]
        RenewGroupMembership = 7,

        /// <summary>
        /// Enum RenewGroupPermission for value: RenewGroupPermission
        /// </summary>
        [EnumMember(Value = "RenewGroupPermission")]
        RenewGroupPermission = 8

    }

}
