import React, { Component } from "react";
import uuid from "uuid/v4";

import Rules from "./Rules";
import { RULE_TYPES } from "./UrlRule";

const DEFAULT_RULE_TYPE = RULE_TYPES.CONTAINS;

class DisplayRulesPage extends Component {
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

    if (!rule.url) {
      errors.url = "URL is Missing";
    }

    return errors;
  };

  render() {
    const { rules, errors } = this.state;

    return (
      <Rules
        title="Where would you like to display your campaign?"
        rules={rules}
        errors={errors}
        onNewRule={this.handleNewRule}
        onChangeRule={this.handleChangeRule}
        onRemoveRule={this.handleRemoveRule}
      />
    );
  }
}

export default DisplayRulesPage;
