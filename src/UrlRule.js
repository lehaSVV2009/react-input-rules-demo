import React, { PureComponent } from "react";

export const RULE_TYPES = {
  CONTAINS: "contains",
  EXACT_MATCH: "exact_match"
};

const RULE_TYPES_VALUES = Object.values(RULE_TYPES);

class UrlRule extends PureComponent {
  handleRemoveClick = () => {
    this.props.onRemove(this.props.rule);
  };

  handleUrlChange = ({ target: { value } }) => {
    this.props.onChange({ ...this.props.rule, url: value });
  };

  handleTypeChange = ({ target: { value } }) => {
    this.props.onChange({ ...this.props.rule, type: value });
  };

  render() {
    const { rule, errors } = this.props;
    const { type, url, label, urlPlaceholder } = rule;

    if (!type) {
      throw new Error(`Mandatory "type" property is missing`);
    }

    return (
      <div>
        <div>
          {label ||
            "Type a full or partial url where you would like to display notifications."}
          <button onClick={this.handleRemoveClick}>X</button>
        </div>
        <select value={type} onChange={this.handleTypeChange}>
          {RULE_TYPES_VALUES.map((type, index) => (
            <option key={`rule-type-${index}`}>{type}</option>
          ))}
        </select>
        <input
          type="text"
          value={url || ""}
          placeholder={urlPlaceholder || "Display Url"}
          onChange={this.handleUrlChange}
        />
        {errors && errors.url && <div>{errors.url}</div>}
      </div>
    );
  }
}

export default UrlRule;
