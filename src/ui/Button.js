import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.gray};
  outline: 0;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  text-transform: uppercase;
  padding: 0.6rem 1.25rem;
  transition: 0.3s;

  :hover {
    background-color: ${props => props.theme.colors.gray};
  }
`;

export default Button;
