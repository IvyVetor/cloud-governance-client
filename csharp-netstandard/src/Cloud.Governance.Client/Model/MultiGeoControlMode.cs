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
    /// None&#x3D;0, SpecifiedDirectly&#x3D;1, SpecifiedByRole&#x3D;2, &lt;/br&gt;
    /// </summary>
    /// <value>None&#x3D;0, SpecifiedDirectly&#x3D;1, SpecifiedByRole&#x3D;2, &lt;/br&gt;</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum MultiGeoControlMode
    {
        /// <summary>
        /// Enum None for value: None
        /// </summary>
        [EnumMember(Value = "None")]
        None = 1,

        /// <summary>
        /// Enum SpecifiedDirectly for value: SpecifiedDirectly
        /// </summary>
        [EnumMember(Value = "SpecifiedDirectly")]
        SpecifiedDirectly = 2,

        /// <summary>
        /// Enum SpecifiedByRole for value: SpecifiedByRole
        /// </summary>
        [EnumMember(Value = "SpecifiedByRole")]
        SpecifiedByRole = 3

    }

}
