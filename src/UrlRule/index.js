import React, { PureComponent } from "react";

import FormControlLabel from "../ui/FormControlLabel";
import Paper from "../ui/Paper";
import TextInput from "../ui/TextInput";
import Select from "../ui/Select";
import { Container, Label, LeftItem, RightItem } from "./styles";

export const RULE_TYPES = {
  CONTAINS: "CONTAINS",
  EXACT_MATCH: "EXACT_MATCH"
};

const RULE_TYPES_OPTIONS = Object.entries({
  [RULE_TYPES.CONTAINS]: "Contains",
  [RULE_TYPES.EXACT_MATCH]: "Exact Match"
});

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
    const { rule, errors, label, urlPlaceholder } = this.props;
    const { type, url } = rule;
    const isInvalidUrl = errors && errors.url;

    if (!type) {
      throw new Error(`Mandatory "type" property is missing`);
    }

    return (
      <Paper onClose={this.handleRemoveClick}>
        <Label>
          {label ||
            "Type a full or partial url where you would like to display notifications."}
        </Label>
        <Container>
          <LeftItem>
            <Select value={type} onChange={this.handleTypeChange}>
              {RULE_TYPES_OPTIONS.map(([type, name]) => (
                <option key={`rule-type-${type}`}>{name}</option>
              ))}
            </Select>
          </LeftItem>
          <RightItem>
            <TextInput
              type="text"
              value={url || ""}
              error={isInvalidUrl}
              placeholder={urlPlaceholder || "Display Url"}
              onChange={this.handleUrlChange}
            />
            {isInvalidUrl && (
              <FormControlLabel>{errors.url}</FormControlLabel>
            )}
          </RightItem>
        </Container>
      </Paper>
    );
  }
}

export default UrlRule;
