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
    /// PermissionActionLockItem
    /// </summary>
    [DataContract]
    public partial class PermissionActionLockItem :  IEquatable<PermissionActionLockItem>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PermissionActionLockItem" /> class.
        /// </summary>
        /// <param name="permissionActionInstanceId">permissionActionInstanceId.</param>
        /// <param name="isEnabled">isEnabled.</param>
        /// <param name="isEnabledText">isEnabledText.</param>
        public PermissionActionLockItem(Guid permissionActionInstanceId = default(Guid), bool isEnabled = default(bool), string isEnabledText = default(string))
        {
            this.IsEnabledText = isEnabledText;
            this.PermissionActionInstanceId = permissionActionInstanceId;
            this.IsEnabled = isEnabled;
            this.IsEnabledText = isEnabledText;
        }
        
        /// <summary>
        /// Gets or Sets InstanceId
        /// </summary>
        [DataMember(Name="instanceId", EmitDefaultValue=false)]
        public Guid InstanceId { get; private set; }

        /// <summary>
        /// Gets or Sets PermissionActionInstanceId
        /// </summary>
        [DataMember(Name="permissionActionInstanceId", EmitDefaultValue=false)]
        public Guid PermissionActionInstanceId { get; set; }

        /// <summary>
        /// Gets or Sets IsEnabled
        /// </summary>
        [DataMember(Name="isEnabled", EmitDefaultValue=false)]
        public bool IsEnabled { get; set; }

        /// <summary>
        /// Gets or Sets IsEnabledText
        /// </summary>
        [DataMember(Name="isEnabledText", EmitDefaultValue=true)]
        public string IsEnabledText { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PermissionActionLockItem {\n");
            sb.Append("  InstanceId: ").Append(InstanceId).Append("\n");
            sb.Append("  PermissionActionInstanceId: ").Append(PermissionActionInstanceId).Append("\n");
            sb.Append("  IsEnabled: ").Append(IsEnabled).Append("\n");
            sb.Append("  IsEnabledText: ").Append(IsEnabledText).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as PermissionActionLockItem);
        }

        /// <summary>
        /// Returns true if PermissionActionLockItem instances are equal
        /// </summary>
        /// <param name="input">Instance of PermissionActionLockItem to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PermissionActionLockItem input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.InstanceId == input.InstanceId ||
                    (this.InstanceId != null &&
                    this.InstanceId.Equals(input.InstanceId))
                ) && 
                (
                    this.PermissionActionInstanceId == input.PermissionActionInstanceId ||
                    (this.PermissionActionInstanceId != null &&
                    this.PermissionActionInstanceId.Equals(input.PermissionActionInstanceId))
                ) && 
                (
                    this.IsEnabled == input.IsEnabled ||
                    this.IsEnabled.Equals(input.IsEnabled)
                ) && 
                (
                    this.IsEnabledText == input.IsEnabledText ||
                    (this.IsEnabledText != null &&
                    this.IsEnabledText.Equals(input.IsEnabledText))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.InstanceId != null)
                    hashCode = hashCode * 59 + this.InstanceId.GetHashCode();
                if (this.PermissionActionInstanceId != null)
                    hashCode = hashCode * 59 + this.PermissionActionInstanceId.GetHashCode();
                hashCode = hashCode * 59 + this.IsEnabled.GetHashCode();
                if (this.IsEnabledText != null)
                    hashCode = hashCode * 59 + this.IsEnabledText.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}