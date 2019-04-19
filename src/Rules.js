import React, { memo } from "react";
import UrlRule from "./UrlRule";

const hasAnyErrors = errors =>
  errors &&
  Object.values(errors).some(
    ruleErrors => Object.values(ruleErrors).length > 0
  );

const Rules = memo(
  ({ title, rules, errors, onNewRule, onRemoveRule, onChangeRule }) => (
    <div>
      <div>{title || ""}</div>
      <div>
        {Object.values(rules).map(rule => (
          <UrlRule
            key={`rule-${rule.id}`}
            rule={rule}
            errors={errors && errors[rule.id]}
            onRemove={onRemoveRule}
            onChange={onChangeRule}
          />
        ))}
      </div>
      {!hasAnyErrors(errors) && <button onClick={onNewRule}>+ New rule</button>}
    </div>
  )
);

export default Rules;
