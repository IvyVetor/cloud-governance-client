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
    /// DropDown&#x3D;1, RadioButton&#x3D;2, CheckBoxes&#x3D;3, &lt;/br&gt;
    /// </summary>
    /// <value>DropDown&#x3D;1, RadioButton&#x3D;2, CheckBoxes&#x3D;3, &lt;/br&gt;</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum ChoiceType
    {
        /// <summary>
        /// Enum DropDown for value: DropDown
        /// </summary>
        [EnumMember(Value = "DropDown")]
        DropDown = 1,

        /// <summary>
        /// Enum RadioButton for value: RadioButton
        /// </summary>
        [EnumMember(Value = "RadioButton")]
        RadioButton = 2,

        /// <summary>
        /// Enum CheckBoxes for value: CheckBoxes
        /// </summary>
        [EnumMember(Value = "CheckBoxes")]
        CheckBoxes = 3

    }

}
