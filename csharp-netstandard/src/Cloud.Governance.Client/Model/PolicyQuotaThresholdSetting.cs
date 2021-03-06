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
    /// PolicyQuotaThresholdSetting
    /// </summary>
    [DataContract]
    public partial class PolicyQuotaThresholdSetting :  IEquatable<PolicyQuotaThresholdSetting>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PolicyQuotaThresholdSetting" /> class.
        /// </summary>
        /// <param name="enableQuotaThreshold">enableQuotaThreshold.</param>
        /// <param name="quotaThreshold">quotaThreshold.</param>
        /// <param name="quotaThresholdNotifyUsers">quotaThresholdNotifyUsers.</param>
        public PolicyQuotaThresholdSetting(bool enableQuotaThreshold = default(bool), int quotaThreshold = default(int), string quotaThresholdNotifyUsers = default(string))
        {
            this.QuotaThresholdNotifyUsers = quotaThresholdNotifyUsers;
            this.EnableQuotaThreshold = enableQuotaThreshold;
            this.QuotaThreshold = quotaThreshold;
            this.QuotaThresholdNotifyUsers = quotaThresholdNotifyUsers;
        }
        
        /// <summary>
        /// Gets or Sets EnableQuotaThreshold
        /// </summary>
        [DataMember(Name="enableQuotaThreshold", EmitDefaultValue=false)]
        public bool EnableQuotaThreshold { get; set; }

        /// <summary>
        /// Gets or Sets QuotaThreshold
        /// </summary>
        [DataMember(Name="quotaThreshold", EmitDefaultValue=false)]
        public int QuotaThreshold { get; set; }

        /// <summary>
        /// Gets or Sets QuotaThresholdNotifyUsers
        /// </summary>
        [DataMember(Name="quotaThresholdNotifyUsers", EmitDefaultValue=true)]
        public string QuotaThresholdNotifyUsers { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PolicyQuotaThresholdSetting {\n");
            sb.Append("  EnableQuotaThreshold: ").Append(EnableQuotaThreshold).Append("\n");
            sb.Append("  QuotaThreshold: ").Append(QuotaThreshold).Append("\n");
            sb.Append("  QuotaThresholdNotifyUsers: ").Append(QuotaThresholdNotifyUsers).Append("\n");
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
            return this.Equals(input as PolicyQuotaThresholdSetting);
        }

        /// <summary>
        /// Returns true if PolicyQuotaThresholdSetting instances are equal
        /// </summary>
        /// <param name="input">Instance of PolicyQuotaThresholdSetting to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PolicyQuotaThresholdSetting input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.EnableQuotaThreshold == input.EnableQuotaThreshold ||
                    this.EnableQuotaThreshold.Equals(input.EnableQuotaThreshold)
                ) && 
                (
                    this.QuotaThreshold == input.QuotaThreshold ||
                    this.QuotaThreshold.Equals(input.QuotaThreshold)
                ) && 
                (
                    this.QuotaThresholdNotifyUsers == input.QuotaThresholdNotifyUsers ||
                    (this.QuotaThresholdNotifyUsers != null &&
                    this.QuotaThresholdNotifyUsers.Equals(input.QuotaThresholdNotifyUsers))
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
                hashCode = hashCode * 59 + this.EnableQuotaThreshold.GetHashCode();
                hashCode = hashCode * 59 + this.QuotaThreshold.GetHashCode();
                if (this.QuotaThresholdNotifyUsers != null)
                    hashCode = hashCode * 59 + this.QuotaThresholdNotifyUsers.GetHashCode();
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
