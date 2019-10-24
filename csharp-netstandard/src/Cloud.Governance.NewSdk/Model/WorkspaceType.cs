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
using OpenAPIDateConverter = Cloud.Governance.NewSdk.Client.OpenAPIDateConverter;

namespace Cloud.Governance.NewSdk.Model
{
    /// <summary>
    /// Site&#x3D;0, Web&#x3D;1, Group&#x3D;2, &lt;/br&gt;Teams&#x3D;3
    /// </summary>
    /// <value>Site&#x3D;0, Web&#x3D;1, Group&#x3D;2, &lt;/br&gt;Teams&#x3D;3</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum WorkspaceType
    {
        /// <summary>
        /// Enum Site for value: Site
        /// </summary>
        [EnumMember(Value = "Site")]
        Site = 1,

        /// <summary>
        /// Enum Web for value: Web
        /// </summary>
        [EnumMember(Value = "Web")]
        Web = 2,

        /// <summary>
        /// Enum Group for value: Group
        /// </summary>
        [EnumMember(Value = "Group")]
        Group = 3,

        /// <summary>
        /// Enum Teams for value: Teams
        /// </summary>
        [EnumMember(Value = "Teams")]
        Teams = 4

    }

}