import React, { Component } from "react";
import uuid from "uuid/v4";

import Rules from "./Rules";
import { RULE_TYPES } from "./UrlRule";

const DEFAULT_RULE_TYPE = RULE_TYPES.CONTAINS;

class DisplayRulesPage extends Component {
  state = {
    rules: []
  };

  handleNewRule = () => {
    const newRule = {
      id: uuid(),
      type: DEFAULT_RULE_TYPE,
      value: ""
    };
    this.setState({
      rules: this.state.rules.concat(newRule)
    });
  };

  handleChangeRule = updatedRule => {
    this.setState({
      rules: this.state.rules.map(rule =>
        rule.id === updatedRule.id ? updatedRule : rule
      )
    });
  };

  handleRemoveRule = ruleToDelete => {
    this.setState({
      rules: this.state.rules.filter(rule => rule.id !== ruleToDelete.id)
    });
  };

  render() {
    const { rules } = this.state;

    return (
      <Rules
        title="Where would you like to display your campaign?"
        rules={rules}
        onNewRule={this.handleNewRule}
        onChangeRule={this.handleChangeRule}
        onRemoveRule={this.handleRemoveRule}
      />
    );
  }
}

export default DisplayRulesPage;
