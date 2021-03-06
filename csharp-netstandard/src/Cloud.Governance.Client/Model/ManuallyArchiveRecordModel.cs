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
    /// ManuallyArchiveRecordModel
    /// </summary>
    [DataContract]
    public partial class ManuallyArchiveRecordModel :  IEquatable<ManuallyArchiveRecordModel>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets NodeType
        /// </summary>
        [DataMember(Name="nodeType", EmitDefaultValue=false)]
        public ManualArchiveNodeLevel? NodeType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ManuallyArchiveRecordModel" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ManuallyArchiveRecordModel() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ManuallyArchiveRecordModel" /> class.
        /// </summary>
        /// <param name="rowKey">rowKey (required).</param>
        /// <param name="isSelected">isSelected.</param>
        /// <param name="nodeType">nodeType.</param>
        public ManuallyArchiveRecordModel(string rowKey = default(string), bool isSelected = default(bool), ManualArchiveNodeLevel nodeType = default(ManualArchiveNodeLevel))
        {
            // to ensure "rowKey" is required (not null)
            if (rowKey == null)
            {
                throw new InvalidDataException("rowKey is a required property for ManuallyArchiveRecordModel and cannot be null");
            }
            else
            {
                this.RowKey = rowKey;
            }

            this.IsSelected = isSelected;
            this.NodeType = nodeType;
        }
        
        /// <summary>
        /// Gets or Sets RowKey
        /// </summary>
        [DataMember(Name="rowKey", EmitDefaultValue=false)]
        public string RowKey { get; set; }

        /// <summary>
        /// Gets or Sets PartitionKey
        /// </summary>
        [DataMember(Name="partitionKey", EmitDefaultValue=true)]
        public string PartitionKey { get; private set; }

        /// <summary>
        /// Gets or Sets SiteId
        /// </summary>
        [DataMember(Name="siteId", EmitDefaultValue=false)]
        public Guid SiteId { get; private set; }

        /// <summary>
        /// Gets or Sets Url
        /// </summary>
        [DataMember(Name="url", EmitDefaultValue=true)]
        public string Url { get; private set; }

        /// <summary>
        /// Gets or Sets Version
        /// </summary>
        [DataMember(Name="version", EmitDefaultValue=true)]
        public string Version { get; private set; }

        /// <summary>
        /// Gets or Sets IsSelected
        /// </summary>
        [DataMember(Name="isSelected", EmitDefaultValue=false)]
        public bool IsSelected { get; set; }

        /// <summary>
        /// Gets or Sets NodeTypeDescription
        /// </summary>
        [DataMember(Name="nodeTypeDescription", EmitDefaultValue=true)]
        public string NodeTypeDescription { get; private set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ManuallyArchiveRecordModel {\n");
            sb.Append("  RowKey: ").Append(RowKey).Append("\n");
            sb.Append("  PartitionKey: ").Append(PartitionKey).Append("\n");
            sb.Append("  SiteId: ").Append(SiteId).Append("\n");
            sb.Append("  Url: ").Append(Url).Append("\n");
            sb.Append("  Version: ").Append(Version).Append("\n");
            sb.Append("  IsSelected: ").Append(IsSelected).Append("\n");
            sb.Append("  NodeType: ").Append(NodeType).Append("\n");
            sb.Append("  NodeTypeDescription: ").Append(NodeTypeDescription).Append("\n");
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
            return this.Equals(input as ManuallyArchiveRecordModel);
        }

        /// <summary>
        /// Returns true if ManuallyArchiveRecordModel instances are equal
        /// </summary>
        /// <param name="input">Instance of ManuallyArchiveRecordModel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ManuallyArchiveRecordModel input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.RowKey == input.RowKey ||
                    (this.RowKey != null &&
                    this.RowKey.Equals(input.RowKey))
                ) && 
                (
                    this.PartitionKey == input.PartitionKey ||
                    (this.PartitionKey != null &&
                    this.PartitionKey.Equals(input.PartitionKey))
                ) && 
                (
                    this.SiteId == input.SiteId ||
                    (this.SiteId != null &&
                    this.SiteId.Equals(input.SiteId))
                ) && 
                (
                    this.Url == input.Url ||
                    (this.Url != null &&
                    this.Url.Equals(input.Url))
                ) && 
                (
                    this.Version == input.Version ||
                    (this.Version != null &&
                    this.Version.Equals(input.Version))
                ) && 
                (
                    this.IsSelected == input.IsSelected ||
                    this.IsSelected.Equals(input.IsSelected)
                ) && 
                (
                    this.NodeType == input.NodeType ||
                    this.NodeType.Equals(input.NodeType)
                ) && 
                (
                    this.NodeTypeDescription == input.NodeTypeDescription ||
                    (this.NodeTypeDescription != null &&
                    this.NodeTypeDescription.Equals(input.NodeTypeDescription))
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
                if (this.RowKey != null)
                    hashCode = hashCode * 59 + this.RowKey.GetHashCode();
                if (this.PartitionKey != null)
                    hashCode = hashCode * 59 + this.PartitionKey.GetHashCode();
                if (this.SiteId != null)
                    hashCode = hashCode * 59 + this.SiteId.GetHashCode();
                if (this.Url != null)
                    hashCode = hashCode * 59 + this.Url.GetHashCode();
                if (this.Version != null)
                    hashCode = hashCode * 59 + this.Version.GetHashCode();
                hashCode = hashCode * 59 + this.IsSelected.GetHashCode();
                hashCode = hashCode * 59 + this.NodeType.GetHashCode();
                if (this.NodeTypeDescription != null)
                    hashCode = hashCode * 59 + this.NodeTypeDescription.GetHashCode();
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
