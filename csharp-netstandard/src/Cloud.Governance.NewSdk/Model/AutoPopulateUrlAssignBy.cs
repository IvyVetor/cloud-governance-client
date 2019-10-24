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
    /// None&#x3D;0, Edit&#x3D;1, ReadOnly&#x3D;2, &lt;/br&gt;Hide&#x3D;3
    /// </summary>
    /// <value>None&#x3D;0, Edit&#x3D;1, ReadOnly&#x3D;2, &lt;/br&gt;Hide&#x3D;3</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum AutoPopulateUrlAssignBy
    {
        /// <summary>
        /// Enum None for value: None
        /// </summary>
        [EnumMember(Value = "None")]
        None = 1,

        /// <summary>
        /// Enum Edit for value: Edit
        /// </summary>
        [EnumMember(Value = "Edit")]
        Edit = 2,

        /// <summary>
        /// Enum ReadOnly for value: ReadOnly
        /// </summary>
        [EnumMember(Value = "ReadOnly")]
        ReadOnly = 3,

        /// <summary>
        /// Enum Hide for value: Hide
        /// </summary>
        [EnumMember(Value = "Hide")]
        Hide = 4

    }

}