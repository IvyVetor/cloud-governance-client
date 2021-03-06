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
    /// RenewProfileRef
    /// </summary>
    [DataContract]
    public partial class RenewProfileRef :  IEquatable<RenewProfileRef>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RenewProfileRef" /> class.
        /// </summary>
        /// <param name="isLastStage">isLastStage.</param>
        /// <param name="confirmMessage">confirmMessage.</param>
        /// <param name="objectTitle">objectTitle.</param>
        /// <param name="enableContactRenewal">enableContactRenewal.</param>
        /// <param name="enablePermissionRenewal">enablePermissionRenewal.</param>
        /// <param name="enableMetadataRenewal">enableMetadataRenewal.</param>
        /// <param name="enableReassign">enableReassign.</param>
        /// <param name="enableDeletion">enableDeletion.</param>
        /// <param name="enableArchival">enableArchival.</param>
        public RenewProfileRef(bool isLastStage = default(bool), string confirmMessage = default(string), string objectTitle = default(string), bool enableContactRenewal = default(bool), bool enablePermissionRenewal = default(bool), bool enableMetadataRenewal = default(bool), bool enableReassign = default(bool), bool enableDeletion = default(bool), bool enableArchival = default(bool))
        {
            this.ConfirmMessage = confirmMessage;
            this.ObjectTitle = objectTitle;
            this.IsLastStage = isLastStage;
            this.ConfirmMessage = confirmMessage;
            this.ObjectTitle = objectTitle;
            this.EnableContactRenewal = enableContactRenewal;
            this.EnablePermissionRenewal = enablePermissionRenewal;
            this.EnableMetadataRenewal = enableMetadataRenewal;
            this.EnableReassign = enableReassign;
            this.EnableDeletion = enableDeletion;
            this.EnableArchival = enableArchival;
        }
        
        /// <summary>
        /// Gets or Sets IsLastStage
        /// </summary>
        [DataMember(Name="isLastStage", EmitDefaultValue=false)]
        public bool IsLastStage { get; set; }

        /// <summary>
        /// Gets or Sets ConfirmMessage
        /// </summary>
        [DataMember(Name="confirmMessage", EmitDefaultValue=true)]
        public string ConfirmMessage { get; set; }

        /// <summary>
        /// Gets or Sets ObjectTitle
        /// </summary>
        [DataMember(Name="objectTitle", EmitDefaultValue=true)]
        public string ObjectTitle { get; set; }

        /// <summary>
        /// Gets or Sets EnableContactRenewal
        /// </summary>
        [DataMember(Name="enableContactRenewal", EmitDefaultValue=false)]
        public bool EnableContactRenewal { get; set; }

        /// <summary>
        /// Gets or Sets EnablePermissionRenewal
        /// </summary>
        [DataMember(Name="enablePermissionRenewal", EmitDefaultValue=false)]
        public bool EnablePermissionRenewal { get; set; }

        /// <summary>
        /// Gets or Sets EnableMetadataRenewal
        /// </summary>
        [DataMember(Name="enableMetadataRenewal", EmitDefaultValue=false)]
        public bool EnableMetadataRenewal { get; set; }

        /// <summary>
        /// Gets or Sets EnableReassign
        /// </summary>
        [DataMember(Name="enableReassign", EmitDefaultValue=false)]
        public bool EnableReassign { get; set; }

        /// <summary>
        /// Gets or Sets EnableDeletion
        /// </summary>
        [DataMember(Name="enableDeletion", EmitDefaultValue=false)]
        public bool EnableDeletion { get; set; }

        /// <summary>
        /// Gets or Sets EnableArchival
        /// </summary>
        [DataMember(Name="enableArchival", EmitDefaultValue=false)]
        public bool EnableArchival { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class RenewProfileRef {\n");
            sb.Append("  IsLastStage: ").Append(IsLastStage).Append("\n");
            sb.Append("  ConfirmMessage: ").Append(ConfirmMessage).Append("\n");
            sb.Append("  ObjectTitle: ").Append(ObjectTitle).Append("\n");
            sb.Append("  EnableContactRenewal: ").Append(EnableContactRenewal).Append("\n");
            sb.Append("  EnablePermissionRenewal: ").Append(EnablePermissionRenewal).Append("\n");
            sb.Append("  EnableMetadataRenewal: ").Append(EnableMetadataRenewal).Append("\n");
            sb.Append("  EnableReassign: ").Append(EnableReassign).Append("\n");
            sb.Append("  EnableDeletion: ").Append(EnableDeletion).Append("\n");
            sb.Append("  EnableArchival: ").Append(EnableArchival).Append("\n");
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
            return this.Equals(input as RenewProfileRef);
        }

        /// <summary>
        /// Returns true if RenewProfileRef instances are equal
        /// </summary>
        /// <param name="input">Instance of RenewProfileRef to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RenewProfileRef input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.IsLastStage == input.IsLastStage ||
                    this.IsLastStage.Equals(input.IsLastStage)
                ) && 
                (
                    this.ConfirmMessage == input.ConfirmMessage ||
                    (this.ConfirmMessage != null &&
                    this.ConfirmMessage.Equals(input.ConfirmMessage))
                ) && 
                (
                    this.ObjectTitle == input.ObjectTitle ||
                    (this.ObjectTitle != null &&
                    this.ObjectTitle.Equals(input.ObjectTitle))
                ) && 
                (
                    this.EnableContactRenewal == input.EnableContactRenewal ||
                    this.EnableContactRenewal.Equals(input.EnableContactRenewal)
                ) && 
                (
                    this.EnablePermissionRenewal == input.EnablePermissionRenewal ||
                    this.EnablePermissionRenewal.Equals(input.EnablePermissionRenewal)
                ) && 
                (
                    this.EnableMetadataRenewal == input.EnableMetadataRenewal ||
                    this.EnableMetadataRenewal.Equals(input.EnableMetadataRenewal)
                ) && 
                (
                    this.EnableReassign == input.EnableReassign ||
                    this.EnableReassign.Equals(input.EnableReassign)
                ) && 
                (
                    this.EnableDeletion == input.EnableDeletion ||
                    this.EnableDeletion.Equals(input.EnableDeletion)
                ) && 
                (
                    this.EnableArchival == input.EnableArchival ||
                    this.EnableArchival.Equals(input.EnableArchival)
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
                hashCode = hashCode * 59 + this.IsLastStage.GetHashCode();
                if (this.ConfirmMessage != null)
                    hashCode = hashCode * 59 + this.ConfirmMessage.GetHashCode();
                if (this.ObjectTitle != null)
                    hashCode = hashCode * 59 + this.ObjectTitle.GetHashCode();
                hashCode = hashCode * 59 + this.EnableContactRenewal.GetHashCode();
                hashCode = hashCode * 59 + this.EnablePermissionRenewal.GetHashCode();
                hashCode = hashCode * 59 + this.EnableMetadataRenewal.GetHashCode();
                hashCode = hashCode * 59 + this.EnableReassign.GetHashCode();
                hashCode = hashCode * 59 + this.EnableDeletion.GetHashCode();
                hashCode = hashCode * 59 + this.EnableArchival.GetHashCode();
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
