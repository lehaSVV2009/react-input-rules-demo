import React from "react";
import styled from "styled-components";

import Button from "./Button";
import CloseIcon from "../icons/CloseIcon";

const Root = styled.div`
  margin-top: 1.4rem;
  padding: 1.4rem;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 0.4rem;
  position: relative;
  box-shadow: 3px 3px 0 0 ${props => props.theme.colors.lightGray};
`;

const CloseIconButton = styled(Button)`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  padding: 0;
  border: none;

  :hover {
    background-color: ${props => props.theme.colors.white};
  }
`;

const RedHoverCloseIcon = styled(CloseIcon)`
  fill: ${props => props.theme.colors.darkGray};
  transition: 0.3s;

  :hover {
    fill: ${props => props.theme.colors.red};
  }
`;

const Paper = ({ children, onClose }) => (
  <Root>
    <CloseIconButton onClick={onClose}>
      <RedHoverCloseIcon width={20} />
    </CloseIconButton>
    {children}
  </Root>
);

export default Paper;
