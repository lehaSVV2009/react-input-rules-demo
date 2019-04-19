import React, { Component } from "react";
import uuid from "uuid/v4";

import Rules from "../Rules";
import { RULE_TYPES } from "../UrlRule";
import { Root } from "./styles";

const DEFAULT_RULE_TYPE = RULE_TYPES.CONTAINS;

class RulesPage extends Component {
  state = {
    rules: {},
    errors: {}
  };

  handleNewRule = () => {
    const newRule = {
      id: uuid(),
      type: DEFAULT_RULE_TYPE,
      url: ""
    };
    this.setState({
      rules: { ...this.state.rules, [newRule.id]: newRule },
      errors: { ...this.state.errors, [newRule.id]: this.validateRule(newRule) }
    });
  };

  handleChangeRule = updatedRule => {
    this.setState({
      rules: { ...this.state.rules, [updatedRule.id]: updatedRule },
      errors: {
        ...this.state.errors,
        [updatedRule.id]: this.validateRule(updatedRule)
      }
    });
  };

  handleRemoveRule = ruleToDelete => {
    const { [ruleToDelete.id]: deletedRule, ...restRules } = this.state.rules;
    const { [ruleToDelete.id]: deletedErr, ...restErrors } = this.state.errors;
    this.setState({ rules: restRules, errors: restErrors });
  };

  validateRule = rule => {
    const errors = {};

    if (!rule.url || !rule.url.trim()) {
      errors.url = "URL is Missing";
    }

    return errors;
  };

  render() {
    const { rules, errors } = this.state;

    return (
      <Root>
        <Rules
          title="Where would you like to display your campaign?"
          rules={rules}
          errors={errors}
          onNewRule={this.handleNewRule}
          onChangeRule={this.handleChangeRule}
          onRemoveRule={this.handleRemoveRule}
        />
      </Root>
    );
  }
}

export default RulesPage;
