import React, { memo } from "react";
import UrlRule from "./UrlRule";

const Rules = memo(
  ({ title, rules, onNewRule, onRemoveRule, onChangeRule }) => (
    <div>
      <div>{title || ""}</div>
      <div>
        {Array.isArray(rules) &&
          rules.map(rule => (
            <UrlRule
              key={`rule-${rule.id}`}
              rule={rule}
              onRemove={onRemoveRule}
              onChange={onChangeRule}
            />
          ))}
      </div>
      <button onClick={onNewRule}>+ New rule</button>
    </div>
  )
);

export default Rules;
