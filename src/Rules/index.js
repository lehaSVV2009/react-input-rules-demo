import React, { Fragment, memo } from "react";

import AddIcon from "../icons/AddIcon";
import Button from "../ui/Button";
import UrlRule from "../UrlRule";
import { Title, RulesContainer } from "./styles";

const hasAnyErrors = errors =>
  errors &&
  Object.values(errors).some(
    ruleErrors => Object.values(ruleErrors).length > 0
  );

const Rules = memo(
  ({ title, rules, errors, onNewRule, onRemoveRule, onChangeRule }) => (
    <Fragment>
      <Title>{title || ""}</Title>
      <RulesContainer>
        {Object.values(rules).map(rule => (
          <UrlRule
            key={`rule-${rule.id}`}
            rule={rule}
            errors={errors && errors[rule.id]}
            onRemove={onRemoveRule}
            onChange={onChangeRule}
          />
        ))}
      </RulesContainer>
      {!hasAnyErrors(errors) && (
        <Button onClick={onNewRule}>
          <AddIcon width={10} /> New rule
        </Button>
      )}
    </Fragment>
  )
);

export default Rules;
